import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artwork } from '../models/collection.models';
import { AddArtworkStorage } from './add-artwork-storage.servce';
import { addCollectionFacade } from './add-collection.facade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [addCollectionFacade, AddArtworkStorage],
})
export class AddComponent implements OnInit {

  searchKey: string = '';
  searchHasError: boolean = false;
  selectedArtwork$: Observable<Artwork> | null = null;

  get lastThreeSearches(): string[]{
    return this.facade.lastThreeSearches;
  }
  constructor(private facade: addCollectionFacade) {}
  search() {
    if (!this.searchKey) {
      this.searchHasError = true;
      return;
    }

    this.searchHasError = false;
    this.facade.addToLastSearches(this.searchKey);
    this.selectedArtwork$ = this.facade
      .fetchArtWork(this.searchKey)
  }
  fetchArtWork(title: string) {
    this.selectedArtwork$ = this.facade.fetchArtWork(title);
  }

  ngOnInit() {
    this.facade.restoreState();
  }
}
