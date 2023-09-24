import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Game_Service } from '../interfaces'

export interface token_response {
  access_token: any,
  expires_in: number,
  token_type: string
}

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {
  
  private games_server = "https://api.rawg.io/api/games"
  private games: any;

  constructor(private http: HttpClient) {
    this.games = this.http.post(this.games_server+"/v4/games", {})
  }



  public getGames(){
    return this.http.get(this.games_server, {params: {'key': '9233de06a6c14dc5bb592fc1e68c1d27'}})
  }


  public getGameById(gameId:number){
    return this.http.get(this.games_server+"/"+gameId, {params: {'key': '9233de06a6c14dc5bb592fc1e68c1d27'}})
  }


  public findGameByName(gamenameFromRoute:string){
    return this.http.get(this.games_server, {params: {'key': '9233de06a6c14dc5bb592fc1e68c1d27', 'search': gamenameFromRoute}})

  }
}



