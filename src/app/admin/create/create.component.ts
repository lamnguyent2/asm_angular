import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/project/projects.service';
import { Projectz } from '../../interface/projects';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
    providers:[ProjectsService]
})
export class CreateComponent implements OnInit {
    productForm!: FormGroup;
    public posts:any;
    public ProjectName:any;
    public projectsss:Projectz[]=[];
    constructor(private projects: ProjectsService, private location: Location) { }

  
    ngOnInit(): void {
        this.productForm=new FormGroup({
            'ProjectName': new FormControl('',Validators.required),
            'Prices': new FormControl('',Validators.required),
            'DateofStart': new FormControl('',Validators.required),
            "TeamSize": new FormControl('',Validators.required)
        })   
    }
    onBack(){
        this.location.back();
    }
    public onSubmit(){
        const newProject:any = {};
        for(const controlfile in this.productForm.controls){
            if(controlfile){
              newProject[controlfile] = this.productForm.controls[controlfile].value;
            }
        }
        this.projects.addProjects(newProject)
            .subscribe(
                data=>{ window.location.href='products';},
                error => {console.error('Error!',error); alert('Lỗi dữ liệu! Vui lòng nhập lại');window.location.reload()})
    } 
  
}