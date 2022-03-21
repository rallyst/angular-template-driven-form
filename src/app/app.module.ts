import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { MyOwnPipe } from './myown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    MyOwnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
