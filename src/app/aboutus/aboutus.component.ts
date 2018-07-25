import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service';

@Component({
  selector: 'app-aboutus',
  template: `
      <!-- About Section -->
      <div>&nbsp;</div> 
      <section class="bg-primary text-white mb-0" id="about">
          <div class="container">
              <h2 class="text-center text-uppercase text-white">About   <p class="alert-success pull-right">{{magic}} Hi! {{userName2.displayName}} -- {{message}}</p></h2>
              <hr class="star-light mb-5">
              <div class="row">
                  <div class="col-lg-4 ml-auto">
                      <p class="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                  </div>
                  <div class="col-lg-4 mr-auto">
                      <p class="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                  </div>
              </div>
              <div class="text-center mt-4">
                  <a class="btn btn-xl btn-outline-light" href="#">
                      <i class="fa fa-download mr-2"></i>
                      Download Now!
                  </a>
              </div>
          </div>
      </section>
  `,
  styles: []
})
export class AboutusComponent implements OnInit {

    userName2: any ;
    message: string;

    constructor(private _storeData: CommonService) { }
    ngOnInit() {
        console.log('oninit about us' + this._storeData.userName);
       // this.userName1 = this._storeData.userName;
        this._storeData.payloadcast.subscribe(
            res => {
                 if (res)
                  this.userName2 = res;
                 else
                   this.userName2 = null;
               // this.message = 'wow';
                },
            err => {
                this.message = 'Somthing went wrong please try again';
                }
            );

    }
}
