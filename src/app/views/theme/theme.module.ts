import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ColorsComponent } from './colors.component';

import {AddDialogComponent} from '../../dialogs/add/add.dialog.component'
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TripService } from 'src/app/services/tripservice.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    MatPaginatorModule,  MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    ColorsComponent,
    AddDialogComponent
    
  
  ],
  providers:[TripService]
})
export class ThemeModule {
}
