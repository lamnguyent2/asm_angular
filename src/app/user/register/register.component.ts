import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsersService } from 'src/app/services/user/users.service';
import { Userz } from '../../interface/users';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers:[UsersService]
})
export class RegisterComponent implements OnInit {
    userForm!: FormGroup;
    public usersss:Userz[]=[];
    constructor(
        private location: Location,
        private users: UsersService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.userForm=new FormGroup({
            'Fullname': new FormControl('',Validators.required),
            'Username': new FormControl('',Validators.required),
            'Password': new FormControl('',Validators.required),
            'Roles': new FormControl('Employee',Validators.required),
            'Email': new FormControl('',Validators.required),
            'TeamName': new FormControl('',Validators.required),
            'Images': new FormControl('trai1.jpg'),
            'TrangThai': new FormControl('Active',Validators.required)
        })  
    }
    user:any={};
    token:any={};
    public onSubmit(){
        const newUser:any = {};        
        
        for(const controlfile in this.userForm.controls){
            if(controlfile){
                newUser[controlfile] = this.userForm.controls[controlfile].value;
                /* this.user = Object.assign(this.user,this.userForm.value);
                this.token =localStorage.setItem('Users',JSON.stringify(this.user));   */               
            }
        }
        this.users.addUser(newUser)
            .subscribe(
                res=>{console.log(res);window.location.reload();alert('Đăng ký thành công!')},
                error => {console.error('Error!',error); alert('Lỗi dữ liệu! Vui lòng nhập lại');window.location.reload()})
    } 

}
