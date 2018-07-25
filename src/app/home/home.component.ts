import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../modules/authenticate/auth.service';
import {Router} from '@angular/router';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    projTitleForm: FormGroup;
    projectTitle: string;
    constructor(private _auth: AuthService,
                private _router: Router,
                private fb: FormBuilder,
                private _storageData: CommonService) {
        this.projTitleForm = fb.group({
            'projectTitle': [null, Validators.compose([Validators.required])]
        });
    }
    ngOnInit() {
    }

    postProject(FormData) {
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginUserData))
        localStorage.setItem('projectTitle', FormData.projectTitle);
        this._router.navigate(['formone']);
    }

}
