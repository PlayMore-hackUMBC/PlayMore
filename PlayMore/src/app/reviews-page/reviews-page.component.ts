import { Component, OnInit } from '@angular/core';
import { Observable, pipe, map, Subject } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { Disability, Review } from '../interfaces';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent implements OnInit {
  public all_reviews : Review[] = [];
  public all_reviews_game : Review[] = [];
  public dis : Disability[] = [];

  constructor (private _firestoreService : FirestoreService) {}

  ngOnInit(): void {
    this._firestoreService.get_reviews().subscribe((value : any[]) => {
      this.all_reviews = value;
    })

    this._firestoreService.get_reviews_by_game("ZZZ123").subscribe((value : any[]) => {
      this.all_reviews_game = value;
    })

    this._firestoreService.get_dis().subscribe((value : any[]) => {
      this.dis = value;
    })
  }
    
}
