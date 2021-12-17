import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { FireApiService } from 'src/app/services/fire-api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Artwork, ArtworkInfoWithId, collectionListItem } from '../models/collection.models';
import { CollectionApiService } from '../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  collection$: Observable<collectionListItem[]> | undefined;

  constructor(
    private loadingService: LoadingService,
    private fireApiService: FireApiService,
    private collectionApiService: CollectionApiService
  ) {}

  private mapCollectionData(data: ArtworkInfoWithId[]) {
    return data.map((d) =>
      this.collectionApiService.getArtWorkWithId(d.objectId).pipe(
        map<Artwork ,collectionListItem>((artwork) => ({artwork, data:d}))
      )
    );
  }

  ngOnInit() {
    this.collection$ = this.fireApiService.getArtworks().pipe(
      switchMap((data) => forkJoin(this.mapCollectionData(data)))
    );
  }
}