import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/task/tasks.service';
import { Taskz } from '../interface/tasks';
import { ActivatedRoute, Router } from '@angular/router';
import { Userz } from '../interface/users';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
    selector: 'app-producttask',
    templateUrl: './producttask.component.html',
    styleUrls: ['./producttask.component.css'],
    providers:[TasksService]
})
export class ProducttaskComponent implements OnInit {
    public taskss:Taskz[]=[];
    listfillers:Taskz[]=[];
    timkiemValue:any;
    totalRecords:any;
    page:any=1;
    userzzzzz:Userz[]=[];
    data:any;
    datas:any;
    constructor(private tasks: TasksService, private router: Router, private route: ActivatedRoute, private teams: UsersService) { }
    ngOnInit(): void {
        this.tasks.getTask().subscribe((data)=>{
            console.log('taskss',data);
            this.taskss=data;
            this.listfillers=data;
            this.totalRecords = data.length;
        });

        console.log(localStorage.getItem('Users'));
        this.data = localStorage.getItem('Users');
        this.datas = JSON.parse(this.data);
        if(this.datas){
            this.teams.getUsersss(this.datas).subscribe((data)=>{
                this.userzzzzz=data;    
            }); 
        }
    }

    filterActs(){
        this.taskss=this.listfillers.filter(task=>task.TaskName.toLocaleLowerCase().indexOf(this.timkiemValue.toLocaleLowerCase())>=0);
        console.log(this.taskss);   
    } 

    private loadData() {
        this.tasks.getTask().subscribe((data)=>{
            console.log('taskss',data);
            this.taskss=data;
        });
    }
    public editTask(taskID:number) {
        this.router.navigate(['products-task/edittask', taskID]);
    }

    public xoaTask(taskID:number){
        console.log('task',taskID);
        this.tasks.deleteTask(taskID).subscribe((data) => {
            /* this.loadData(); */
            window.location.href="products-task"
        });
    } 
}
