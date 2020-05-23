<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route::middleware('cors')->get('/nombreruta', Controller::funcionasociada());
Route::group(['middleware' => ['cors']], function () {
    Route::post('/pins', 'PinsController@create');
    Route::get('/pins', 'PinsController@findAll');
    Route::get('/pins/{id}', 'PinsController@findById');
    Route::put('/pins/{id}', 'PinsController@update');
    Route::delete('/pins/{id}', 'PinsController@delete');

    Route::post('/boards', 'BoardsController@create');
    Route::get('/boards', 'BoardsController@findAll');
    Route::get('/boards/{id}', 'BoardsController@findById');
    Route::put('/boards/{id}', 'BoardsController@update');
    Route::delete('/boards/{id}', 'BoardsController@delete');

    Route::get('/boards/{id}/pins', 'BoardsController@findPins');
    Route::get('/boards/{id}/pins/{pin_id}', 'BoardsController@findPinOfBoard');

    Route::post('/users', 'UsersController@create');
    Route::get('/users', 'UsersController@findAll');
    Route::get('/users/{id}', 'UsersController@findById');
    Route::put('/users/{id}', 'UsersController@update');
    Route::delete('/users/{id}', 'UsersController@delete');
});


