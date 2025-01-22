<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\DeclutterListController;

// 修正後（認証ミドルウェアを削除）
Route::post('/items', [ItemController::class, 'store']);  // アイテム登録（認証なしで動作）

// Items 用の API ルート（CRUD操作全てに対応）
Route::apiResource('items', ItemController::class);

// DeclutterList 用の API ルート（CRUD操作全てに対応）
Route::apiResource('declutter-lists', DeclutterListController::class);