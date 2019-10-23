import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';
import { getHasDataBeenLoaded, getError } from '../store/selectors/data.selectors';
import { take, takeUntil } from 'rxjs/operators';
import { GetData } from '../store/actions/data.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { ToastService } from '../providers/toast-service/toast.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private themeService: ThemeServiceProvider,
    private store: Store<IAppState>,
    private toastService: ToastService) {
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

    this.store.select(getError)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((error) => {
        if (error) {
          console.log('tab-page redux - getError:', error);
          this.presentToast(error);
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private presentToast(text: string) {
    this.toastService.presentToast(text);
  }
}
