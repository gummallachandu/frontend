import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../authenticate/auth.service';
import {Router} from '@angular/router';
import { CommonService } from '../../../common.service';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {
    formOneForm: FormGroup;
    projectTitle: any;
    servicename: string;
    servicetype: string;
    services: any;
    message: string;
    servicecheck: string;

    constructor(private _auth: AuthService,
                private _router: Router,
                private fb: FormBuilder,
                private _storageData: CommonService,
                private _projectSrv: ProjectService) {
        this.formOneForm = fb.group({
            'servicename': [null, Validators.compose([Validators.required])],
            'servicetype': [null, Validators.compose([Validators.required])],
            'servicecheck': [null, Validators.compose([Validators.required])]
        });
    }

    ngOnInit() {
        this.projectTitle = localStorage.getItem('projectTitle');
        // this.projectTitle = projectDetails.projectTitle;

        this._projectSrv.getServices()
            .subscribe(
                res => {
                    console.log(res);
                    if (res.status === 'success') {
                        this.services = res.data;
                    } else {
                        if (res.status === 'error') {
                            console.log('hleloe');
                            this.message = 'Somthing went wrong please try again';
                        }
                    }
                },
                err => {
                    console.log(err);
                    this.message = 'Somthing went wrong in service fetch';
                }
            );
    }

    postProjectFormOne(FormData) {
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginUserData))
        localStorage.setItem('projectDetails', JSON.stringify(this.projectTitle));
        this._router.navigate(['/aboutus']);
    }

