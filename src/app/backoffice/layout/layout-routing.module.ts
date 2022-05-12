import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumbackComponent } from '../forumback/forumback.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { LayoutComponent } from './layout.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen1Module } from './screen1/screen1.module';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren:()=>DashboardModule
            },
            {
                path: 'screen1',
                loadChildren:()=>Screen1Module
            },
            {
                path: 'post',
                component:ForumbackComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
