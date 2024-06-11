import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder){}

  // 
    registerForm=this.fb.group({
      // array
      username:['',[Validators.pattern('[a-zA-z]*')]],
      email:['',[Validators.pattern('[a-zA-z0-9@.]*')]],
      password:['',[Validators.pattern('[a-zA-z0-9]*')]],
    })

    // control passes through the html form
}
