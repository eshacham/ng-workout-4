import { Component } from '@angular/core';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';

interface Theme  {
  name: string;
  selected: boolean;
  image: string;
}

@Component({
  selector: 'app-tab-settings',
  templateUrl: 'tab-settings.page.html',
  styleUrls: ['tab-settings.page.scss']
})
export class TabSettingsPage {
  constructor(private themeService: ThemeServiceProvider) {}

  themes: Theme[] = [
    { name: 'pink-skin', selected: false, image: '' },
    { name: 'red-blue-brown', selected: false, image: '' },
    { name: 'gray-yellow-green', selected: false, image: '' },
    { name: 'mustard-red-cream', selected: false, image: '' },
    { name: 'green-haki-bordo', selected: false, image: '' },
    { name: 'gray-orange-black', selected: true, image: '' },
  ];

  themeSelected (event: any) {
    const selectedtheme = event.detail.value;
    console.log('theme seledted: ', selectedtheme);
    for (const theme of this.themes) {
      if (theme.name !== selectedtheme) {
        this.themeService.removeBodyClass(theme.name);
      } else {
        this.themeService.addBodyClass(theme.name);
      }
    }
  }
}
