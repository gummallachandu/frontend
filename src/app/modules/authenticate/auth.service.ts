import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CommonService } from '../../common.service';

@Injectable()
export class AuthService {

    //private _signupUrl = "http://10.182.207.191:4523/signup"
    private _signupUrl = "http://localhost:4523/signup";
    private _loginUrl = "http://localhost:4523/signin";
    private _logoutUrl = "http://localhost:4523/signout";
    //private _loginUrl = "http://textmercato.com:4523/signin";
    private _contactusUrl = "http://localhost:4523/contact-us";

    constructor(private http: HttpClient,
                private _stored: CommonService) { }

    signUpUser(user) {
    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(user))
        return this.http.post<any>(this._signupUrl, user);
    }

    contactUs(data) {
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(user))
        return this.http.post<any>(this._contactusUrl, data);
    }

    loginUser(user) {
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(user))
        return this.http.post<any>(this._loginUrl, user);

    }

    logOut() {
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(user))
        return this.http.get<any>(this._logoutUrl);

    }
}
