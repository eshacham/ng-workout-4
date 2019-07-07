import { Muscles } from './enums';

export class ExerciseMedia {
  public name: string;
  public ionicPath: string;
  public nativePath: string;
  public isDefault: boolean;
  public muscles: Set<Muscles>;
  public mediaUsageCounter?: number;

  constructor (option: {
    name: string,
    ionicPath: string,
    nativePath: string,
    isDefault: boolean,
    muscles: Set<Muscles>
  }) {
    this.name = option.name;
    this.ionicPath = option.ionicPath;
    this.nativePath = option.nativePath;
    this.isDefault = option.isDefault;
    this.muscles = option.muscles;
    this.mediaUsageCounter = 0;
    console.log('constructed exercise media as', this.name);
  }
  static buildDefaultExerciseMedia(url: string, muscles: Set<Muscles>): ExerciseMedia {
    const image = new ExerciseMedia({
      name: url.substr(url.lastIndexOf('/') + 1),
      ionicPath: url,
      nativePath: url,
      isDefault: true,
      muscles: muscles
    });
    // console.log('constructed exercise media as', image);
    return image;
  }
}
