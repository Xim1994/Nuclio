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
