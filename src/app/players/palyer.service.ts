import { Injectable } from '@angular/core';
import { IPlayer } from './model/player.model';
import { HttpClient } from '@angular/common/http';
import { APIUrl } from './player-api-url';
import { Observable } from 'rxjs';
import { IServiceResponse } from './model/service-response.model';

@Injectable({
  providedIn: 'root'
})
export class PalyerService {

  constructor(private httpService : HttpClient) { }

  getPalyer(id : number) : Observable<IPlayer> {

    return this.httpService.get<IPlayer>(APIUrl.specificPlayerURL + id);
  }

  getListPalyers() : Observable<IServiceResponse> {

    return this.httpService.get<IServiceResponse>(APIUrl.listPlayersURL);
  }
}