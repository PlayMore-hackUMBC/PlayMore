import { Injectable } from '@angular/core';
import { Observable, pipe, map, switchMap, concatMap, combineLatest, combineAll, concat, Subject, combineLatestAll, concatAll } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { traceUntilFirst } from '@angular/fire/performance';
import { collection, collectionData, doc, docData, Firestore, CollectionReference } from '@angular/fire/firestore';
import { Review, Feature_Rating } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  get_reviews(): Observable<Review[]> {
    const reviews = collection(this.firestore, "reviews");
    return this.concatReviews(reviews);
 }

/* get_reviews_by_game(game_id : string) : Observable<Review[]> {
  const reviews = collection(this.firestore, 'reviews');
 }*/

concatReviews(reviews : CollectionReference<any>) {
  return collectionData(reviews).pipe(
    switchMap((restaurants: any[]) => { 
      const res = restaurants.map((r: any) => { 
        return collectionData(collection(this.firestore, `reviews/${r.id}/feature_ratings`))
          .pipe(
            map(feature_ratings => Object.assign(r, {feature_ratings}))
          ); 
        }); 
      return combineLatest(...res); 
    })
   )
}


}
