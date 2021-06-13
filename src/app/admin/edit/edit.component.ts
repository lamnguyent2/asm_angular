import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/project/projects.service';
import { Projectz } from '../../interface/projects';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    providers:[ProjectsService]
})
export class EditComponent implements OnInit {

    productForm!: FormGroup;
    public id:any;
    public ProjectName:any;
    public projectsss:Projectz[]=[];
    constructor(private projects: ProjectsService, private router: Router, private route: ActivatedRoute, private location: Location) { }

    
    private loadData(id:any) {
        this.projects.getProjects(id).subscribe((data)=>{
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
        this.productForm=new FormGroup({
            'ProjectName': new FormControl('',Validators.required),
            'Prices': new FormControl('',Validators.required),
            'DateofStart': new FormControl('',Validators.required),
            "TeamSize": new FormControl('',Validators.required)
        })    
    }
    onBack(){
        window.location.href="products";
    }
    private createNewData() {
        const newProject:any = {};
        for(const controlfile in this.productForm.controls){
            if(controlfile){
              newProject[controlfile] = this.productForm.controls[controlfile].value;
            }
        }
        return newProject as Projectz;
    }
    public onSubmit() {
        if (this.id > 0) {
            this.projects
                .modifyProject(this.id, this.createNewData())
                .subscribe((data) => {
                    window.location.href="products";
                });
        } else {
            this.projects.addProjects(this.createNewData()).subscribe((data) => {
                window.location.href="products";
            });
        }
    }

}
