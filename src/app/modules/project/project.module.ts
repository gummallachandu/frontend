import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AuthService } from '../authenticate/auth.service';
import { CommonService } from '../../common.service';
import { ProjectService } from './project.service';


import { ProjectRoutingModule } from './project-routing.module';
import { FormoneComponent } from './formone/formone.component';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers : [AuthService, CommonService, ProjectService],
    declarations: [FormoneComponent]
})
export class ProjectModule { }
