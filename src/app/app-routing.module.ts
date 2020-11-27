import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtrDcWiseComponent } from './Online/mtr-dc-wise/mtr-dc-wise.component';
import { AreaWiseComponent } from './Online/area-wise/area-wise.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path: 'MeterWise', component: MtrDcWiseComponent
  }, {
    path: 'AreaWise', component: AreaWiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
