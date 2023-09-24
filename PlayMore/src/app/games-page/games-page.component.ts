import { Component } from '@angular/core';
import { GamesServiceService } from '../services/games-service.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent {
  public games : any = false

  constructor(private games_serv: GamesServiceService){ }

  
  async ngOnInit(){
    this.games = this.games_serv.getGames().subscribe(res=>{
      this.games=res; 
      if (this.games.results !== undefined) {
        this.games = this.games.results
        console.log(this.games.results); // now string
      }
    })
  }


  public goToGamePage(game : any){

    console.log("hit a game: ", game.name)
  }
}
