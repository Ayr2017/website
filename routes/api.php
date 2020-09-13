<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/user', function (Request $request, Response $response) { 
    return redirect()->route('home');
    // return response()->download('../routes/api.php','robots.txt');
    // return (new Response($request,200,array('Content-Type' => 'application/json')))->header('message','ZErro');
    // return 'user';
});
Route::get('/home', function (Request $request, Response $response) { 
    return 'ok';
    // return response()->download('../routes/api.php','robots.txt');
    // return (new Response($request,200,array('Content-Type' => 'application/json')))->header('message','ZErro');
    // return 'user';
})->name('home');
