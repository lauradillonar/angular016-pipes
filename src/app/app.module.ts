import { MyFirstPipe } from './myFirstPipe.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MySecondPipe } from './my-second.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstPipe,
    MySecondPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
