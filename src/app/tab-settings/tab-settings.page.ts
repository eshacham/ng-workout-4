import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { deserialize } from 'json-typescript-mapper';
import { json } from '../constants/defaultWorkouts';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';
import { DefaultWorkouts } from '../models/DefaultWorkouts';

const STORAGE_KEY = 'my_workouts';

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
  constructor (
    private themeService: ThemeServiceProvider,
    private storage: Storage) {}

  selectedSegment = 'themes';

  themes: Theme[] = [
    { name: 'pink-skin', selected: false, image: '/assets/images/themes/pink-skin' },
    { name: 'red-blue-brown', selected: false, image: '/assets/images/themes/red-blue-brown' },
    { name: 'gray-yellow-green', selected: false, image: '/assets/images/themes/gray-yellow-green' },
    { name: 'mustard-red-cream', selected: false, image: '/assets/images/themes/mustard-red-cream' },
    { name: 'green-haki-bordo', selected: false, image: '/assets/images/themes/green-haki-bordo' },
    { name: 'gray-orange-black', selected: true, image: '/assets/images/themes/gray-orange-black' },
  ];

  themeSelected (event: any) {
    const selectedtheme = event.detail.value;
    console.log('theme seledted: ', selectedtheme);
    for (const theme of this.themes) {
      if (theme.name !== selectedtheme) {
        this.themeService.removeBodyClass(theme.name);
        theme.selected = false;
      } else {
        this.themeService.addBodyClass(theme.name);
        theme.selected = true;
      }
    }
  }

  getSelectedThemeImage(i: number): string {
    return `${this.themes.filter(t => t.selected)[0].image}-${i}.png`;
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    console.log('Segment changed', this.selectedSegment);
  }

  async resetWorkouts() {
    await this.storage.ready();
    let defaultWorkouts: DefaultWorkouts;
    defaultWorkouts = deserialize(DefaultWorkouts, json);
    await this.storage.set(STORAGE_KEY, defaultWorkouts.workouts);
    /// TODO reset the dataservice too
    console.log('workouts has been reset');
  }
}
