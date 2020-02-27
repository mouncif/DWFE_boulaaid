import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Produit } from '../GVModeles/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produit : Produit ={
      id:null,
      nomP: '',
      nomCourtP: '',
      prix_baseP: 0,
      prix_venteP: 0,
      seuil_max_remiseP: 0,
      uniteP: 0,
      imageP: '',
      quantite_initP: 0,
      quantite_actP: 0,
  };
  produits : Produit[] = [];
  constructor(private service : ProduitService, private rout: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.service.form.valid){
      this.produit = this.service.form.value;
      if(this.service.form.value.id==null){
      this.service.addProduit(this.produit)
      .subscribe((produit)=>{
        this.produits = [produit, ...this.produits];
      });
      console.log(this.produit);
      this.service.form.reset();

     } else {
      console.log(this.produit);
      this.update();
      this.service.form.reset();
    }
    this.service.initializeFormGroup();
    }

  }
  update(){
    this.service.updateProduit(this.produit).subscribe(()=>console.log(this.produit));
  }
}
