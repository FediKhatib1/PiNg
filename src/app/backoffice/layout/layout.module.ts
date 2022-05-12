import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../shared/modules/material/material.module';
import { TestComponent } from '../test/test.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { Screen2Component } from './screen2/screen2.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule,
        TranslateModule
    ],
    declarations: [
        Screen2Component,
        LayoutComponent,
        NavComponent,
        TopnavComponent,
        SidebarComponent,TestComponent
    ]

})
export class LayoutModule { }
