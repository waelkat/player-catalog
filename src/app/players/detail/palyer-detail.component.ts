import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../model/player.model';
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
    this.palyerService.getPalyer(+param).subscribe(
      response => {
        this.player = response;
      }
    );
  }

  onBackClick() : void {
    this.router.navigate(['/list']);
  }

}
