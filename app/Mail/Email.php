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
    public function __construct($name, $phone, $email, $description)
    {
        $this->name = $name;
        $this->phone = $phone;
        $this->email = $email;
        $this->description = $description;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.contact-mail')
        ->with([
            'name'=>$this->name,
            'phone'=>$this->phone,
            'email'=>$this->email,
            'description'=>$this->description,
        ])
        ->from('norepy@cs.ru')
        ->subject('New Contact Message!'); 
    }
}
