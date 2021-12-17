import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of } from 'rxjs';
import { map, tap, filter, mergeMap } from 'rxjs/operators';
import { AuthService } from '.';
import { Artwork, ArtworkInfo, ArtworkInfoWithId, } from '../content/models/collection.models';

@Injectable({
  providedIn: 'root',
})
export class FireApiService {
  constructor(private store: AngularFirestore, private auth: AuthService) {}

  addArtwork(body: ArtworkInfo) {
    return from(this.store.collection('content').add(body));
  }

  getArtworks(): Observable<ArtworkInfoWithId[]> {
    return this.store
      .collection<ArtworkInfo>('content', (ref) =>
        ref.where('uid', '==', this.auth.userId)
      )
      .get()
      .pipe(
        map(
          (res) =>
          res.docs.map<ArtworkInfoWithId>((d) => ({...d.data(), id: d.id}))
        )
    );
  }
  // getArtwork(id: string): Observable<ArtworkInfo | undefined> {
  //   return this.store
  //     .collection<ArtworkInfo>('content', (ref) =>
  //       ref.where('uid', '==', this.auth.userId)
  //     )
  //     .doc(id)
  //     .get()
  //     .pipe(map((res) => res.data()),
  //     );
  // }
  getArtwork(id: string){
 
   return this.getArtworks().pipe(
      mergeMap(el => from(el)),
      tap(x => console.log(x)),
      filter((el: ArtworkInfoWithId)=> el.id === id && el.uid === this.auth.userId),
      tap(x => console.log(x))
    )
  }
  
}