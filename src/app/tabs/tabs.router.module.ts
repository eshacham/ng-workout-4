import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-workouts',
        children: [
          {
            path: '',
            loadChildren: '../tab-workouts/tab-workouts.module#TabWorkoutsPageModule'
          }
        ]
      },
      {
        path: 'tab-library',
        children: [
          {
            path: '',
            loadChildren: '../tab-library/tab-library.module#TabLibraryPageModule'
          }
        ]
      },
      {
        path: 'tab-settings',
        children: [
          {
            path: '',
            loadChildren: '../tab-settings/tab-settings.module#TabSettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-workouts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-workouts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
