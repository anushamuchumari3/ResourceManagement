import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      
    });
  }
  login(){
    const formValue = this.loginForm.value;
    //alert("login username : "+formValue.name);
    this.router.navigate(['/home']);
  }
 
}
