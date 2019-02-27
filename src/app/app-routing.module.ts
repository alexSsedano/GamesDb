import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component'
import { InfoComponent } from './info/info.component'

const routes: Routes = [

 { path: '', component: ContentComponent},
 { path: 'ps4', component: ContentComponent},
 { path: 'xbox', component: ContentComponent},
 { path: 'pc', component: ContentComponent},
 { path: 'info', component: InfoComponent},
 { path: '**', component: ContentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
