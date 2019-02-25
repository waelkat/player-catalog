import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-filter',
  templateUrl: './players-filter.component.html',
  styleUrls: ['./players-filter.component.css']
})
export class PlayersFilterComponent {

  @Input() searchQuery :string = "";

  constructor(private router : Router) { }

  get filterValue(): string {
    return this.searchQuery;
  }

  set filterValue(value: string) {
    this.searchQuery = value;
    this.router.navigate(['/list'], {queryParams : {search : value}});
  }

}
