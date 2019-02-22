import { Injectable } from '@angular/core';
import { IPlayer } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PalyerService {

  constructor() { }

  getPalyer(id : number) : IPlayer {
    return PLAYERS.find(player => player.id === id);
  }

  getListPalyers() : IPlayer[] {
    return PLAYERS;
  }
}

const PLAYERS : IPlayer [] = [
  {
    "id": 5,
    "first_name": "DeVaughn",
    "last_name": "Akoon-Purcell",
    "position": "G-F",
    "team": {
      "id": 8,
      "abbreviation": "DEN",
      "city": "Denver",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Denver Nuggets",
      "name": "Nuggets"
    }
  },
  {
    "id": 14,
    "first_name": "Ike",
    "last_name": "Anigbogu",
    "position": "C",
    "team": {
      "id": 12,
      "abbreviation": "IND",
      "city": "Indiana",
      "conference": "East",
      "division": "Central",
      "full_name": "Indiana Pacers",
      "name": "Pacers"
    }
  },
  {
    "id": 17,
    "first_name": "Carmelo",
    "last_name": "Anthony",
    "position": "F",
    "team": {
      "id": 11,
      "abbreviation": "HOU",
      "city": "Houston",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Houston Rockets",
      "name": "Rockets"
    }
  },
  {
    "id": 25,
    "first_name": "Ron",
    "last_name": "Baker",
    "position": "G",
    "team": {
      "id": 20,
      "abbreviation": "NYK",
      "city": "New York",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "New York Knicks",
      "name": "Knicks"
    }
  },
  {
    "id": 47,
    "first_name": "Jabari",
    "last_name": "Bird",
    "position": "G",
    "team": {
      "id": 2,
      "abbreviation": "BOS",
      "city": "Boston",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Boston Celtics",
      "name": "Celtics"
    }
  },
  {
    "id": 67,
    "first_name": "MarShon",
    "last_name": "Brooks",
    "position": "G",
    "team": {
      "id": 15,
      "abbreviation": "MEM",
      "city": "Memphis",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Memphis Grizzlies",
      "name": "Grizzlies"
    }
  },
  {
    "id": 71,
    "first_name": "Lorenzo",
    "last_name": "Brown",
    "position": "G",
    "team": {
      "id": 28,
      "abbreviation": "TOR",
      "city": "Toronto",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Toronto Raptors",
      "name": "Raptors"
    }
  },
  {
    "id": 86,
    "first_name": "Michael",
    "last_name": "Carter-Williams",
    "position": "G",
    "team": {
      "id": 11,
      "abbreviation": "HOU",
      "city": "Houston",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Houston Rockets",
      "name": "Rockets"
    }
  },
  {
    "id": 90,
    "first_name": "Omri",
    "last_name": "Casspi",
    "position": "F",
    "team": {
      "id": 15,
      "abbreviation": "MEM",
      "city": "Memphis",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Memphis Grizzlies",
      "name": "Grizzlies"
    }
  },
  {
    "id": 1,
    "first_name": "Alex",
    "last_name": "Abrines",
    "position": "G",
    "team": {
      "id": 21,
      "abbreviation": "OKC",
      "city": "Oklahoma City",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Oklahoma City Thunder",
      "name": "Thunder"
    }
  },
  {
    "id": 2,
    "first_name": "Jaylen",
    "last_name": "Adams",
    "position": "G",
    "team": {
      "id": 1,
      "abbreviation": "ATL",
      "city": "Atlanta",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Atlanta Hawks",
      "name": "Hawks"
    }
  },
  {
    "id": 3,
    "first_name": "Steven",
    "last_name": "Adams",
    "position": "C",
    "team": {
      "id": 21,
      "abbreviation": "OKC",
      "city": "Oklahoma City",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Oklahoma City Thunder",
      "name": "Thunder"
    }
  },
  {
    "id": 4,
    "first_name": "Bam",
    "last_name": "Adebayo",
    "position": "C-F",
    "team": {
      "id": 16,
      "abbreviation": "MIA",
      "city": "Miami",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Miami Heat",
      "name": "Heat"
    }
  },
  {
    "id": 6,
    "first_name": "LaMarcus",
    "last_name": "Aldridge",
    "position": "F",
    "team": {
      "id": 27,
      "abbreviation": "SAS",
      "city": "San Antonio",
      "conference": "West",
      "division": "Southwest",
      "full_name": "San Antonio Spurs",
      "name": "Spurs"
    }
  },
  {
    "id": 7,
    "first_name": "Rawle",
    "last_name": "Alkins",
    "position": "G",
    "team": {
      "id": 5,
      "abbreviation": "CHI",
      "city": "Chicago",
      "conference": "East",
      "division": "Central",
      "full_name": "Chicago Bulls",
      "name": "Bulls"
    }
  },
  {
    "id": 8,
    "first_name": "Grayson",
    "last_name": "Allen",
    "position": "G",
    "team": {
      "id": 29,
      "abbreviation": "UTA",
      "city": "Utah",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Utah Jazz",
      "name": "Jazz"
    }
  },
  {
    "id": 10,
    "first_name": "Al-Farouq",
    "last_name": "Aminu",
    "position": "F",
    "team": {
      "id": 25,
      "abbreviation": "POR",
      "city": "Portland",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Portland Trail Blazers",
      "name": "Trail Blazers"
    }
  },
  {
    "id": 11,
    "first_name": "Justin",
    "last_name": "Anderson",
    "position": "G-F",
    "team": {
      "id": 1,
      "abbreviation": "ATL",
      "city": "Atlanta",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Atlanta Hawks",
      "name": "Hawks"
    }
  },
  {
    "id": 12,
    "first_name": "Kyle",
    "last_name": "Anderson",
    "position": "F",
    "team": {
      "id": 15,
      "abbreviation": "MEM",
      "city": "Memphis",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Memphis Grizzlies",
      "name": "Grizzlies"
    }
  },
  {
    "id": 13,
    "first_name": "Ryan",
    "last_name": "Anderson",
    "position": "F",
    "team": {
      "id": 16,
      "abbreviation": "MIA",
      "city": "Miami",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Miami Heat",
      "name": "Heat"
    }
  },
  {
    "id": 119,
    "first_name": "Tyler",
    "last_name": "Davis",
    "position": "C",
    "team": {
      "id": 21,
      "abbreviation": "OKC",
      "city": "Oklahoma City",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Oklahoma City Thunder",
      "name": "Thunder"
    }
  },
  {
    "id": 144,
    "first_name": "Wayne",
    "last_name": "Ellington",
    "position": "G",
    "team": {
      "id": 16,
      "abbreviation": "MIA",
      "city": "Miami",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Miami Heat",
      "name": "Heat"
    }
  },
  {
    "id": 149,
    "first_name": "Keenan",
    "last_name": "Evans",
    "position": "G",
    "team": {
      "id": 9,
      "abbreviation": "DET",
      "city": "Detroit",
      "conference": "East",
      "division": "Central",
      "full_name": "Detroit Pistons",
      "name": "Pistons"
    }
  },
  {
    "id": 179,
    "first_name": "Marcin",
    "last_name": "Gortat",
    "position": "C",
    "team": {
      "id": 13,
      "abbreviation": "LAC",
      "city": "LA",
      "conference": "West",
      "division": "Pacific",
      "full_name": "LA Clippers",
      "name": "Clippers"
    }
  },
  {
    "id": 94,
    "first_name": "Tyson",
    "last_name": "Chandler",
    "position": "C",
    "team": {
      "id": 14,
      "abbreviation": "LAL",
      "city": "Los Angeles",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Los Angeles Lakers",
      "name": "Lakers"
    }
  }
];
