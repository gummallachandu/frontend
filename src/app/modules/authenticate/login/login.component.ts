import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonService } from '../../../common.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
      <div>&nbsp;</div>
      <section id="contact">
          <div class="container">
              <h2 class="text-center text-uppercase text-secondary mb-0">Log In</h2>
              <hr class="star-dark mb-5">
              <h3 class="text-center help-block text-danger"> {{message}}</h3>
              <div class="row">
                  
                  <div class="col-lg-8 mx-auto">
                      <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                      <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                      <form [formGroup]="loginForm" (submit)="loginUser(loginForm.value)">
                          <div class="control-group">
                              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                  <label>Username</label>
                                  <input type="text" class="form-control" formControlName="username" placeholder="Email Or UserName" />
                                  <p class="help-block text-danger" *ngIf="!loginForm.controls['username'].valid && loginForm.controls['username'].touched"> This field is required</p>
                              </div>
                          </div>
                          <div class="control-group">
                              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                  <label>Password</label>
                                  <input type="password" class="form-control" formControlName="password" placeholder="Password"/>
                                  <p class="help-block text-danger" *ngIf="!loginForm.controls['password'].valid && loginForm.controls['password'].touched"> This field is required</p>
                              </div>
                          </div>
                          
                         
                          <br>
                          <div id="success"></div>
                          <div class="form-group">
                              <button type="submit" class="btn btn-primary btn-xl" id="submitButton" [disabled]="!loginForm.valid">Login</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

    loginUserData = {}
    loginForm: FormGroup;
    username: any;
    password: any;
    message: string;
    constructor(private _auth: AuthService,
                private _router: Router,
                private fb: FormBuilder,
                private _storageData: CommonService) {
        this.loginForm = fb.group({
            'username': [null, Validators.compose([Validators.required])],
            'password': [null, Validators.compose([Validators.required])]
        });
    }

    ngOnInit() {
    }

    loginUser(loginFormData) {
       //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginUserData))
        this._auth.loginUser(loginFormData)
            .subscribe(
                res => {
                    console.log(res);
                    if (res.status === 'success') {
                        this._storageData.isLoggedIn(true);
                        localStorage.setItem('storedData', JSON.stringify(res.data));
                        this._storageData.updatePayload();
                        this._router.navigate(['/aboutus']);
                    } else {
                        if (res.status === 'error') {
                            console.log('hleloe');
                            this.message = 'Somthing went wrong please try again';
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
