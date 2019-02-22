import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalyersListComponent } from './players/list/palyers-list.component';
import { PalyerDetailComponent } from './players/detail/palyer-detail.component';

const routes: Routes = [
  {path: 'player/:id', component : PalyerDetailComponent},
  {path: 'list', component : PalyersListComponent},
  {path : '', redirectTo : 'list', pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
