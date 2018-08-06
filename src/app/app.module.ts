import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { BootstrapModuleModule } from './bootstrap-module/bootstrap-module.module';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';

import { routing } from './app.routing';

import { EventDataService } from './service/event-data.service';
import { PowerPipe } from './event/power.pipe';
import { AddEventComponent } from './event/add-event/add-event.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { MenuComponent } from './cuisine/menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    PowerPipe,
    AddEventComponent,
    CuisineComponent,
    MenuComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModuleModule
  ],
  providers: [
    EventDataService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
