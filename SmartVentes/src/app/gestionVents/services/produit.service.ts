import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../GVModeles/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private Url = "http://localhost:3000/Produits"
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomP: new FormControl(''),
    nomCourtP: new FormControl(''),
    prix_baseP: new FormControl(0),
    prix_venteP: new FormControl(0),
    seuil_max_remiseP: new FormControl(0),
    uniteP: new FormControl(0),
    imageP: new FormControl(''),
    quantite_initP: new FormControl(0),
    quantite_actP: new FormControl(0),

  });

  initializeFormGroup() {
    this.form.setValue({
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
    });
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Produit>(this.Url);
  }

  addProduit(produit){
    return this.http.post<Produit>(this.Url,produit);
  }

  deleteProduit(id){
    return this.http.delete(`${this.Url}/${id}`);
  }
  updateProduit(produit){
    return this.http.put(`${this.Url}/${produit.id}`,produit);
  }

  populateform(row){
    this.form.setValue(row);

  }
}
