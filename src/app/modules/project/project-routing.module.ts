import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormoneComponent } from './formone/formone.component.ts';

const projectRoutes: Routes = [
    {
        path: 'formone',
        component: FormoneComponent,
        children: [
            {
                path: '',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
