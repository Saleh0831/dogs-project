import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesAllRoutingModule } from './pages-all-routing.module';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    PagesAllRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesAllModule { }
