import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'menu', component: MenuComponent,
    children: [
      {
        path: 'user-details', 
        component: UserDetailsComponent,
      },
    ],

  },
  {
    path: '**',
    redirectTo: '/menu/user-details',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
