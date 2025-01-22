<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $primaryKey = 'item_id'; // 主キーをカスタム設定
    protected $fillable = [
        'user_id',
        'item_name',
        'category',
        'purchase_day',
        'purchase_place',
        'purchase_price',
        'memory',
        'heart_level',
    ];

    // リレーション：このアイテムは1人のユーザーに属する
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // リレーション：このアイテムは複数の断捨離リストに含まれる可能性がある
    public function declutterLists()
    {
        return $this->hasMany(DeclutterList::class, 'item_id', 'item_id');
    }
}
