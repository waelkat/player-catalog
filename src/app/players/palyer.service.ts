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

  getListPalyers(page : number, perPage? : number, search? : string) : Observable<IServiceResponse> {
    let url : string = APIUrl.listPlayersURL;
    if(search){
      url += "?search=" + search;
    }else {
      if(page){
        url += "?page=" + page;
      }
      if(perPage){
        url += "&per_page=" + perPage;
      }
    }
    return this.httpService.get<IServiceResponse>(url);
  }
}