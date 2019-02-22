export interface IPlayer {
    id: number;
    first_name : string;
    last_name : string;
    position : string;
    team : {
        id :number;
        abbreviation : string;
        city : string;
        conference : string;
        division : string;
        full_name : string;
        name : string;
    }
}