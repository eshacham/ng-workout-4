import { Muscles } from './enums';

export class SavedImage {
  constructor (
  public name: string,
  public ionicPath: string,
  public nativePath: string,
  public isDefault: boolean,
  public muscles: Set<Muscles>,
  ) {
    this.muscles = new Set();
  }
}
