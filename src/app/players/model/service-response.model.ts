import { IPlayer } from './player.model';
import { IResponseMeta } from './response-meta.model';

export interface IServiceResponse {
    data : IPlayer[];
    meta : IResponseMeta;
}