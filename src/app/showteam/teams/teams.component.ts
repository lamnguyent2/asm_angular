import { Component, OnInit } from '@angular/core';
import { Userz } from '../../interface/users';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers:[UsersService]
})
export class TeamsComponent implements OnInit {
  idteam:any;
  datauser:any;
  public projectsss:Userz[]=[];
  constructor(private users: UsersService, private router: Router, private route: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {

  }



}
