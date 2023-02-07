import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TourComponent} from "./tour/tour.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FormComponent} from "./form/form.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [

  {
    path: '', component: NavbarComponent
  },
  {
    path: 'tour', component: TourComponent
  },
  {
    path: 'form/:id', component: FormComponent

  },
  {
    path: 'detail/:id', component: DetailComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
