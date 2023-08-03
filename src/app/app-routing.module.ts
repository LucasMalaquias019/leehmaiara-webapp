import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnsaiosComponent } from './ensaios/ensaios.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ensaios', component: EnsaiosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
