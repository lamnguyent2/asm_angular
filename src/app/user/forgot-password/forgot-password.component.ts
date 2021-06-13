import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    userForm!: FormGroup;
    constructor(private location: Location) { }

    ngOnInit(): void {
        this.userForm=new FormGroup({
            'Email': new FormControl('',Validators.required)
        })  
    }

    onback(){
        this.location.back();
    }
    onlogin(){
        window.location.href="login"
    }
    onreset(){
        window.location.href="reset-password"
    }
    public onSubmit(){
        console.log(this.userForm);
        
    } 
}
