import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, NotFoundComponent, SharedModule],
  declarations: [HeaderComponent, NotFoundComponent],
})
export class ShellModule {}
