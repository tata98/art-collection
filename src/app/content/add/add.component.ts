import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services';
import { Artwork, ArtworkInfo } from '../models/collection.models';
import { AddArtworkStorage } from './add-artwork-storage.servce';
import { addCollectionFacade } from './add-collection.facade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [addCollectionFacade, AddArtworkStorage],
})
export class AddComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  searchKey: string = '';
  searchHasError: boolean = false;
  selectedArtwork$: Observable<Artwork> | null = null;

  get lastThreeSearches(): string[]{
    return this.facade.lastThreeSearches;
  }
  submitted = false;

  constructor(private facade: addCollectionFacade, private fb: FormBuilder, private auth: AuthService,) {}
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
  private buildForm() {
    this.form = this.fb.group({
      review: ['', [Validators.required, Validators.minLength(10)]],
      rating: 1,
    });
  }
  submit(selectedArtwork: Artwork) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const value = this.form.value;

    const body: ArtworkInfo = {
      uid: this.auth.userId,
      id: selectedArtwork.objectID,
      review: value.review,
    };

    this.facade.submit(body);
  }

  ngOnInit() {
    this.buildForm();
    this.facade.restoreState();
  }
}