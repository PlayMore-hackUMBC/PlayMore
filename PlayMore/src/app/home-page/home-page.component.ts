import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../services/games-service.service';
import { Review } from '../interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public games : any = false
  public reviews : Review[]


  constructor(private games_serv: GamesServiceService){ 

    
    this.reviews =  [{"id" : "wefnwo",
    "game_id" : "2563",
    "title" : "THIS WAS AWESOME",
    "text" : "this is my really excited review that i am too tired to write",
    "date_created" : "9/23/2023",
    "feature_ratings" : [
      {"id" : "jdfkdsb",
      "dis_id" : "HoH",
      "name" : "Subtitles",
      "rating" : 5}, 
      {"id" : "sdbfiwbf",
      "dis_id" : "Misc",
      "name": "content warning",
      "rating" : 5}],
    "username": "ntackyt",
    "user_id": "suka"},
    {"id" : "wefnwo",
    "game_id" : "2563",
    "title" : "THIS WAS AWESOME",
    "text" : "this is my really excited review that i am too tired to write",
    "date_created" : "9/23/2023",
    "feature_ratings" : [
      {"id" : "jdfkdsb",
      "dis_id" : "HoH",
      "name" : "Subtitles",
      "rating" : 5}, 
      {"id" : "sdbfiwbf",
      "dis_id" : "Misc",
      "name": "content warning",
      "rating" : 5}],
    "username": "ntackyt",
    "user_id": "suka"}]
  }

  async ngOnInit(){
    this.games = this.games_serv.getGames().subscribe(res=>this.games=res)
  }


  public goToGamePage(game : any){

    console.log("hit a game: ", game.name)
  }
}
