import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { collectionListItem } from '../../models/collection.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionItemComponent implements OnInit {
  @Input() item: collectionListItem | undefined;
  constructor(private router: Router) { }

  goToDetails() {
    this.router.navigate([`content/${this.item?.data.id}`]);
  }
  
  ngOnInit() {
  }

}
