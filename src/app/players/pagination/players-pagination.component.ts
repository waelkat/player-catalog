import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IResponseMeta } from '../model/response-meta.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-pagination',
  templateUrl: './players-pagination.component.html',
  styleUrls: ['./players-pagination.component.css']
})
export class PlayersPaginationComponent implements OnInit, OnChanges {

  @Input() serviceResponseMeta : IResponseMeta;

  pageSizeSelectOptions : any[] = [];
  pageNumberSelectOptions : any[] = [];
  paginationPages : any[] = [];

  constructor(private router : Router) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.setSizeSelectOptions();
    this.setPageNumberSelectOptions();
    this.setCurrentPagesNumber();
  }

  pageSizeChange(event) : void {
    this.router.navigate(['/list'], { queryParams: {per_page : event.target.value, page: this.serviceResponseMeta.current_page }});
  }

  pageNumberChange(event) : void {
    this.router.navigate(['/list'], { queryParams: { page: event.target.value } });
  }

  private setCurrentPagesNumber() : void {
    if(!this.serviceResponseMeta){
      return;
    }

    this.paginationPages = [];
    let currentPage = this.serviceResponseMeta.current_page;
    let totalPages = this.serviceResponseMeta.total_pages;
    let maxPages = 4;
    let startPageIndex = 1;
    let endPageIndex = totalPages;

    if(totalPages > maxPages) {
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;        
      
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPageIndex = 1;
        endPageIndex = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPageIndex = totalPages - maxPages + 1;
        endPageIndex = totalPages;
      } else {
        // current page somewhere in the middle
        startPageIndex = currentPage - maxPagesBeforeCurrentPage;
        endPageIndex = currentPage + maxPagesAfterCurrentPage;
      }
    }

    for(let i=startPageIndex; i<=endPageIndex; i++){
      this.paginationPages.push({
        value : i,
        selected : i == this.serviceResponseMeta.current_page
      });
    }
  }

  private setPageNumberSelectOptions() : void {
    if(!this.serviceResponseMeta){
      return;
    }
    this.pageNumberSelectOptions = [];
    for(let i=1; i<=this.serviceResponseMeta.total_pages; i++){
      this.pageNumberSelectOptions.push({
        value : i,
        label : i,
        selected : i == this.serviceResponseMeta.current_page
      });
    }
  }

  private setSizeSelectOptions() : void{
    if(!this.serviceResponseMeta){
      return;
    }
    this.pageSizeSelectOptions = [];
    var pageSizeOptions = [10, 25, 50, 100];

    for (var value of pageSizeOptions) {
      this.pageSizeSelectOptions.push({
        value : value,
        label : value,
        selected : value == this.serviceResponseMeta.per_page
      });
    }
  }

}
