<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function send(Request $request){
        $userphone = $request->userphone;
        $useremail = $request->useremail;
        $userfile = $request->userfile;
        $userdescription = $request->userdescription;
        $to      = 'ayrat.2013@ya.ru';
        $subject = $request->username;
        $message = "Имя:  $subject , \r\n телефон: $useremail, \r\n email: $useremail, \r\n".
        "Описание: $userdescription \r\n" ;

        $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

        $result = mail($to, $subject, $message, $headers);
        if($result) {
            return 'ok';
        } else {
            $errorMessage = error_get_last()['message'];
            return json_encode(['error_message' => $errorMessage]);
        }

        // Mail::send(['text'=>'mail'],['name','USERNAME'], function($message){
        //     $message->to('ayrat.2013@ya.ru', 'TO Ayrat')->subject('Trest email');
        //     $message->from('ayrat.2013@yandex.ru', 'FomMe');
        // });
        
    }
}
