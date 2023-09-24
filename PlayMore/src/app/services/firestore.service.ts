import { Injectable } from '@angular/core';
import { Observable, pipe, map, switchMap, concatMap, combineLatest, combineAll, concat, Subject, combineLatestAll, concatAll } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { traceUntilFirst } from '@angular/fire/performance';
import { collection, collectionData, doc, docData, addDoc, setDoc, Firestore, CollectionReference, query, where, getDocs } from '@angular/fire/firestore';
import { Review, Feature_Rating, Disability } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  get_reviews(): Observable<Review[]> {
    const reviews = collection(this.firestore, "reviews");
    //return this.concatReviews(collectionData(reviews));
    return collectionData(reviews) as Observable<Review[]>;
  }

  get_reviews_by_game(game_name : string)  : Observable<Review[]> {
    const reviews = collectionData(
    query(
      collection(this.firestore, "reviews"),
      where("game_name", '==', game_name)
    )
  );

  return reviews as Observable<Review[]>;

 }

  concatReviews(cData : Observable<any>) {
    return cData.pipe(
      switchMap((reviews: any[]) => { 
        console.log("reviews in swithcMap", reviews);
        const res = reviews.map((r: any) => { 
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

  async add_review(review : Review) {
    const ref = collection(this.firestore, "reviews");
    const docRef = await addDoc(ref, {});
    console.log("created id", docRef.id);
    review.id = docRef.id;
    await setDoc(doc(this.firestore, "reviews", docRef.id), review);
  }
}
