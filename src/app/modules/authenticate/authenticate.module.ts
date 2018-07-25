import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { CommonService } from '../../common.service';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers : [AuthService, CommonService],
    declarations: [SignupComponent, LogoutComponent]
})
export class AuthenticateModule { }
