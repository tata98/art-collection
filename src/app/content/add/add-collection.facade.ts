import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artwork } from '../models/collection.models';
import { CollectionApiService } from '../services';

@Injectable()
export class addCollectionFacade {
  constructor(private collectionApiService: CollectionApiService) {}

  fetchArtWork(title: string): Observable<Artwork> {
    return this.collectionApiService.getArtWork(title);
  }
}
