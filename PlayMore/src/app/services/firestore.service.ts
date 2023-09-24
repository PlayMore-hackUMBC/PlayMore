import { Injectable } from '@angular/core';
import { Observable, pipe, map, switchMap, concatMap, combineLatest, combineAll, concat, Subject, combineLatestAll, concatAll } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { traceUntilFirst } from '@angular/fire/performance';
import { collection, collectionData, doc, docData, addDoc, Firestore, CollectionReference, query, where, getDocs } from '@angular/fire/firestore';
import { Review, Feature_Rating, Disability } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  get_reviews(): Observable<Review[]> {
    const reviews = collection(this.firestore, "reviews");
    return this.concatReviews(collectionData(reviews));
  }

  get_reviews_by_game(game_id : string)  {
    const reviews = collectionData(
    query(
      collection(this.firestore, "reviews"),
      where("game_id", '==', game_id)
    )
  );

  return this.concatReviews(reviews);

  /*const reviews = collection(this.firestore, 'reviews');
  const q = query(reviews,
    where('game_id', '==' , game_id) 
  );

  const querySnapshot = getDocs(q);

  console.log(querySnapshot);*/
 }

  concatReviews(cData : Observable<any>) {
    return cData.pipe(
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

  get_dis() : Observable<Disability[]> {
    const disabilities = collection(this.firestore, "disabilities");
    return collectionData(disabilities) as Observable<Disability[]>;
  }

  /*async add_review(review : Review) {
    console.log("called");
    const ref = collection(this.firestore, "reviews");
    const docRef = await addDoc(ref, review);
    console.log("created id", docRef.id);
  }*/
}
