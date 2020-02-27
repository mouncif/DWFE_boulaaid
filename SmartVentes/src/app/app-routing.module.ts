import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './gestionVents/client/client.component';
import { ListClientComponent } from './gestionVents/client/list-client/list-client.component';


const routes: Routes = [
  {path:'', redirectTo:'client', pathMatch:'full'},
  {path:'client', component:ClientComponent},
  {path:'list-client', component:ListClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
