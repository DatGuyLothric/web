import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as reducer from '../store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { PetEffects } from 'src/store/effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ pets: reducer.reducer }),
    EffectsModule.forRoot([PetEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
