import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../model/player.model';
import { PalyerService } from '../palyer.service';
import { IResponseMeta } from '../model/response-meta.model';

@Component({
  selector: 'app-palyers-list',
  templateUrl: './palyers-list.component.html',
  styleUrls: ['./palyers-list.component.css']
})
export class PalyersListComponent implements OnInit {

  title = 'Players catalog';
  playersList : IPlayer[];
  responseMeta : IResponseMeta;

  constructor(private palyerService : PalyerService) { }

  ngOnInit() {
    this.palyerService.getListPalyers().subscribe(
      response => {
        this.playersList = response.data;
        this.responseMeta = response.meta;
      }
    );
  }

}
