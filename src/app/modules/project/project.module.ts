import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { FormoneComponent } from './formone/formone.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [FormoneComponent]
})
export class ProjectModule { }
