<?php

namespace App\Console\Commands;

use App\Models\Team;
use Illuminate\Console\Command;

use App\Domains\Budget\Services\BudgetRolloverService;

class CheckMonthRollover extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-month-rollover';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'check month roll over for all teams';

    /**
     * Execute the console command.
     */
    public function handle(BudgetRolloverService $rolloverService)
    {

        $teams = Team::with('timezone')->without(['settings'])->get();
        dd($teams->toArray());

    }
}