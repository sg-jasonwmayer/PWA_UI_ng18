import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
//import { AppConfigService } from './_services/appconfig/appconfig.service';

@NgModule({
  declarations: [],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    SwUpdate,
   // AppConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
