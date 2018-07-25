import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';



import { AppRoutingModule, routingComponets } from './app-routing.module';
import { AuthenticateModule } from './modules/authenticate/authenticate.module';

import { AuthService } from './modules/authenticate/auth.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './modules/authenticate/login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectformComponent } from './home/projectform/projectform.component';





@NgModule({
    declarations: [
        AppComponent,
        routingComponets,
        HomeComponent,
        LoginComponent,
        AboutusComponent,
        ProjectformComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [AuthService, CommonService],
    bootstrap: [AppComponent]
})
export class AppModule { }