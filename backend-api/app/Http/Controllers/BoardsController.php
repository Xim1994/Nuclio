<?php

namespace App\Http\Controllers;

use App\Models\Board;
use illuminate\Http\Request;

class BoardsController extends Controller {
    public function create(Request $request) {
        $data = $request->all();

        $board = Board::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'category' => $data['category'],
            'owner' => $data['owner']
        ]);

        return response()->json($board);
    }

    public function findAll() {
        $boards = Board::all();
        return response()->json($boards);
    }

    public function findById($id) {
        $board = Board::where('id', $id)->first();
        return response()->json($board);
    }

    public function findPins($id) {
        $board = Board::where('id', $id)->first();
        $pins = $boards->pins;
        return response()->json($pins);
    }

    public function update(Request $request, $id) {
        $board = Board::where('id', $id)->first();
        $dataFromTheBoardToUpdate = $request->all();

        $board->update($dataFromTheBoardToUpdate);
        return response()->json($board);
    }

    public function delete($id) {
        $board = Board::where('id', $id)->first();
        $board->delete();

        return response()->json("Board deleted");
    }
}
