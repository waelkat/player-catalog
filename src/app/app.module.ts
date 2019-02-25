import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalyersListComponent } from './players/list/palyers-list.component';
import { PalyerDetailComponent } from './players/detail/palyer-detail.component';
import { PlayersPaginationComponent } from './players/pagination/players-pagination.component';
import { PlayersFilterComponent } from './players/filter/players-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PalyersListComponent,
    PalyerDetailComponent,
    PlayersPaginationComponent,
    PlayersFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
