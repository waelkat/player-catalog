import { Component, OnInit, Input } from '@angular/core';
import { IPlayer } from '../player.model';

@Component({
  selector: 'app-palyer-item',
  templateUrl: './palyer-item.component.html',
  styleUrls: ['./palyer-item.component.css']
})
export class PalyerItemComponent implements OnInit {

  @Input() player : IPlayer;

  constructor() { }

  ngOnInit() {
    console.log(this.player);
  }

}
