import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CommonService } from '../../common.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    private base_url = 'http://localhost:4523/';
    //  base_url = 'http://textmercato.com:4523/';
    private base_url1 = 'http://textmercato.com:4523/';

    private _servicesUrl = this.base_url1  + 'services';

    constructor(private http: HttpClient,
                private _stored: CommonService) { }

    getServices() {
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(user))
        return this.http.get<any>(this._servicesUrl);

    }
}
