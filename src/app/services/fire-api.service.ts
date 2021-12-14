import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '.';
import { ArtworkInfo } from '../content/models/collection.models';

@Injectable({
  providedIn: 'root',
})
export class FireApiService {
  constructor(private store: AngularFirestore, private auth: AuthService) {}

  addArtwork(body: ArtworkInfo) {
    return from(this.store.collection('content').add(body));
  }

  // getArtworks(): Observable<MovieWithId[]> {
  //   return this.store
  //     .collection<MovieBody>('content', (ref) =>
  //       ref.where('uid', '==', this.auth.userId)
  //     )
  //     .get()
  //     .pipe(
  //       map((res) =>
  //         res.docs.map<MovieWithId>((d) => ({ ...d.data(), id: d.id }))
  //       )
  //     );
  // }

  getArtwork(id: string): Observable<ArtworkInfo | undefined> {
    return this.store
      .collection<ArtworkInfo>('content', (ref) =>
        ref.where('uid', '==', this.auth.userId)
      )
      .doc(id)
      .get()
      .pipe(map((res) => res.data()));
  }
}