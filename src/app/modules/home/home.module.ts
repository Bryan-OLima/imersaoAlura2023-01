import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    InputsComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
