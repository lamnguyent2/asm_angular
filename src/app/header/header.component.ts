import { Component, OnInit } from '@angular/core';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';
import { Userz } from '../interface/users';
import { UsersService } from 'src/app/services/user/users.service';
import { Router } from '@angular/router';
Router
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers:[UsersService]
})
export class HeaderComponent implements OnInit {
    authenticated = false;
    userzz:Userz[]=[];
    data:any;
    datas:any;
    Roles:any;
    dataroles:any;
    datasroles:any;
    constructor(private http: HttpClient, private router: Router, private teams: UsersService) { }

    ngOnInit(): void {
        console.log(localStorage.getItem('Users'));
        this.data = localStorage.getItem('Users');
        this.datas = JSON.parse(this.data);
        if(this.datas){
            this.teams.getUsersss(this.datas).subscribe((data)=>{
                this.userzz=data;    
            }); 
        }
    }

    public profile(userID:number) {
        localStorage.setItem('iduser',JSON.stringify(userID));
    }

    logout(){
        localStorage.clear();
    }


}
