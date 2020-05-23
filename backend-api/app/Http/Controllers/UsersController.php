<?php

namespace App\Http\Controllers;

use App\Models\User;
use illuminate\Http\Request;

class UsersController extends Controller {
    public function create(Request $request) {
        $data = $request->all();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password']
        ]);

        return response()->json($user);
    }

    public function findAll() {
        $users = User::all();
        return response()->json($users);
    }

    public function findById($id) {
        $user = User::where('id', $id)->first();
        return response()->json($user);
    }

    public function update(Request $request, $id) {
        $user = User::where('id', $id)->first();
        $dataFromTheUserToUpdate = $request->all();

        $user->update($dataFromTheUserToUpdate);
        return response()->json($user);
    }

    public function delete($id) {
        $user = User::where('id', $id)->first();
        $user->delete();

        return response()->json("User deleted");
    }
}
