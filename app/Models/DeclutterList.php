<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeclutterList extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'item_id',
    ];

    // リレーション：この断捨離リストは1人のユーザーに属する
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // リレーション：この断捨離リストは1つのアイテムに属する
    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'item_id');
    }
}
