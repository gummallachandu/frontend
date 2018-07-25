import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CommonService } from '../../common.service';

@Injectable()
export class AuthService {
    private base_url = 'http://localhost:4523/';
    //  base_url = 'http://textmercato.com:4523/';
    private base_url1 = 'http://textmercato.com:4523/';
    // private _signupUrl = 'http://10.182.207.191:4523/signup';
    private _signupUrl =  this.base_url1 + 'signup';
    private _loginUrl = this.base_url + 'signin';
    private _logoutUrl = this.base_url + 'signout';
    // private _loginUrl = 'signin';
    private _contactusUrl = this.base_url1 + 'contact-us';


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
