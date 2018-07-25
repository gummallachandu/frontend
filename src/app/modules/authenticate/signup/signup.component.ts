import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonService } from '../../../common.service';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupUserData = {};
    signupForm: FormGroup;
    post: any;
    email: any ;
    password: any ;
    firstName: string;
    lastName: string;
    username: any;
    message: string;
    constructor(private _auth: AuthService,
                 private fb: FormBuilder,
                 private _storageData: CommonService,
                 private _router: Router) {
        this.signupForm = fb.group({
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'password': [null, Validators.compose([Validators.required])],
            'firstName': [null, Validators.compose([Validators.required])],
            'lastName': [null, Validators.compose([Validators.required])],
            'username': [null, Validators.compose([Validators.required])]
        });
    }

    ngOnInit() {

    }

    signupUser(formData) {
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(formData))
        this._auth.signUpUser(formData)
            .subscribe(
                res => {
                    console.log(res);
                    if (res.status === 'success') {
                        this._router.navigate(['/login']);
                    } else {
                        if (res.status === 'error') {
                            this.message = 'Somthing went wrong please try again';
                            return false;
                        }
                    }
                },
                err => {
                    console.log(err);
                    this.message = 'Somthing went wrong please try again';
                }
            );
    }

}
