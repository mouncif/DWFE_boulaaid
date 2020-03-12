import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './gestionVents/client/client.component';
import { ListClientComponent } from './gestionVents/client/list-client/list-client.component';
import { FournisseurComponent } from './gestionVents/fournisseur/fournisseur.component';
import { ProduitComponent } from './gestionVents/produit/produit.component';
import { ListFournisseurComponent } from './gestionVents/fournisseur/list-fournisseur/list-fournisseur.component';
import { LisFournisseursComponent } from './gestionVents/fournisseur/lis-fournisseurs/lis-fournisseurs.component';
import { ListProduitComponent } from './gestionVents/produit/list-produit/list-produit.component';
import { UserComponent } from './UserDroits/user/user.component';
import { ListUtilisateursComponent } from 'src/app/UserDroits/user/list-utilisateurs/list-utilisateurs.component';


const routes: Routes = [
  {path:'', redirectTo:'list_Produit', pathMatch:'full'},
  {path:'client', component:ClientComponent},
  {path:'list-client', component:ListClientComponent},
  {path:'Fournisseur', component:FournisseurComponent},
  {path:'list-Fournisseur', component:ListFournisseurComponent},
  {path:'Produit', component:ProduitComponent},
  {path:'list-Produit', component:ListProduitComponent},
  {path:'user', component:UserComponent},
  {path:'list-users', component:ListUtilisateursComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
