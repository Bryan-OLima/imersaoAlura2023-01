import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { NotFoundComponent } from './modules/shared/pages/not-found/not-found.component';

const defaultText: string = 'Conversor'

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    title: `${defaultText} - Home`
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: `${defaultText} - 404`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
