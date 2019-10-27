import { Subscription, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Muscles } from 'src/app/models/enums';
import { IAppState } from 'src/app/store/state/app.state';
import {
  SetExerciseMuscleFilter,
  AddLibraryMuscleFilter,
  AddExerciseMuscleFilter,
  DeleteLibraryMuscleFilter,
  DeleteExerciseMuscleFilter
} from '../../store/actions/musclesFilter.actions';
import { takeUntil, take } from 'rxjs/operators';
import { getLibraryMusclesFilter, getExerciseMusclesFilter } from 'src/app/store/selectors/musclesFilter.selectors';
import { getExerciseMedia } from 'src/app/store/selectors/ExercisesMedia.selectors';
import { UpdateImages } from 'src/app/store/actions/data.actions';

interface MuscleElements {
  muscle: Muscles;
  paths: string[];
}
interface SelectedMuscle {
  muscle: Muscles;
  isSelected: boolean;
}

interface MuscleFilterUsage {
  mediaId?: string;
  mediaName?: string;
  for: MuscleFilterFor;
}

export enum MuscleFilterFor {
  NoSet,
  FilterLibraryImages,
  SelectExercise,
  SetExerciseMedia,
}

@Component({
  selector: 'app-select-muscle',
  templateUrl: './select-muscle.page.html',
  styleUrls: ['./select-muscle.page.scss'],
})
export class SelectMusclePage implements OnInit, OnDestroy {

  subs: Subscription;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  muscleGroupElements: MuscleElements[];
  muscleFilterUsage: MuscleFilterUsage = {
    for: MuscleFilterFor.NoSet
  };
  get isSettingMedia(): boolean {
    return this.muscleFilterUsage.for === MuscleFilterFor.SetExerciseMedia;
  }
  get mediaToSet(): string {
    return this.muscleFilterUsage.mediaName;
  }

  get isFilteringLibrary(): boolean {
    return (
      this.muscleFilterUsage.for === MuscleFilterFor.FilterLibraryImages ||
      this.muscleFilterUsage.for === MuscleFilterFor.SelectExercise);
  }

