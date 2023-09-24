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
      this.score = {"overall": 0, "hard_of_hearing": 0,  "vision_impairment": 0,  "motor_disability": 0,  "other_disability": 0}
      
    }

  ngOnInit() {
    // First get the game id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('gameId'));
  
    // Find the game that correspond with the id provided in route.
    console.log("calling the get game by id")
    this.gameService.getGameById(gameIdFromRoute).subscribe(resp => {this.game=resp; 
      console.log(resp)   
    });


    this._firestoreService.get_reviews_by_game(String(gameIdFromRoute)).subscribe((value : any[]) => {
      this.reviews = value;
      console.log(this.reviews)
      let total = 0
      let total_hard_of_hearing =0
      let total_vision_impairment = 0
      let total_motor_disability = 0
      let total_other_disability =0
      this.reviews.forEach(element => { 
        element.feature_ratings.forEach(feat =>{
          if(feat.rating >0){
            this.score.overall += Number(feat.rating)
            total += 1
            this.score.hard_of_hearing += feat.disability=="Hard of Hearing or Deaf" ? Number(feat.rating) : 0;
            total_hard_of_hearing += feat.disability=="Hard of Hearing or Deaf" ? 1 : 0;
            this.score.vision_impairment += feat.disability=="Vision Impairment" ? Number(feat.rating) : 0;
            total_vision_impairment += feat.disability=="Vision Impairment" ? 1 : 0;
            this.score.motor_disability += feat.disability=="Motor Disability" ? Number(feat.rating) : 0;
            total_motor_disability += feat.disability=="Motor Disability" ? 1 : 0;
            this.score.other_disability += feat.disability=="Other Disability" ? Number(feat.rating) : 0;
            total_other_disability += feat.disability=="Other Disability" ? 1 : 0;
          }
        })
        if(total) {this.score.overall /= total}
        if(total_hard_of_hearing) {this.score.hard_of_hearing /= total_hard_of_hearing}
        if(total_vision_impairment) {this.score.vision_impairment /= total_vision_impairment}
        if(total_motor_disability) {this.score.motor_disability /= total_motor_disability}
        if(total_other_disability) {this.score.other_disability /= total_other_disability}
      }); 

      }
    )
  }


  public openLeaveReview(gameid:string, game_name: string){
    console.log(String(gameid))

    const dialogRef = this.dialog.open(CreateReviewComponent, {
      width: '600px',
      data: {
        "id" : "",
        "game_id" : String(gameid),
        "game_name": game_name, 
        "title" : "",
        "text" : "",
        "date_created" : "",
        "feature_ratings" : [],
        "username": "ntackyt",
        "user_id": "suka"
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