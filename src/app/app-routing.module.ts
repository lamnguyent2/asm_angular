import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ViewssComponent } from './viewss/viewss.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { CreatetaskComponent } from './admin/createtask/createtask.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProducttaskComponent } from './producttask/producttask.component';
import { EdittaskComponent } from './admin/edittask/edittask.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { Home2Component } from './homeEmployee/home2/home2.component';
import { HomechinhComponent } from './homechinh/homechinh.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { ActivesService as AuthGuard } from './services/actives.service';


const routes: Routes = [
    {path:'',component:HomeComponent, canActivate: [AuthGuard]},
    {path:'home',component:HomeComponent, canActivate: [AuthGuard]},
    {path:'bang-dieu-khien',component:HomeComponent, canActivate: [AuthGuard]},
    {path:'home-employee',component:Home2Component, canActivate: [AuthGuard]},
    {path:'trangchu',component:HomechinhComponent, canActivate: [AuthGuard]},
    {path:'products',component:ProductlistComponent, canActivate: [AuthGuard]},
    {path:'products', children:[
        {path:'createproject',component:CreateComponent, canActivate: [AuthGuard]},
        {path:'edit/:id',component:EditComponent, canActivate: [AuthGuard]},
    ]},
    {path:'products-task',component:ProducttaskComponent, canActivate: [AuthGuard]},
    {path:'products-task', children:[
        {path:'createtask',component:CreatetaskComponent, canActivate: [AuthGuard]},
        {path:'edittask/:id',component:EdittaskComponent, canActivate: [AuthGuard]},
    ]},
    {path:'edit-user/:id',component:EdituserComponent, canActivate: [AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'reset-password/:id',component:ResetPasswordComponent, canActivate: [AuthGuard]},
    {path:'forgot-password',component:ForgotPasswordComponent, canActivate: [AuthGuard]},
    {path:'gioi-thieu',component:ViewssComponent, canActivate: [AuthGuard]},
    {path:'profile/:id',component:ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
