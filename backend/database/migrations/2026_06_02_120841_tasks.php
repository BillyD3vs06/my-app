<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();

            $table->string('task_name');
            $table->text('description')->nullable();

            $table->string('assigned_to');
            $table->string('assigned_by');

            $table->string('status')->default('pending');

            // Datum, exakt tid (created_at, updated_at)
            $table->timestamps();

            // Deadline, endast datum
            $table->date('due_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};