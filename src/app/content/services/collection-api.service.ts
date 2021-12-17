import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { filter, mergeMap } from 'rxjs/operators';
import { Artwork, Artworks } from '../models/collection.models';
import { from, Observable } from 'rxjs';

@Injectable()
export class CollectionApiService {
  constructor(private http: HttpClient) {}
  getArtWork(title: string): Observable<Artwork> {
    return this.http
      .get<Artworks>(`${environment.collectioApiBase}${title}`)
      .pipe(
        mergeMap((x: Artworks) => from(x.objectIDs)),
        mergeMap((id: number) => this.checkTitle(id)),
        filter((x: Artwork) => x.title === title)
      );
  }

  checkTitle(id: number) {
    return this.http.get<Artwork>(`${environment.collectionObjectId}${id}`);
  }
  getArtWorkWithId(id: string |undefined): Observable<Artwork>{
      return this.http.get<Artwork>(`${environment.collectionObjectId}${id}`);
  }
}
