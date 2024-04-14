import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAllComponent } from './main-all/main-all.component';

const routes: Routes = [
  { path: 'mainall', component: MainAllComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
