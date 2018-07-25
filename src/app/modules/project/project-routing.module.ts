import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormoneComponent } from './formone/formone.component';
import {HomeComponent} from '../../home/home.component';

const projectRoutes: Routes = [
    {
        path: 'formone',
        component: FormoneComponent,
        children: [
            {
                path: ':id',
                component: FormoneComponent,
                children: [
                    {
                        path: '',
                        component: FormoneComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
