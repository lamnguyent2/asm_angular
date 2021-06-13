import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/project/projects.service';
import { Projectz } from '../interface/projects';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
    selector: 'app-productlist',
    templateUrl: './productlist.component.html',
    styleUrls: ['./productlist.component.css'],
    providers:[ProjectsService]
})
export class ProductlistComponent implements OnInit {
    public projectss:Projectz[]=[];
    listfiller:Projectz[]=[];
    timkiemValue:any;
    totalRecords:any;
    page:any=1;
    constructor(private projects: ProjectsService, private router: Router, private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.projects.getProject().subscribe((data)=>{
            console.log('projectss',data);
            this.projectss=data;
            this.listfiller=data;
            this.totalRecords = data.length;
        });
        console.log(this.projectss);   
    }
    filterAct(){
        this.projectss=this.listfiller.filter(Pros=>Pros.ProjectName.toLocaleLowerCase().indexOf(this.timkiemValue.toLocaleLowerCase())>=0);
        console.log(this.projectss);   
    } 

    private loadData() {
        this.projects.getProject().subscribe((data)=>{
            console.log('projectss',data);
            this.projectss=data;
        });
    }
    public editProject(projectID:number) {
        this.router.navigate(['products/edit', projectID]);
    }

    public xoaProject(projectID:number){
        console.log('project',projectID);
        this.projects.deleteProject(projectID).subscribe((data) => {
            window.location.href="products"
        });
    } 
}
