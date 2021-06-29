import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { FullstackComponent } from './fullstack/fullstack.component';



const routes: Routes = [
  {

    path:"",component: OverviewComponent

  },{

    path:"fullstack", component: FullstackComponent

  },{

    path:"frontend", component: FrontendComponent

  },{

    path:"backend", component: BackendComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
