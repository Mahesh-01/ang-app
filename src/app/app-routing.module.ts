import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './home/home.component';
import { NodataComponent } from './nodata/nodata.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'services', component:ServicesComponent
  },
  {
    path: 'blog', component:BlogComponent
  },
  {
    path:'discover', component:DiscoverComponent
  },
  {
    path: 'contact', component:ContactComponent
  },
  {
    path: '**', component:NodataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
