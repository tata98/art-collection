import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';
import { CollectionApiService } from './services';
import { CollectionItemComponent, ListComponent } from './list';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
  ],
  declarations: [
    ContentComponent,
    AddComponent,
    ListComponent,
    DetailsComponent,
    CollectionItemComponent,
  ],
  providers: [CollectionApiService],
})
export class ContentModule {}
