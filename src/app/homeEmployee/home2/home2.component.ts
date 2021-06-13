import { Component, OnInit } from '@angular/core';
import { Groupz } from '../../interface/teams';
import { Taskz } from '../../interface/tasks';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../../services/user/users.service';
import { ProjectsService } from '../../services/project/projects.service';
import { Projectz } from '../../interface/projects';
import { TasksService } from '../../services/task/tasks.service';
import { TeamsService } from 'src/app/services/team/teams.service';
import { Userz } from '../../interface/users';

@Component({
    selector: 'app-home2',
    templateUrl: './home2.component.html',
    styleUrls: ['./home2.component.css'],
    providers:[UsersService,TasksService,ProjectsService,TeamsService]
})
export class Home2Component implements OnInit {
    teamzz:Groupz[]=[];
    wests:Userz[]=[];
    westz:Userz[]=[];
    easts:Userz[]=[];
    eastz:Userz[]=[];
    souths:Userz[]=[];
    southz:Userz[]=[];
    norths:Userz[]=[];
    northz:Userz[]=[];
    userzz:Userz[]=[];
    taskzz:Taskz[]=[];
    projectzz:Projectz[]=[];
    constructor(
        private teamss: TeamsService,
        private teams: UsersService, 
        private tasks: TasksService, 
        private projects: ProjectsService
    ) {}

    ngOnInit(): void {
        this.teamss.getTeams().subscribe((data)=>{
            this.teamzz=data;           
        });
        this.projects.getProject().subscribe((data)=>{
            this.projectzz=data.length;           
        });
        this.tasks.getTask().subscribe((data)=>{
            this.taskzz=data.length;
        });
        this.teams.getUser().subscribe((data)=>{
            this.userzz=data.length;         
        });
        this.teams.getWest().subscribe((data)=>{
            console.log('West',data);
            this.wests=data;     
        });
        this.teams.getEast().subscribe((data)=>{
            console.log('East',data);
            this.easts=data;     
        });
        this.teams.getNorth().subscribe((data)=>{
            console.log('North',data);
            this.norths=data;       
        });
        this.teams.getSouth().subscribe((data)=>{
            console.log('South',data);
            this.souths=data;    
        });
    }

}
