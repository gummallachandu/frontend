import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonService} from '../../../common.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',

})
export class LogoutComponent implements OnInit {

    constructor(private _auth: AuthService,
                private _router: Router,
                private _storageData: CommonService) { }

    ngOnInit() {
        this._auth.logOut()
            .subscribe(
                res => {
                    if (res.status === 'success') {
                        this._storageData.isLoggedIn(false);
                        localStorage.clear();
                        this._storageData.clearPayload();
                        // this._storageData.updatePayload();
                        this._router.navigate(['/login']);
                    }

                },
                err => console.log(err)
            );
    }

}
