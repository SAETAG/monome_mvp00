<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = \App\Models\Item::all(); // 全アイテムを取得
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return response()->json(['message' => 'Item creation form ready']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // テスト用に仮のユーザーIDを設定
        $validated = $request->validate([
            'item_name' => 'required|string|max:255',
            'category' => 'nullable|string|max:100',
            'purchase_day' => 'nullable|date',
            'purchase_place' => 'nullable|string|max:255',
            'purchase_price' => 'nullable|numeric',
            'memory' => 'nullable|string',
            'heart_level' => 'required|in:1,2,3,4,5',
        ]);

        // 仮のユーザーID（テスト用）
        $validated['user_id'] = 1;  // ユーザーIDを固定（仮のユーザーID）

        // アイテムを作成
        $item = \App\Models\Item::create($validated);

        // heart_level が 2 以下の場合、declutter_lists に追加
        if ($item->heart_level <= 2) {
            \App\Models\DeclutterList::create([
                'user_id' => $item->user_id,
                'item_id' => $item->item_id,
            ]);
        }

        return response()->json($item, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $item = \App\Models\Item::findOrFail($id); // IDで検索し、見つからない場合はエラーを投げる
        return response()->json($item);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $item = \App\Models\Item::findOrFail($id);
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'item_name' => 'required|string|max:255',
            'category' => 'nullable|string|max:100',
            'purchase_day' => 'nullable|date',
            'purchase_place' => 'nullable|string|max:255',
            'purchase_price' => 'nullable|numeric',
            'memory' => 'nullable|string',
            'heart_level' => 'required|in:1,2,3,4,5',
        ]);

        $item = \App\Models\Item::findOrFail($id);
        $item->update($validated);

        // heart_level が 2 以下の場合は declutter_lists に追加、超えた場合は削除
        if ($item->heart_level <= 2) {
            \App\Models\DeclutterList::updateOrCreate(
                ['user_id' => $item->user_id, 'item_id' => $item->item_id]
            );
        } else {
            \App\Models\DeclutterList::where('item_id', $item->item_id)->delete();
        }

        return response()->json($item);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = \App\Models\Item::findOrFail($id);
        $item->delete();

        return response()->json(['message' => 'Item deleted successfully!'], 200);
    }
}
