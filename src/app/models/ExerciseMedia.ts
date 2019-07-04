import { Muscles } from './enums';

export class ExerciseMedia {
  constructor (
  public name: string,
  public ionicPath: string,
  public nativePath: string,
  public isDefault: boolean,
  public muscles: Set<Muscles>,
  ) {
    this.muscles = muscles;
  }
  static buildDefaultExerciseMedia(url: string, muscles: Set<Muscles>): ExerciseMedia {
    const image = new ExerciseMedia(url, url, url, true, muscles);
    return image;
  }
}
