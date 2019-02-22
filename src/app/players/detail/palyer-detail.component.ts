import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../player.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PalyerService } from '../palyer.service';

@Component({
  selector: 'app-palyer-detail',
  templateUrl: './palyer-detail.component.html',
  styleUrls: ['./palyer-detail.component.css']
})
export class PalyerDetailComponent implements OnInit {

  player : IPlayer;

  constructor(private route : ActivatedRoute,
    private palyerService : PalyerService,
    private router : Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.player = this.palyerService.getPalyer(+param);
    }
  }

  onBackClick() : void {
    this.router.navigate(['/list']);
  }

}
