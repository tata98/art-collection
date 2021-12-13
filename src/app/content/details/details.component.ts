import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
  }
}
