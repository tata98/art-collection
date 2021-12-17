import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, finalize, switchMap, tap } from 'rxjs/operators';
import { FireApiService } from 'src/app/services/fire-api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Artwork, ArtworkInfo } from '../models/collection.models';
import { CollectionApiService } from '../services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  storeData$: Observable<ArtworkInfo | undefined> | undefined;
  artworkData$: Observable<Artwork> | undefined;
  el: any;
  el1: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fireApiService: FireApiService,
    private collectionApiService: CollectionApiService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  private initartworkDetails() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.loadingService.start();
    this.storeData$ = this.fireApiService.getArtwork(id).pipe(
    tap(x => this.artworkData$ = this.collectionApiService.getArtWorkWithId(x.objectId)), finalize(() => this.loadingService.stop()))
  }


  goBack() {
    this.router.navigate(['content']);
  }

  ngOnInit() {
    this.initartworkDetails();
  }
}