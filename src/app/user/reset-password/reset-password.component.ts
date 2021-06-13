import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsersService } from 'src/app/services/user/users.service';
import { Userz } from '../../interface/users';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
    providers:[UsersService]
})
export class ResetPasswordComponent implements OnInit {

    userForm!: FormGroup;
    Password2:any;
    form:any;
    public usersss:Userz[]=[];
    public id:any;
    constructor(
        private location: Location,
        private users: UsersService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) { }
    user:any={};
    private loadData(id:any) {
        this.users.getUsers1(id).subscribe((data)=>{
            console.log('get ',data);
            for (const controlFile in this.userForm.controls) {
                if (controlFile) {
                    this.userForm.controls[controlFile].setValue(data[controlFile]);
                    this.user = Object.assign(this.user,this.userForm.value);
                    console.log(this.user.Password);                    
                }
            }
        });
    }

    ngOnInit(): void {
        this.id= this.route.snapshot.paramMap.get('id');
        if(this.id>0){
            this.loadData(this.id);
        }
        this.userForm=new FormGroup({
            'Fullname': new FormControl('',Validators.required),
            'Username': new FormControl('',Validators.required),
            'Password': new FormControl('',Validators.required),
            'Roles': new FormControl('',Validators.required),
            'Email': new FormControl('',Validators.required),
            'TeamName': new FormControl('',Validators.required),
            'Images': new FormControl('',Validators.required),
            'TrangThai': new FormControl('Active',Validators.required)
        })  
    }

    onback(){
        window.location.href="profile/"+this.id;
    }

    private createNewData() {
        const newUser:any = {};
        for(const controlfile in this.userForm.controls){
            if(controlfile){
                newUser[controlfile] = this.userForm.controls[controlfile].value;
            }
        }
        return newUser as Userz;
    }
    public onSubmit() {
            if (this.id > 0) {
                this.users
                    .modifyUser(this.id, this.createNewData())
                    .subscribe((data) => {
                        window.location.href="profile/"+this.id;
                    });
            } else {
                this.users.addUser(this.createNewData()).subscribe((data) => {
                    window.location.href="profile/"+this.id;
                });
            }
        
    }
}
