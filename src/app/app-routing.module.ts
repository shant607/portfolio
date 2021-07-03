import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StartpageComponent } from './startpage/startpage.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path:'',component:StartpageComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'work',component:WorkComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
