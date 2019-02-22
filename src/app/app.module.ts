import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalyersListComponent } from './players/list/palyers-list.component';
import { PalyerItemComponent } from './players/item/palyer-item.component';
import { PalyerDetailComponent } from './players/detail/palyer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PalyersListComponent,
    PalyerItemComponent,
    PalyerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
