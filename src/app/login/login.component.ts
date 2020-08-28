import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get email() { return this.contactForm.get('email')};
  get password() { return this.contactForm.get('password')};
  public contPas = 0;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createFormGroup(){
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }
  contactForm: FormGroup;
  constructor() {
    this.contactForm = this.createFormGroup();
  }
  ngOnInit(): void {
  }

  bloqueo(){
    this.contactForm.get('email').disable();
    this.contactForm.get('password').disable();
  }

  login(){
    if(this.contactForm.valid){
      // console.log('ok')
      if(this.contPas < 3){
        if(this.contactForm.value.email === 'zarraga555@hotmail.es' && this.contactForm.value.password === '123456789'){
          console.log('logeado');
        }else{
          this.contPas++;
          console.log('Datos ingresados erroneos');
          if(this.contPas === 3){
            this.contactForm.get('email').disable();
            this.contactForm.get('password').disable();
            setTimeout(function(){
              console.log('bloqueo de inputs');
              this.contPas = 0;
              console.log(this.contPas);
            }, 500);
          }
        }
      }
    }
  }







//   login(form: NgForm){
//     console.log(form.value);
//     if(this.contPas >= 3){
//       let email = document.getElementById('email');
//       let password = document.getElementById('password');
//       let btn = document.getElementById('btn');

//       setTimeout(function(){

//       }, 30000);
//     }else{
//       if(form.value.email === '1' && form.value.password === '1'){
//         console.log('Logeado');
//       }else{
//         this.contPas++;
//       }
//     }
//   }
}
