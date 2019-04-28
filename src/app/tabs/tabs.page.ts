import { Component } from '@angular/core';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor (private themeService: ThemeServiceProvider) {
    themeService.addBodyClass('gray-orange-black');
  }
}
