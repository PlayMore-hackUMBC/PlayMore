import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../services/games-service.service';
import { Review } from '../interfaces';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public games : any = false
  public reviews : Review[]


  constructor(private games_serv: GamesServiceService, private _firestoreService : FirestoreService ){   }

  async ngOnInit(){
    console.log("wow")
    this.games = this.games_serv.getGames().subscribe(res=>{
      this.games=res; 
      if (this.games.results !== undefined) {
        this.games = this.games.results
        console.log(this.games.results); // now string
      }
      // console.log(JSON.parse(JSON.stringify(res))).results}
      })

      this._firestoreService.get_reviews().subscribe((value : any[]) => {
        this.reviews = value;
      })
  }


  public goToGamePage(game : any){

    console.log("hit a game: ", game.name)
  }
}
