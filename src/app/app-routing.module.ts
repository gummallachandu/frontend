import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateModule } from './modules/authenticate/authenticate.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectModule } from './modules/project/project.module';

import { CommonService } from './common.service';
import { ProjectService } from './modules/project/project.service';


import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './modules/authenticate/login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './modules/authenticate/signup/signup.component';
import { LogoutComponent} from './modules/authenticate/logout/logout.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signout',
        component: LogoutComponent
    }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule, BrowserModule, ProjectModule],
  exports: [ RouterModule ],
  providers: [ CommonService, ProjectService ]
})
export class AppRoutingModule {  }
export const routingComponets = [
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    SignupComponent,
    LogoutComponent
]
