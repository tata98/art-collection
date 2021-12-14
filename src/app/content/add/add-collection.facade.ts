import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/services';
import { Artwork, ArtworkInfo } from '../models/collection.models';
import { CollectionApiService } from '../services';
import { FireApiService } from 'src/app/services/fire-api.service';
import { AddArtworkStorage } from './add-artwork-storage.servce';

@Injectable()
export class addCollectionFacade {
  submit(body: ArtworkInfo) {
    this.fireApiService.addArtwork(body);
  }

  get lastThreeSearches(): string[] {
    return this.storage.lastThreeSearches;
  }

  constructor(private collectionApiService: CollectionApiService, private loadingService: LoadingService, 
    private fireApiService: FireApiService, private storage: AddArtworkStorage) {}

  fetchArtWork(title: string): Observable<Artwork> {
    this.loadingService.start();
     return this.collectionApiService.getArtWork(title).pipe(finalize(() => this.loadingService.stop()))
  }

  addToLastSearches(key: string) {
    this.storage.addToLastSearches(key);
  }

  restoreState() {
    this.storage.restoreState();
  }
}
