import { OlistOpointsScreenComponent } from './components/screen/olist-opoints-screen/olist-opoints-screen.component';
import { OlistScreenProfileComponent } from './components/screen/olist-screen-profile/olist-screen-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/opoints', pathMatch: 'full'},
  { path: 'opoints', component: OlistOpointsScreenComponent},
  { path: 'profile', component: OlistScreenProfileComponent, data: {} },
  { path: '**', redirectTo: '/opoints', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
