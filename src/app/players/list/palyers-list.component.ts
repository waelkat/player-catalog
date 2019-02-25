import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../model/player.model';
import { PalyerService } from '../palyer.service';
import { IResponseMeta } from '../model/response-meta.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-palyers-list',
  templateUrl: './palyers-list.component.html',
  styleUrls: ['./palyers-list.component.css']
})
export class PalyersListComponent implements OnInit {

  title = 'Players catalog';
  playersList : IPlayer[];
  responseMeta : IResponseMeta;
  searchQuery : string;

  constructor(private palyerService : PalyerService,
               private router: Router, 
               private route: ActivatedRoute) { }

  ngOnInit() {
    const pageID = +this.route.snapshot.queryParamMap.get('page');

    this.route.queryParams.subscribe(params => {
      var pageID = params['page'];
      var perPage = params['per_page'];
      var search = params['search'];
      this.searchQuery = search;
      
      this.palyerService.getListPalyers(pageID, perPage, search).subscribe(
        response => {
          this.playersList = response.data;
          this.responseMeta = response.meta;
        }
      );
    });
  }

  tableRowClicked(playerData) : void {
    this.router.navigate(['/player', playerData.id]);
  }

}
