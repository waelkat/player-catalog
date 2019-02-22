import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../player.model';
import { PalyerService } from '../palyer.service';

@Component({
  selector: 'app-palyers-list',
  templateUrl: './palyers-list.component.html',
  styleUrls: ['./palyers-list.component.css']
})
export class PalyersListComponent implements OnInit {

  title = 'Players catalog';
  playersList : IPlayer[];

  constructor(private palyerService : PalyerService) { }

  ngOnInit() {
    this.playersList = this.palyerService.getListPalyers();
  }

}
