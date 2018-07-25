import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../modules/authenticate/auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
    constactUserData = {};
    contactusForm: FormGroup;
    fullname: any;
    email: any ;
    mobile: any ;
    comments: string;

    constructor(private _auth: AuthService,
                private fb: FormBuilder) {
        this.contactusForm = fb.group({
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'fullname': [null, Validators.compose([Validators.required])],
            'mobile': [null, Validators.compose([Validators.required])],
            'comments': [null, Validators.compose([Validators.required])]
        });
    }

    ngOnInit() {

    }

    contactUs(formData){
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(formData))
        this._auth.contactUs(formData)
            .subscribe(
                res => console.log(res),
                err => console.log(err)
            );
    }

}
