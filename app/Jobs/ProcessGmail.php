<?php

namespace App\Jobs;

use App\Actions\Integrations\Gmail;
use App\Models\Integrations\Automation;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessGmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $automation;
    protected $gmailThreads;
    protected $service;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Automation $automation)
    {
        $this->automation = $automation;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Gmail::read($this->automation);
    }
}