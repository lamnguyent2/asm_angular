import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/user/users.service';
import { Userz } from '../../interface/users';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userForm!: FormGroup;
    userzzz:Userz[]=[];
    userzz:Userz[]=[];
    userzzy:Userz[]=[];
    constructor(private location: Location, private users: UsersService,) { }

    ngOnInit(): void {
        this.userForm=new FormGroup({
            'Username': new FormControl('',Validators.required),
            'Password': new FormControl('',Validators.required),
            'id': new FormControl('9999',Validators.required)
        })  
    }

    onback(){
        this.location.back();
    }
    onreset(){
        window.location.href="reset-password"
    }
    onforgot(){
        window.location.href="forgot-password"
    }
    

    user:any={};
    token:any={};
    passz:any={};

    private createNewData() {
        const newProject:any = {};
        for(const controlfile in this.userForm.controls){
            if(controlfile){
              newProject[controlfile] = this.userForm.controls[controlfile].value;
            }
        }
        return newProject as Userz;
    }
    
    public onSubmit(){
        const newUser:any = {};      
        
        for(const controlfile in this.userForm.controls){
            if(controlfile){
                /* newUser[controlfile] = this.userForm.controls[controlfile].value; */
                this.user = Object.assign(this.user,this.userForm.value);             
            }
        }
        
        
        this.users.getUsersss(this.user.Username)
            .subscribe(data=>{
                if(data.length==0){
                    alert('Lỗi dữ liệu! Vui lòng nhập lại');window.location.reload()
                }else{
                    
                    this.passz = this.user.Password;
                    console.log(this.passz);
                    this.users.getUserpass(this.passz).subscribe((data)=>{
                        this.userzzy=data.length;    
                        console.log(data.length);
                        
                        if(data.length==0){
                            alert('Sai mật khẩu! Vui lòng nhập lại');window.location.reload()
                        }else{
                            this.users.putUserss(this.user).subscribe(
                                res=>{
                                    this.userzz.forEach(function(value){
                                        const dataroles =value.Roles;
                                        console.log(dataroles); 
                                        return dataroles;
                                                
                                    })  
                                    alert('Đăng nhập thành công!');
                                    this.token =localStorage.setItem('Users',JSON.stringify(this.user.Username));
                                    localStorage.getItem('Users');
                                    const id = 9999;
                                    this.users.deleteUsers(id).subscribe((data) => {
                                        
                                        window.location.href="home";
                                    });
                                },
                                error => {console.error('Error!',error); alert('Lỗi dữ liệu! Vui lòng nhập lại');window.location.reload()}
                            )
                        }
                    });
                }          
        })
    } 
}
