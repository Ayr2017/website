<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Email extends Mailable
{
    use Queueable, SerializesModels;
    protected $name;
    protected $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data = [])
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data = $this->data;
        return $this->view('emails.contact-mail')
        ->with([
            'name'=>$data['name'],
            'phone'=>$data['phone'],
            'email'=>$data['email'],
            'description'=>$data['description'],
        ])
        ->from('user@bombilas.ru')
        ->subject('New Contact Message!')
        ->attach($data['userfile']->getRealPath(), [
            'as' => $data['userfile']->getClientOriginalName(), 
            'mime' => $data['userfile']->getMimeType()
        ]);
    }
}
