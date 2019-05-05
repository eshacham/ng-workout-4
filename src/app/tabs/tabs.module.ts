import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';
import { DataServiceProvider } from '../providers/data-service/data-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [TabsPage],
  providers: [
    File,
    WebView,
    ThemeServiceProvider,
    DataServiceProvider
  ]
})
export class TabsPageModule {}
