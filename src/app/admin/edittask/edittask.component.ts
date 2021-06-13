import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/project/projects.service';
import { TasksService } from 'src/app/services/task/tasks.service';
import { Projectz } from '../../interface/projects';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Taskz } from '../../interface/tasks';
import { Location } from '@angular/common';

@Component({
    selector: 'app-edittask',
    templateUrl: './edittask.component.html',
    styleUrls: ['./edittask.component.css'],
    providers:[ProjectsService,TasksService]
})
export class EdittaskComponent implements OnInit {
    productForm!: FormGroup;
    public id:any;
    public ProjectName:any;
    public projectsss:Projectz[]=[];
    constructor(private projects: ProjectsService, private tasks:TasksService, private router: Router, private route: ActivatedRoute, private location: Location) { }

    private loadData(id:any) {
        this.tasks.getTasks(id).subscribe((data)=>{
            console.log('get ',data);
            for (const controlFile in this.productForm.controls) {
                if (controlFile) {
                    this.productForm.controls[controlFile].setValue(data[controlFile]);
                }
            }
        });
    }

    ngOnInit(): void {
        this.id= this.route.snapshot.paramMap.get('id');
        if(this.id>0){
            this.loadData(this.id);
        }
        this.projects.getProject().subscribe((datas)=>{
            console.log('projectss',datas);
            this.projectsss=datas;
        });
        this.productForm=new FormGroup({
            'TaskName': new FormControl('',Validators.required),
            'Desscription': new FormControl('',Validators.required),
            "Project": new FormControl('',Validators.required),
            "Assigned_To": new FormControl('',Validators.required),
            "Priority": new FormControl('',Validators.required),
            "Status": new FormControl('Holding',Validators.required)
        }) 
    }
    onBack(){
        window.location.href="products-task";
    }
    private createNewData() {
        const newTask:any = {};
        for(const controlfile in this.productForm.controls){
            if(controlfile){
                newTask[controlfile] = this.productForm.controls[controlfile].value;
            }
        }
        return newTask as Taskz;
    }
    public onSubmit() {
        if (this.id > 0) {
            this.tasks
                .modifyTask(this.id, this.createNewData())
                .subscribe((data) => {
                    window.location.href="products-task";
                });
        }else{
            this.tasks.addTasks(this.createNewData()).subscribe((data) => {
                window.location.href="products-task";
            });
        }
    }
}
