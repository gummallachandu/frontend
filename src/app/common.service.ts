import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class CommonService {
    storedData: any;
    userData: any;
    userName: string;
    private  payload = new BehaviorSubject(null);
    payloadcast = this.payload.asObservable();

    private isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    isUserLoggedInCast = this.isUserLoggedIn.asObservable();

    constructor() {
        this.storedData = JSON.parse(localStorage.getItem('storedData'));
        this.payload.next(this.storedData);
    }

    updatePayload() {
        this.storedData = JSON.parse(localStorage.getItem('storedData')); // alert (JSON.parse(this.status));
        this.payload.next(this.storedData);
    }

    clearPayload() {
        this.payload.next(null);
    }

    isLoggedIn(status) {
        this.isUserLoggedIn.next(status);
    }

    getStorageDataByItem(item) {
        this.storedData = JSON.parse(localStorage.getItem('storedData'));  // alert (this.storedData);
        if (this.storedData !== null) {
            console.log ('coll' + this.storedData.displayName);
            return this.storedData.displayName;
        } else {
            return null;
        }

    }


}
