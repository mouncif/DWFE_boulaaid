import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './UserDroits/user/user.component';
import { ClientComponent } from './gestionVents/client/client.component';
import { ListClientComponent } from './gestionVents/client/list-client/list-client.component';
import { ClientService } from './gestionVents/services/client.service';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FournisseurComponent } from './gestionVents/fournisseur/fournisseur.component';
import { ProduitComponent } from './gestionVents/produit/produit.component';
import { ListFournisseurComponent } from './gestionVents/fournisseur/list-fournisseur/list-fournisseur.component';
import { ListProduitComponent } from './gestionVents/produit/list-produit/list-produit.component';
import { LisFournisseursComponent } from './gestionVents/fournisseur/lis-fournisseurs/lis-fournisseurs.component';
import { ListUtilisateursComponent } from './UserDroits/user/list-utilisateurs/list-utilisateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ClientComponent,
    ListClientComponent,
    FournisseurComponent,
    ProduitComponent,
    ListFournisseurComponent,
    ListProduitComponent,
    LisFournisseursComponent,
    ListUtilisateursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
