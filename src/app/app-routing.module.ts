import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { HouseComponent } from './about/house/house.component';
import { AlbumComponent } from './galary/album/album.component';
import { BlogerComponent } from './blog/bloger/bloger.component';
import { SigupComponent } from './authentication/sigup/sigup.component';
import { SiginComponent } from './authentication/sigin/sigin.component';
import { ParentAlbumComponent } from './galary/parent-album/parent-album.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: HouseComponent },
  { path: 'galary', component: ParentAlbumComponent },
  { path: 'blog', component: BlogerComponent },
  { path: 'search' ,  loadChildren: () => import('./pages-all/pages-all.module').then(m => m.PagesAllModule) },
  { path: 'sigup',component:SigupComponent},
  { path: 'sigin',component:SiginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
