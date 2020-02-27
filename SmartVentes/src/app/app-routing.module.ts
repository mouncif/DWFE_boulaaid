import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './gestionVents/client/client.component';
import { ListClientComponent } from './gestionVents/client/list-client/list-client.component';
import { FournisseurComponent } from './gestionVents/fournisseur/fournisseur.component';
import { ProduitComponent } from './gestionVents/produit/produit.component';


const routes: Routes = [
  {path:'', redirectTo:'list_Produit', pathMatch:'full'},
  {path:'client', component:ClientComponent},
  {path:'list-client', component:ListClientComponent},
  {path:'Fournisseur', component:FournisseurComponent},
  {path:'list-Fournisseur', component:ListClientComponent},
  {path:'Produit', component:ProduitComponent},
  {path:'list-Produit', component:ListClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
