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
        Schema::create('items', function (Blueprint $table) {
            $table->id('item_id'); // 主キー
            $table->unsignedBigInteger('user_id'); // 外部キー
            $table->string('item_name'); // アイテム名
            $table->string('category')->nullable(); // カテゴリ（任意）
            $table->date('purchase_day')->nullable(); // 購入日（任意）
            $table->string('purchase_place')->nullable(); // 購入場所（任意）
            $table->decimal('purchase_price', 10, 2)->nullable(); // 購入価格（任意）
            $table->text('memory')->nullable(); // 思い出（任意）
            $table->enum('heart_level', ['1', '2', '3', '4', '5']); // 愛情レベル（1〜5）
            $table->timestamps(); // 作成日時、更新日時
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
