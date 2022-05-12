import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Screen1RoutingModule } from './screen1-routing.module';
import {MaterialModule} from '../../../material.module';
import {StatModule} from '../../shared/modules/stat/stat.module';
import {NgChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [Screen1Component],
    imports: [
        CommonModule,
        Screen1RoutingModule,
        FlexLayoutModule.withConfig({addFlexToParent: false}),
        MaterialModule,
        StatModule,
        NgChartsModule
    ]
})
export class Screen1Module { }
