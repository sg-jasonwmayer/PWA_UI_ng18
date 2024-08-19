import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [swUpdate],
  bootstrap: [AppComponent]
})
export class AppModule { }
