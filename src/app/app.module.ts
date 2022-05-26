import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({

  declarations:[
    AppComponent
  ],
  exports:[],
  imports:[
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],

  bootstrap:[AppComponent]

})


export class AppModule { }
