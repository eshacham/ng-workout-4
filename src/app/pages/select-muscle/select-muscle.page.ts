import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { Muscles } from 'src/app/models/enums';

@Component({
  selector: 'app-select-muscle',
  templateUrl: './select-muscle.page.html',
  styleUrls: ['./select-muscle.page.scss'],
})
export class SelectMusclePage implements OnInit {

  muscleElements: Map<Muscles, string>;

  private _selectedMuscles: Set<Muscles>;
  get SelectedMusclesList(): string {
    return Array.from(this._selectedMuscles.keys())
    .map(muscle => Muscles[muscle]).join(', ');
  }
  set SelectedMuscles(muscles: Set<Muscles>) {
    this._selectedMuscles = muscles;
  }

  constructor (
    private renderer: Renderer2,
    private dataService: DataServiceProvider) {
    this._selectedMuscles = new Set();
    this.init();
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this._selectedMuscles = this.dataService.muscleFilter;
    console.log('select-muscle: muscleFilter', this._selectedMuscles);
    this._selectedMuscles.forEach(muscle => {
      this.showMuscle(muscle);
    });
  }

  toggleMuscle(muscle: Muscles) {
    if (this._selectedMuscles.has(muscle)) {
      this.removeMuscle(muscle);
    } else {
      this.addMuscle(muscle);
    }
  }

  getMuscleElement(muscle: Muscles) {
    return document.querySelector(`path#${Muscles[muscle]}`);
  }

  addMuscle(muscle: Muscles) {
    this._selectedMuscles.add(muscle);
    this.showMuscle(muscle);
  }

  private showMuscle(muscle: Muscles) {
    this.renderer.setStyle(this.getMuscleElement(muscle), 'fill', '000');
    this.renderer.setStyle(this.getMuscleElement(muscle), 'opacity', '.3');
  }

  removeMuscle(muscle: Muscles) {
    this._selectedMuscles.delete(muscle);
    this.hideMuscle(muscle);
  }

  private hideMuscle(muscle: Muscles) {
    this.renderer.setStyle(this.getMuscleElement(muscle), 'fill', 'fff');
    this.renderer.setStyle(this.getMuscleElement(muscle), 'opacity', '0');
  }

  init() {
    // tslint:disable: max-line-length
    this.muscleElements = new Map();
    this.muscleElements.set(Muscles.Core, `M162.673,394.837 c-15.864-2.7-17.436-27.3-20.74-40.116c-4.812-18.664-7.426-35.261-7.466-54.592c-0.034-16.125-4.187-32.254-4.473-48.431
    c-0.21-11.879-2.722-31.974,11.018-37.342c8.293-3.24,18.01-3.583,26.825-3.292c6.906,0.228,13.668,0.08,20.417,1.97
    c15.421,4.32,14.734,21.916,14.369,35.217c-0.476,17.307-4.523,34.634-4.559,51.878c-0.042,19.989-2.816,33.448-10.447,51.783
    C183.671,361.393,175.381,393.455,162.673,394.837z`);
    this.muscleElements.set(Muscles.Chest, `M94.691,155.097 c-20.317,39.331,48.417,92.208,67.23,47.383C183.064,152.101,135.891,117.029,94.691,155.097z`);
    // tslint:enable: max-line-length
  }
}
