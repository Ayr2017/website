<?php

use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('welcome');
});
Route::get('/websites', function () {
    return view('welcome');
});
Route::get('/allservices', function () {
    return view('welcome');
});
Route::get('/desktopapp', function () {
    return view('welcome');
});
Route::get('/webanimation', function () {
    return view('welcome');
});
Route::get('/contacts', function () {
    return view('welcome');
});
Route::get('/all_and_good_by', function () {
    return view('welcome');
});

// Маршруты аутентификации...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Маршруты регистрации...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::post('/message', 'MailController@sendMail');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin', 'AdminController@index')->name('admin');
Route::get('/admin/blog', 'AdminController@index')->name('admin');
Route::get('/admin/blog/{id?}', 'AdminController@index')->name('admin');
