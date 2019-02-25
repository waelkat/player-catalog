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
    let queryParam = [];

    if(page){
      queryParam.push("page=" + page);
      url += "?page=" + page;
    }
    if(perPage){
      queryParam.push("per_page=" + perPage);
    }
    if(search){
      queryParam.push("search=" + search);
    }

    if(queryParam.length > 0){
      url += "?" + queryParam.join("&");
    }

    return this.httpService.get<IServiceResponse>(url);
  }
}