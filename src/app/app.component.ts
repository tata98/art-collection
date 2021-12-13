import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {}
  title = 'artCollection';

  toKa() {
    this.translateService.setDefaultLang('ka');
  }
  toEn() {
    this.translateService.setDefaultLang('en');
  }
}
