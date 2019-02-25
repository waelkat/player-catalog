import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IResponseMeta } from '../model/response-meta.model';

@Component({
  selector: 'app-players-filter',
  templateUrl: './players-filter.component.html',
  styleUrls: ['./players-filter.component.css']
})
export class PlayersFilterComponent {

  @Input() searchQuery :string = "";
  @Input() serviceResponseMeta : IResponseMeta;

  constructor(private router : Router) { }

  get filterValue(): string {
    return this.searchQuery;
  }

  set filterValue(value: string) {
    this.searchQuery = value;
    this.router.navigate(['/list'], this.getQueryParam(value));
  }

  private getQueryParam(searchQuery : string) {
    return {
      queryParams : {
        page : 1,
        per_page : this.serviceResponseMeta.per_page,
        search : searchQuery
      }
    }
  }

}
