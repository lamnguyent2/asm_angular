import { Input, NgModule } from '@angular/core';
/* import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common"; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { ViewssComponent } from './viewss/viewss.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { CreatetaskComponent } from './admin/createtask/createtask.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProducttaskComponent } from './producttask/producttask.component';
import { ProjectsService } from './services/project/projects.service';
/* import { HttpClientModule } from '@angular/common/http'; */
import { EdittaskComponent } from './admin/edittask/edittask.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { TeamsComponent } from './showteam/teams/teams.component';
/* import { NgxPaginationModule } from 'ngx-pagination'; */
import { Home2Component } from './homeEmployee/home2/home2.component';
import { HomechinhComponent } from './homechinh/homechinh.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductlistComponent,
        HomeComponent,
        ViewssComponent,
        FooterComponent,
        CreateComponent,
        EditComponent,
        CreatetaskComponent,
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent,
        ProducttaskComponent,
        EdittaskComponent,
        ForgotPasswordComponent,
        TeamsComponent,
        Home2Component,
        HomechinhComponent,
        ProfileComponent,
        EdituserComponent
    ],
    imports: [
        AppRoutingModule,
        SharedModule
    ],
    providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
