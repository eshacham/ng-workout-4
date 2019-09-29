import { Component, OnInit } from '@angular/core';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';
import { getHasDataBeenLoaded } from '../store/selectors/data.selectors';
import { take } from 'rxjs/operators';
import { GetData } from '../store/actions/data.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  constructor (
    private themeService: ThemeServiceProvider,
    private store: Store<IAppState>) {
    themeService.addBodyClass('gray-orange-black');
  }

  ngOnInit() {
    this.store.select(getHasDataBeenLoaded)
      .pipe(take(1))
      .subscribe(loaded => {
        if (!loaded) {
          this.store.dispatch(new GetData());
        }
      });
    }
}
