<?php

namespace App\Http\Controllers;

use App\Models\Pin;
use illuminate\Http\Request;

class PinsController extends Controller {
    public function create(Request $request) {
        $data = $request->all();

        $pin = Pin::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'image_url' => $data['image_url']
        ]);

        return response()->json($pin);
    }

    public function findAll() {
        $pins = Pin::all();
        return response()->json($pins);
    }

    public function findById($id) {
        $pin = Pin::where('id', $id)->first();
        return response()->json($pin);
    }

    public function findPins($id) {
        $pin = Pin::where('id', $id)->first();
        $pins = $pins->pins;
        return response()->json($pins);
    }

    public function update(Request $request, $id) {
        $pin = Pin::where('id', $id)->first();
        $dataFromThepinToUpdate = $request->all();

        $pin->update($dataFromThepinToUpdate);
        return response()->json($pin);
    }

    public function delete($id) {
        $pin = Pin::where('id', $id)->first();
        $pin->delete();

        return response()->json("pin " + $id +  " deleted");
    }
}
