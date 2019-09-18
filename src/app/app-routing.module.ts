import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DatasetComponent } from './pages/dataset/dataset.component';
import { CategorizarComponent } from './pages/categorizar/categorizar.component';

const routes: Routes = [
  {
    path: "dataset",
    component: DatasetComponent
  }, {
    path: "categorizar",
    component: CategorizarComponent,
    pathMatch: 'full'
  },
  { path: "", redirectTo: "/dataset", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