  private _selectedMuscles: SelectedMuscle[];
  get selectedMuscles(): SelectedMuscle[] {
    return this._selectedMuscles;
  }
  set SelectedMuscles(muscles: SelectedMuscle[]) {
    this._selectedMuscles = muscles;
  }

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>) {
    this.initMuscleGroups();

    this.subs = this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.muscleFilterUsage = this.router.getCurrentNavigation().extras.state.muscleFilterUsage;
        if (this.isSettingMedia) {
          this.store.select(getExerciseMedia(this.muscleFilterUsage.mediaId))
            .pipe(take(1))
            .subscribe(image => {
              console.log('select-muscle - getExerciseMedia:', image);
              this.muscleFilterUsage.mediaName = image.name;
              this.store.dispatch(new SetExerciseMuscleFilter(image.muscles));
            });
        }
      }
    });
  }

  ngOnInit() {
    /// todo: removing this empty method, messes up the sequence of events
    /// and the exercise media muscles are not shown initialy!
  }

  ionViewWillEnter() {
    if (this.isFilteringLibrary) {
      this.store.select(getLibraryMusclesFilter)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((filter) => {
          console.log('select-muscle - getLibraryMusclesFilter:', filter);
          this.SelectedMuscles = this.showSelectedMuscles(filter);
        });
    } else {
      this.store.select(getExerciseMusclesFilter)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((filter) => {
          console.log('select-muscle - getExerciseMusclesFilter:', filter);
          this.SelectedMuscles = this.showSelectedMuscles(filter);
        });
    }
  }

  ngOnDestroy() {
    console.log('onDestroy - select-muscle');
    this.subs.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private showSelectedMuscles(muscles: Muscles[]): SelectedMuscle[] {
    return Object.values(Muscles).map(muscle => {
      const selectedMuscle: SelectedMuscle = {
        muscle: muscle,
        isSelected: muscles.includes(muscle)
      };
      if (selectedMuscle.isSelected) {
        this.showMuscle(muscle);
      } else {
        this.hideMuscle(muscle);
      }
      return selectedMuscle;
    });
  }

  toggleMuscle(clickedMuscle: Muscles) {
    const muscle = this.selectedMuscles.filter(selectedMuscle => selectedMuscle.muscle === clickedMuscle)[0];
    muscle.isSelected = !muscle.isSelected;
    if (muscle.isSelected) {
      this.addMuscleToFilter(clickedMuscle);
    } else {
      this.deleteMuscleFromFilter(clickedMuscle);
    }
  }

  addMuscleToFilter(muscle: Muscles) {
    if (this.isFilteringLibrary) {
      this.store.dispatch(new AddLibraryMuscleFilter(muscle));
    } else {
      console.log('addMuscleToFilter - ', muscle);
      this.store.dispatch(new AddExerciseMuscleFilter({
        muscle: muscle, mediaId: this.muscleFilterUsage.mediaId
      }));
    }
  }
  deleteMuscleFromFilter(muscle: Muscles) {
    if (this.isFilteringLibrary) {
      this.store.dispatch(new DeleteLibraryMuscleFilter(muscle));
    } else {
      this.store.dispatch(new DeleteExerciseMuscleFilter({
        muscle: muscle, mediaId: this.muscleFilterUsage.mediaId
      }));
    }
  }

  private getMuscleElements(muscle: Muscles) {
    const query = `g#${Muscles[muscle]} > path`;
    const elements = document.querySelectorAll(query);
    return elements;
  }

  private showMuscle(muscle: Muscles) {
    const elements = this.getMuscleElements(muscle);
    elements.forEach((elem) => {
      this.renderer.setStyle(elem, 'fill', '000');
      this.renderer.setStyle(elem, 'opacity', '.3');
    });
  }
  private hideMuscle(muscle: Muscles) {
    const elements = this.getMuscleElements(muscle);
    elements.forEach((elem) => {
      this.renderer.setStyle(elem, 'fill', 'fff');
      this.renderer.setStyle(elem, 'opacity', '0');
    });
  }

  getButtonFill(selectedMuscle: SelectedMuscle): string {
    return selectedMuscle.isSelected ? 'outline' : 'clear';
  }

  private initMuscleGroups() {
    this.muscleGroupElements = [];
    // tslint:disable: max-line-length
    this.muscleGroupElements = [
      {
        muscle: Muscles.Chest, paths: [
          'M 105.3 143.9 c -31.7 19.2 -4.4 86.9 42.7 68.5 C 180.5 199.6 171.7 103.6 105.3 143.9 z',
          'M 187.9 212.3 c 47.1 18.5 74.4 -49.3 42.7 -68.5 C 164.2 103.6 155.5 199.6 187.9 212.3 z'
        ]
      },
      {
        muscle: Muscles.Abs, paths: [
          'M 162.7 394.8 c -15.9 -2.7 -17.4 -27.3 -20.7 -40.1 c -4.8 -18.7 -7.4 -35.3 -7.5 -54.6 c 0 -16.1 -4.2 -32.3 -4.5 -48.4 c -0.2 -11.9 -2.7 -32 11 -37.3 c 8.3 -3.2 18 -3.6 26.8 -3.3 c 6.9 0.2 13.7 0.1 20.4 2 c 15.4 4.3 14.7 21.9 14.4 35.2 c -0.5 17.3 -4.5 34.6 -4.6 51.9 c 0 20 -2.8 33.4 -10.4 51.8 C 183.7 361.4 175.4 393.5 162.7 394.8 z'
        ]
      },
      {
        muscle: Muscles.Biceps, paths: [
          'M 62.5 270.3 c 15.1 -7.5 23.2 -34 26.3 -43.3 c 3.2 -9.8 5.7 -20.1 5.5 -30.5 c -0.1 -9 -4.8 -13.8 -7.3 -21.2 c -8 9.3 -17 17.6 -22.1 29.1 C 55.9 224.8 58.7 249.1 62.5 270.3 L 62.5 270.3 z',
          'M 257.6 269.3 c -12 -8.1 -22 -32.8 -24.1 -42.4 c -2.2 -10.1 -1.1 -23.6 1.2 -34 c 2.1 -9.8 6.5 -13.6 6.9 -21.4 c -0.2 2.8 15.3 14.5 18.6 25.6 C 266.7 218.3 261.6 247.8 257.6 269.3 L 257.6 269.3 z'
        ]
      },
      {
        muscle: Muscles.Traps, paths: [
          'M 138 103.7 c -1.6 3.3 18 32.1 17.4 32.3 s -25.2 -10.9 -57.9 -10.9 C 92.5 125.1 135.2 109.6 138 103.7 z',
          'M 189.7 106.7 c 1.5 3.1 -17.1 29.9 -16.6 30 C 175.8 141 198.3 122.5 229.5 122.5 C 234.2 122.5 192.4 112.2 189.7 106.7 z',
          'M 385.5 239.3 c 10.8 -64.5 -2.8 -107.5 -12.3 -120 c -5.9 -7.8 14 -12.9 13.3 -37 c -0.5 -16.3 -5.5 -13.5 -9 -9 c -2.1 2.7 9.3 30.3 -43.5 45 c 0 0 20.3 9.8 23.3 14.8 s 11.7 29.7 1.8 47 c -9.5 16.5 14.8 49.3 14.3 47 L 385.5 239.3 z',
          'M 399.5 240 c -5.5 -37.5 4.4 -111.5 12.3 -120 C 418 113.3 397.8 107.1 398.5 83 c 0.5 -16.3 5.5 -13.5 9 -9 c 2.1 2.7 -10.3 33.3 42.5 48 c 0 0 -19.3 6.8 -22.3 11.8 s -15 32.1 -1.8 47 c 16.8 18.8 -14.8 49.3 -14.3 47 L 399.5 240 z'
        ]
      },
      {
        muscle: Muscles.Shoulders, paths: [
          'M 91.8 124.8 c -38.4 3.3 -42.6 49.9 -30.5 80.3 c 10.2 -12.8 21.3 -26.7 27.1 -42 C 95.3 144.7 106.3 132.4 127 131.3 C 116.1 128.3 103.2 123.8 91.8 124.8 C 68.1 126.8 100.7 124 91.8 124.8 z',
          'M 239.3 125 c 33.6 3.1 29.9 47.7 26.3 75 c -10.2 -12.8 -18.8 -22.7 -24.6 -38 c -6.9 -18.3 -17.9 -30.5 -38.6 -31.7 C 213.2 127.3 231.3 124.3 239.3 125 z',
          'M 328.5 119.5 c -52.4 6.6 -41.9 62.2 -42 59.5 c 0 0 16.8 -30.5 30.8 -29.8 c 20.2 1.1 32 -7.3 35.3 -11.3 C 355.7 134.1 347.5 130.4 328.5 119.5 z',
          'M 455.4 122.5 c 52.4 6.6 41.9 62.2 42 59.5 c 0 0 -16.8 -30.5 -30.8 -29.8 c -20.2 1.1 -32 -7.3 -35.3 -11.3 C 428.2 137.1 436.4 133.4 455.4 122.5 z'
        ]
      },
      {
        muscle: Muscles.Triceps, paths: [
          'M 468.7 155.2 c 23.7 9.8 32.1 39.5 35 62.2 c 1.4 10.8 4.4 27.3 -1.4 37.3 c -3.7 6.4 -5.5 -4.7 -5.7 -6.6 c -0.5 -3.5 -6.1 -11.5 -7.7 -3.4 c -0.8 4 1.9 7.7 -2.3 10.9 c -3.4 2.6 -9.6 2.3 -13 -0.2 c -6.2 -4.6 -5 -13.7 -5.4 -20.3 c -0.5 -6.9 -4.1 -13 -5.2 -19.8 c -1.8 -11.1 0.1 -20.9 1.5 -31.9 C 465.6 173.4 463.8 164.3 468.7 155.2 z',
          'M 318 153.2 c -23.7 9.8 -32.1 39.5 -35 62.2 c -1.4 10.8 -4.4 27.3 1.4 37.3 c 3.7 6.4 5.5 -4.7 5.7 -6.6 c 0.5 -3.5 6.1 -11.5 7.7 -3.4 c 0.8 4 -1.9 7.7 2.3 10.9 c 3.4 2.6 9.6 2.3 13 -0.2 c 6.2 -4.6 5 -13.7 5.4 -20.3 c 0.5 -6.9 4.1 -13 5.2 -19.8 c 1.8 -11.1 -0.1 -20.9 -1.5 -31.9 C 321.1 171.4 322.8 162.3 318 153.2 z',
          'M 54.8 196.8 c -1.5 9.5 -4.7 4.3 -5 32.7 c -0.3 28.4 6.8 25.3 8.2 29.5 c 0 0 -5.8 -34.6 0.9 -47.3 C 61.3 207.1 54.8 196.8 54.8 196.8 z',
          'M 267.5 203.5 c 0.9 9 3.7 4.2 3.1 31 c -0.7 26.8 -6.4 23.7 -7.7 27.6 c 0 0 5.9 -32.4 0.8 -44.6 C 261.8 213 267.5 203.5 267.5 203.5 z'
        ]
      },
      {
        muscle: Muscles.Lats, paths: [
          'M 439.5 199.5 c -10.8 -1.1 -34.3 40.8 -37 44.3 c 0 0 -2.3 9.8 -1.5 16 s 22.8 19.5 24 42.5 s 10.3 17.5 10.8 17.5 c 0 0 8 -25.8 10.5 -43.5 s 11.8 -40.5 11.8 -40.5 l 1.3 -3.3 c 0 0 1 -3.5 1.3 -4.8 s 0.2 -19.9 -2 -23.5 C 455.8 199.8 447.3 200.3 439.5 199.5 z',
          'M 355.8 202 c 13.2 14.9 20.1 31.6 28 41.8 c 0 0 2.3 9.8 1.5 16 s -22.8 19.5 -24 42.5 s -10.3 17.5 -10.8 17.5 c 0 0 -12 -25 -14.5 -42.8 s -7.7 -41.3 -7.7 -41.3 l -1.3 -3.3 c 0 0 -1 -3.5 -1.3 -4.8 s 0.5 -23.5 2 -24.3 C 328.2 203.3 352.6 198.4 355.8 202 z',
          'M 208 219 c 8.3 -2 19.5 -8.8 20.3 -9.5 s 3.3 16.5 1.3 24 L 228 240 L 208 219 z',
          'M 125 218.3 c -8.3 -2 -25 -14.5 -25.8 -15.3 S 93 223.8 95 231.3 l 2.3 7.5 L 125 218.3 z'
        ]
      },
      {
        muscle: Muscles.Obliques, paths: [
          'M 346.5 320.8 c -2.1 -11.3 -8.9 -30.1 -10.3 -32.5 c -1.4 -2.5 -1.8 -2 -1.8 -2 l -1.1 31.8 L 346.5 320.8 z',
          'M 438.3 320.8 c 2.1 -11.3 7.6 -28 9 -30.5 c 1.4 -2.5 1.3 -5 1.3 -5 l 3 30 L 438.3 320.8 z',
          'M 208 224 c -0.9 4 -6.1 117.5 -4.3 119.8 c 0 0 18.6 -15.5 19.3 -26.5 c 0.7 -11 -1.8 -29 -1.1 -37 c 0.7 -8 3.8 -29.5 3.6 -34.5 C 225.3 240.8 208 224 208 224 z',
          'M 125.5 223 c 1 4 4.3 119.3 2.3 121.5 c 0 0 -24 -19 -24.8 -30 s 3.8 -28.5 3 -36.5 c -0.8 -8 -6 -30 -5.8 -35 C 100.5 238 125.5 223 125.5 223 z'
        ]
      },
      {
        muscle: Muscles.Back, paths: [
          'M 323 152.8 c 17 52 28.3 56 35.8 15.5 c 0 0 -1.4 -30.6 -3 -28.3 C 352.5 144.8 323 152.8 323 152.8 z',
          'M 463.8 157 c -17 52 -29.5 47 -40.8 7 c -1.6 -5.6 5.4 -24.4 7 -22 C 433.3 146.8 463.8 157 463.8 157 z',
          'M 324.3 166 c -0.5 8.8 3.8 33.3 2.8 33.5 s 15 -2.3 15 -2.3 s -8.8 -6.5 -11.5 -15 S 324.3 166 324.3 166 z',
          'M 464 166 c 0.5 8.8 -3.8 33.3 -2.8 33.5 s -15 -2.3 -15 -2.3 s 8.8 -6.5 11.5 -15 S 464 166 464 166 z'
        ]
      },
      {
        muscle: Muscles.Forearms, paths: [
          'M 232.8 245.5 c 0.5 27.3 2.3 49.3 5.8 59.5 s 20.5 46.5 21.5 47.3 s 14 0.8 14 0.8 s -11.3 -30.8 -12.3 -33.8 s -1.5 -11 -2 -18 s -2.5 -16.3 -3.5 -19.5 S 232.8 245.5 232.8 245.5 z',
          'M 84.3 253.5 c -0.5 27.3 -5.8 43.5 -9.3 53.8 s -25 47.5 -26 48.3 s -9.5 -0.3 -9.5 -0.3 s 11.3 -30.8 12.3 -33.8 s 4.5 -10.3 5 -17.3 S 60 287 61 283.8 S 84.3 253.5 84.3 253.5 z',
          'M 47.3 249 c -6 21 -9.5 16.3 -11.3 49.5 S 28.8 347 29.3 350 s 6.3 4 6.3 4 s 13.4 -36.6 14.5 -39.5 c 1.5 -4 13.8 -33 11.5 -38.8 S 47.3 249 47.3 249 z',
          'M 270.3 254.5 c 6 21 7 11.3 8.8 44.5 s 1.3 49 0.8 52 s -3.3 2.5 -3.3 2.5 s -7.2 -32.4 -8.3 -35.3 c -1.5 -4 -13 -36.8 -10.8 -42.5 S 270.3 254.5 270.3 254.5 z"',
          'M 281.8 255 c 5.8 7 15 6.5 17 19.5 S 291 355.3 291 355.3 l -6.5 -0.8 l -1.5 -56 c 0 0 -3.5 -25 -3.3 -27.8 S 280 268 280 268 L 281.8 255 z',
          'M 506.5 255 c -4.6 7.8 -10.3 16.3 -10.3 29.5 c 0.1 13.2 15.8 75.8 15.8 75.8 l 12.3 -2.8 l -7.8 -56.8 c 0 0 -4.9 -27.8 -5.5 -30.5 c -0.7 -2.7 -0.7 -2.7 -0.7 -2.7 L 506.5 255 z',
          'M 317 253 c -10 13 -16.8 63.5 -19 74.3 s -2.8 24.3 -2.8 24.3 S 310.5 313 311.5 307 s 6.3 -9 7.8 -29.8 S 317 253 317 253 z',
          'M 472.8 258.5 c 17.8 8.3 26.3 60 28.5 70.8 s 4.5 27.3 4.5 27.3 S 481.4 318 480.4 312 s -6.3 -9 -7.8 -29.8 S 472.8 258.5 472.8 258.5 z'
        ]
      },
      {
        muscle: Muscles.Glutes, paths: [
          'M 333 363 c 13.3 -15.2 22.7 -26.8 24.7 -27.5 S 337 327 335.5 326.3 S 333 363 333 363 z',
          'M 459.1 358 c -13.3 -15.2 -22.7 -26.8 -24.7 -27.5 s 16.5 -10 18 -10.7 S 459.1 358 459.1 358 z',
          'M 361.3 337 c 17.7 6.8 34.7 21.5 34.8 41.7 c 0.2 20.2 -2.2 27.8 -6.7 32.3 s -4.7 8.8 -20.5 8.7 s -27.8 -2.8 -32.5 -17 c -4.7 -14.2 -4.2 -27.8 -2.7 -33 S 361.3 337 361.3 337 z',
          'M 434.5 333.2 c -17.7 6.8 -33.5 21.7 -33.7 41.8 s 2.2 28.2 6.7 32.7 s 5.5 8.3 21.4 8.2 s 24 -4.7 28.7 -18.8 c 4.7 -14.2 3.2 -29 1.7 -34.2 S 434.5 333.2 434.5 333.2 z'
        ]
      },
      {
        muscle: Muscles.Fingers, paths: [
          'M 27.5 360 c -4.5 8.8 -11.2 12.7 -11 19.8 s 2.7 10 2.7 12.7 s 17.3 -11.7 18.5 -14.5 S 27.5 360 27.5 360 z',
          'M 34.7 362.7 c 3.5 1.5 11 5.8 12.5 8.5 s 4.3 8.3 3.5 14.8 l -9.5 -8.3 L 34.7 362.7 z',
          'M 284.6 363 c 4.5 8.8 11.4 9.5 11 19.8 c -0.2 7.2 -2.7 10 -2.7 12.7 s -20.5 -11.1 -21 -14.2 C 270 368.8 284.6 363 284.6 363 z',
          'M 271.5 364 c -3.3 1.9 -10.5 7.7 -11.7 10.5 s -2.5 10.9 -0.8 17.2 l 8.4 -9.5 L 271.5 364 z',
          'M 506.8 373.3 c -2.5 11.3 -4.2 20.5 -1 24.7 s 22.3 -0.3 24.7 -0.7 s 8.2 -5.2 9.8 -7 c 1.7 -1.8 2.2 -8.5 -3 -13.3 s -7 -7.8 -7 -7.8 L 506.8 373.3 z',
        ]
      },
      {
        muscle: Muscles.Adductors, paths: [
          'M 117 344.3 c 8.3 27.5 16 50.8 21.3 64.3 s 13.3 60.3 13.3 60.3 s 1.5 -38.5 -3.8 -54.3 s -15 -45.5 -18.3 -50.3 S 117 344.3 117 344.3 z',
          'M 210 349.5 c -8.3 27.5 -19 46.8 -24.3 60.3 s -15.6 61 -15.6 61 s -1.5 -38.5 3.8 -54.3 s 17.3 -44.3 20.6 -49 S 210 349.5 210 349.5 z',
          'M 139.3 381 c -2.1 -1.8 12 20.3 14.8 22.8 s 6.3 3.5 10.5 -2 s 17.5 -22.5 19.3 -24.8 s -8 25.5 -7 24.8 s -10 19.8 -10.3 55.3 s -0.3 13.8 -0.3 13.8 l -4.8 -64.5 l -2 -1 l -3 1 c 0 0 0.3 10.8 0.5 18.8 c 0.2 7.8 -1.8 46 -2 47.8 s -0.3 1.8 -0.3 1.8 S 147 387.5 139.3 381 z'
        ]
      },
      {
        muscle: Muscles.Quads, paths: [
          'M 110.3 332.5 c 2.3 17.3 -5.5 45.5 -11 55.8 s -12.5 27 -12 38.3 s 14.5 117.5 25.3 114 s 13.5 -6.3 18.3 -6 s 8.3 4 11.3 4.3 s 9.8 -0.3 11 -26 s -7.3 -84 -16 -103 S 110.3 332.5 110.3 332.5 z',
          'M 221.5 335.3 c -2.3 17.3 3.1 42.8 8.6 53 s 6.4 45 5.9 56.3 s -11.3 97.5 -22 94 s -10.6 -4.3 -15.4 -4 s -8.3 4 -11.3 4.3 s -7.7 3 -12.9 -22.3 c -5.3 -25.5 5.5 -83.8 14.3 -102.8 S 221.5 335.3 221.5 335.3 z',
          'M 328.5 397.8 c -5 26 -5.5 62 -4.8 68.5 s 5.8 25.5 5.8 30.8 s 1.9 -43.4 3.5 -47.3 C 337 440 328.5 397.8 328.5 397.8 z',
          'M 465.5 393 c 5 26 1 66.8 0.3 73.3 s -6 16.5 -6 21.8 s -2.9 -34.1 -3.2 -38.3 C 455.5 437.5 465.5 393 465.5 393 z'
        ]
      },
      {
        muscle: Muscles.Hamstrings, paths: [
          'M 343 426 c 5.2 -6.2 35.8 -5 41 -2.8 s 11.5 6.8 6.3 35.3 s -6.8 50.3 -6.3 58 s -2 43.5 -6.8 49.5 s -10.8 -8 -10.8 -8 L 349 529.3 c 0 0 -12 24.5 -12.8 29 s -6.8 -55 -4.3 -62 S 331.6 439.6 343 426 z',
          'M 449.8 420.8 c -5.2 -6.2 -36 -5.3 -41.3 -3 s -14 4 -8.8 32.5 s 5.4 53.5 4.9 61.3 s -1.6 43.8 3.1 49.8 s 13 -9.3 13 -9.3 l 17.5 -32.3 c 0 0 9.5 20.3 10.3 24.8 s 8.8 -46.3 6.3 -53.3 S 461.1 434.4 449.8 420.8 z'
        ]
      },
      {
        muscle: Muscles.Longus, paths: [
          'M 111.3 556.5 c -12.5 38.8 -9.8 60 -2.8 86.8 S 126 699.7 124 697 C 116 686.5 112.4 553 111.3 556.5 z',
          'M 216.6 564.5 c 12.5 38.8 11.9 60.8 4.9 87.5 s -14.3 53.4 -11 52.8 C 215.8 703.8 215.4 561 216.6 564.5 z'
        ]
      },
      {
        muscle: Muscles.Calves, paths: [
          'M 146 588.8 c -3 8 -7.3 21.8 -4 41.8 s 1.8 26 4.3 40.8 s 4.5 8.8 4.3 10.8 s 0 -33.5 1.3 -37.8 s 2.3 -25.5 1.3 -31.5 S 146 588.8 146 588.8 z',
          'M 181.8 594.5 c 3.9 7.6 11.6 15.8 10.5 36 c -1.1 20.2 -1.9 32.6 -2.8 47.5 s -1.9 9.9 -1.4 11.8 c 0.5 2 -3.7 -33.3 -5.4 -37.4 s -5 -25.1 -4.7 -31.2 C 178.4 615.2 181.8 594.5 181.8 594.5 z',
          'M 334 645.8 c 7.3 0.5 15 1.5 16.8 -6.8 s 1.3 -11.8 2.3 -14.3 s 0.3 0.8 2.8 8.3 s 3.3 14.5 8.5 17.8 s 6.3 3.8 6.3 3.8 s 6 -3.5 5.8 -15.5 s 1 -13 1 -13 s 1.3 -16.5 -0.5 -22.8 s -3 -19.3 -4.3 -27 s -11.8 -18.5 -12.3 -21 s -5.8 4.5 -5.8 4.5 s -6.8 -12.5 -7.5 -12.5 s -7 7.3 -10 15.5 s -3.8 28 -4.8 30.3 S 328 612.5 329 621 S 334 645.8 334 645.8 z',
          'M 443.5 641.8 c 0.8 0 -9.5 3.3 -11.3 -5 S 432 629.5 431 627 s -2 0.3 -2.8 2.3 c -2.8 7.4 -0.3 8.8 -5.5 12 S 409 647.8 409 647.8 s -4 -6 -4.3 -17.5 c 0 -1.9 -0.3 -15 -0.3 -15 s 1.5 -15 3.3 -21.3 s 2.3 -19 6.7 -27.3 c 3.8 -6.9 11.8 -18.5 12.3 -21 s 5.8 4.5 5.8 4.5 s 6.8 -12.5 7.5 -12.5 s 5.3 8.8 8.3 17 s 1.3 28 2.3 30.3 s 2.5 18 1.5 26.5 S 443.5 641.8 443.5 641.8 z',
        ]
      }
    ];
    // tslint:enable: max-line-length
  }
}
