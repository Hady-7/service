import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm !: FormGroup;
  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.min(8)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      title : new FormControl('',[Validators.required]),
      message : new FormControl('',[Validators.required,Validators.min(20)])
    });
  }
  onSubmit(){
    if( this.contactForm.valid){
      console.log(this.contactForm.value);
      window.alert('message sent successfully')
    }
    else{
      window.alert('Form is invalid')
    }
  }
}
