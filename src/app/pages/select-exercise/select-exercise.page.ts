import { Component, OnInit } from '@angular/core';
import { SavedImage, DataServiceProvider } from 'src/app/providers/data-service/data-service';

@Component({
  selector: 'app-select-exercise',
  templateUrl: './select-exercise.page.html',
  styleUrls: ['./select-exercise.page.scss'],
})
export class SelectExercisePage implements OnInit {

  images: SavedImage[];

  constructor(private dataServiceProvider: DataServiceProvider) {
    this.images = [];
  }

  async ngOnInit() {
    this.images = await this.dataServiceProvider.loadStoredImages();
  }

  select (image: SavedImage) {
    console.log('adding exercise:', image);
  }

}
