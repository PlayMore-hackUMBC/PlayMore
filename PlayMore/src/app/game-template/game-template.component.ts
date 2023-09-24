import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review, Scores, Feature_Rating } from '../interfaces'
import { GamesServiceService } from '../services/games-service.service';
import { Observable, subscribeOn } from 'rxjs';
import { CreateReviewService } from '../services/create-review.service';
import { MatDialog } from '@angular/material/dialog'
import { CreateReviewComponent } from '../create-review/create-review.component';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-game-template',
  templateUrl: './game-template.component.html',
  styleUrls: ['./game-template.component.css']
})
export class GameTemplateComponent implements OnInit {

  public game : any  = {}
  public score : Scores
  public reviews : Review[]

  constructor(
    private route: ActivatedRoute,
    private gameService : GamesServiceService,
    public dialog: MatDialog,
    private _firestoreService : FirestoreService
    ){
      this.score = {"overall": 4, "hard_of_hearing": 4,  "vision_impairment": 5,  "motor_disability": 4,  "misc": 3}
      
    }

  ngOnInit() {
    // First get the game id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('gameId'));
  
    // Find the game that correspond with the id provided in route.
    console.log("calling the get game by id")
    this.gameService.getGameById(gameIdFromRoute).subscribe(resp => {this.game=resp; 
      console.log(resp)
    
    
      this._firestoreService.get_reviews_by_game(this.game.id).subscribe((value : any[]) => {
        this.reviews = value;
        console.log(this.reviews)
      })
    
    });

  }


  openLeaveReview(gameid:number, game_name: string){
    console.log(gameid)

    const dialogRef = this.dialog.open(CreateReviewComponent, {
      width: '600px',
      data: {
        "id" : "",
        "game_id" : gameid,
        "game_name": game_name, 
        "title" : "",
        "text" : "",
        "date_created" : "",
        "feature_ratings" : [],
        "username": "",
        "user_id": ""
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // need to post to fire base
      if (result.title != ""){
        this._firestoreService.add_review(result);
      }

    });
  }


}