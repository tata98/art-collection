import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artwork } from '../models/collection.models';
import { addCollectionFacade } from './add-collection.facade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [addCollectionFacade],
})
export class AddComponent implements OnInit {
  lastThreeSearches = [];

  searchKey: string = '';
  searchHasError: boolean = false;
  selectedArtwork$: Artwork | null = null;

  constructor(private facade: addCollectionFacade) {}
  search() {
    if (!this.searchKey) {
      this.searchHasError = true;
      return;
    }

    this.searchHasError = false;
    this.facade
      .fetchArtWork(this.searchKey)
      .subscribe((artwork) => (this.selectedArtwork$ = artwork));
  }

  ngOnInit() {}
}
