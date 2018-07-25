import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { AuthService } from '../modules/authenticate/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    userName: any ;
    isUserLoggedIn: boolean;

    constructor(private _storeData: CommonService,
                private _auth: AuthService) {
        this._storeData.payloadcast.subscribe(userName => {
            if (userName) {
                this.userName = userName.displayName;
                this._storeData.isLoggedIn(true);
            } else {
                this.userName = null;
                this._storeData.isLoggedIn(false);
            }
        });
        this._storeData.isUserLoggedInCast.subscribe( value => {
            this.isUserLoggedIn = value;
        });

    }

    ngOnInit() {
        this._storeData.payloadcast.subscribe(userName => {
            if (userName) {
                this.userName = userName.displayName;
                this.isUserLoggedIn = true;
            } else {
                this.userName = null;
                this.isUserLoggedIn = false;
            }
        });
        this._storeData.isUserLoggedInCast.subscribe( value => {
            this.isUserLoggedIn = value;
        });


        console.log(this.isUserLoggedIn);
    }

}
