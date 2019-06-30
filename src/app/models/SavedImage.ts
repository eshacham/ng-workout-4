import { Muscles } from './enums';

export class SavedImage {
  constructor (
  public name: string,
  public ionicPath: string,
  public nativePath: string,
  public isDefault: boolean,
  public muscles: Set<Muscles>,
  ) {
    this.muscles = muscles;
  }
  static buildDefaultSavedImage(url: string, muscles: Set<Muscles>): SavedImage {
    const image = new SavedImage(url, url, url, true, muscles);
    return image;
  }
}
