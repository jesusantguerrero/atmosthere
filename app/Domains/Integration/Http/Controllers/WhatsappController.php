<?php

namespace App\Domains\Integration\Http\Controllers;

use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Api\BaseController;
use App\Domains\Integration\Models\Integration;
use App\Domains\Integration\Actions\Whatsapp\CreateTaskFromMessage;

class WhatsappController extends BaseController
{
    /**
     * Verify the webhook (GET request for verification).
     */
    public function verify()
    {
        $verifyToken = config('integrations.whatsapp.webhook.verifyToken'); // Define your verification token in the .env file
        $mode = request()->get('hub_mode') ?? request()->get('hub.mode');
        $token = request()->get('hub_verify_token');
        $challenge = request()->get('hub_challenge');
        if ($mode == 'subscribe' && $token == $verifyToken) {
            return response($challenge, 200);
        }

        return response($mode, 403);
    }

    /**
     * Handle incoming webhook events (POST request).
     */
    public function handle()
    {
        // Log the incoming request for debugging (optional)
        Log::info('WhatsApp Webhook Event:', request()->all());

        // Process the incoming WhatsApp message
        $data = request()->json()->all();

        // Extract phone_number_id from the webhook payload
        $phoneNumberId = request()->input('entry.0.changes.0.value.metadata.phone_number_id');

        if (!$phoneNumberId) {
            return response()->json(['error' => 'Invalid payload'], 400);
        }

        $userIntegration = Integration::where('config->phone_number_id', $phoneNumberId)->first();

        if (!$userIntegration) {
            return response()->json(['error' => "Phone number ID {$phoneNumberId} not recognized "], 404);
        }

        if (isset($data['entry'])) {
            foreach ($data['entry'] as $entry) {
                foreach ($entry['changes'] as $change) {
                    if (isset($change['value']['messages'])) {
                        foreach ($change['value']['messages'] as $message) {
                            // Extract message details
                            $from = $message['from']; // Sender's phone number
                            $messageType = $message['type']; // Message type (e.g., text, image, etc.)
                            $content = $message['text']['body'] ?? ''; // Message content (if text)

                            // Example: Handle a text message
                            if ($messageType === 'text') {
                                (new CreateTaskFromMessage())->create($userIntegration->team, $from, $content, $messageType);
                            }
                        }
                    }
                }
            }
        }

        // Respond to the webhook with a 200 status code
        return response('Webhook received', 200);
    }
}
