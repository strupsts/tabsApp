import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import {AnotherPageComponent} from "./another-page/another-page.component";

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'anotherPage',
    component: AnotherPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
