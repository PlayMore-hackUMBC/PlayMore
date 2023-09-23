import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game_Service } from '../interfaces'

export interface token_response {
  access_token: any,
  expires_in: number,
  token_type: string
}

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {
  
  private games_server = "http://localhost:3000"
  private games: any;

  constructor(private http: HttpClient) {
    this.games = this.http.post(this.games_server+"/v4/games", {})
  }

  //  delay funtino from this stack overflow:
  private  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  // This function waits untill te toke to access the games database expires and then generates a new token
  private async getNewToken(time: any){
    // need to sleep to the time till expires
    await this.delay(time)
    // this.token = http.post(this.token_req, {}, {headers: header}).subscribe(data<token_response> => {
    //   getNewToken(data.expires_in) // get the new token when the old one expires
    //   return data.access_token
    // })
  }


  public getGames(){
    return this.http.post(this.games_server+"/v4/games", {})
    // .subscribe(resp => {
    //   console.log("Got the games")
    //   return resp
    // })
  }


  public getGameById(gameId:number){
    return this.http.post(this.games_server+"/v4/games/id", {id:gameId})
  }

}
