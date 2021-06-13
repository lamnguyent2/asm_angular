import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/project/projects.service';
import { TasksService } from 'src/app/services/task/tasks.service';
import { Projectz } from '../../interface/projects';
import { Taskz } from '../../interface/tasks';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-createtask',
    templateUrl: './createtask.component.html',
    styleUrls: ['./createtask.component.css'],
    providers:[ProjectsService,TasksService]
})
export class CreatetaskComponent implements OnInit {
    productForm!: FormGroup;
    public posts:any;
    public ProjectName:any;
    public projectsss:Projectz[]=[];
    public tasksss: Taskz[]=[];
    constructor(private projects: ProjectsService, private tasks:TasksService, private location: Location) { }

    ngOnInit(): void {
        this.projects.getProject().subscribe((datas)=>{
            console.log('projectss',datas);
            this.projectsss=datas;
        });
        this.productForm=new FormGroup({
            'TaskName': new FormControl('',Validators.required),
            'Desscription': new FormControl('',Validators.required),
            "Project": new FormControl('',Validators.required),
            "PricesProject": new FormControl('',Validators.required),
            "Assigned_To": new FormControl('',Validators.required),
            "Priority": new FormControl('',Validators.required),
            "Status": new FormControl('Holding',Validators.required)
        })   
    }
    onBack(){
        window.location.href="products-task";
    }
    public onSubmit(){
        const newTask:any = {};
        for(const controlfile in this.productForm.controls){
            if(controlfile){
              newTask[controlfile] = this.productForm.controls[controlfile].value;
            }
        }
        console.log(newTask);
        this.tasks.addTasks(newTask).subscribe(data=>{
            window.location.href='products-task';
        },error => {console.error('Error!',error); alert('Lỗi dữ liệu!  Vui lòng thử lại!');window.location.reload()})
    } 
}
