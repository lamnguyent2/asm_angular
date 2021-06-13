import { Component, OnInit } from '@angular/core';
import { Userz } from '../../interface/users';
import { Taskz } from '../../interface/tasks';
import { Groupz } from '../../interface/teams';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../../services/user/users.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers:[UsersService]
})
export class ProfileComponent implements OnInit {
    userzzzzzzzzzz:Userz[]=[];
    id:any;
    ids:any;
    usersss:Userz[]=[];
    constructor(private teams: UsersService, private router: Router, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.id = localStorage.getItem('iduser');
        this.ids = JSON.parse(this.id);
        console.log(this.ids);
          

        this.teams.getUsersssz(this.ids).subscribe((data)=>{
            this.userzzzzzzzzzz = data;
            console.log(this.userzzzzzzzzzz);
        });
    }

    public editUser(userID:number) {
        this.router.navigate(['edit-user', userID]);
    }
    public resetpass(userID:number) {
        this.router.navigate(['reset-password', userID]);
    }

}
