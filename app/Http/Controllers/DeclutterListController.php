<?php

namespace App\Http\Controllers;

use App\Models\DeclutterList;
use Illuminate\Http\Request;

class DeclutterListController extends Controller
{
    /**
     * Display a listing of the declutter lists.
     */
    public function index()
    {
        $declutterLists = DeclutterList::all();
        return response()->json($declutterLists);
    }

    /**
     * Store a newly created declutter list in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'item_id' => 'required|exists:items,item_id',
        ]);

        $declutterList = DeclutterList::create($validated);
        return response()->json($declutterList, 201);
    }

    /**
     * Display the specified declutter list.
     */
    public function show($id)
    {
        $declutterList = DeclutterList::findOrFail($id);
        return response()->json($declutterList);
    }

    /**
     * Remove the specified declutter list from storage.
     */
    public function destroy($id)
    {
        $declutterList = DeclutterList::findOrFail($id);
        $declutterList->delete();
        return response()->json(['message' => 'Declutter list deleted successfully.']);
    }
}
