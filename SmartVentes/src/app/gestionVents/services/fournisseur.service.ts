import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../GVModeles/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private Url = "http://localhost:3000/Fournisseurs"
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomF : new FormControl(''),
    nomCourtF : new FormControl(''),
    villeF : new FormControl(''),
    AdresseF : new FormControl(''),
    Tel_fixF : new FormControl(''),
    Tel_mobileF : new FormControl(''),
    FaxF : new FormControl(''),
    emailF : new FormControl(''),

  });

  initializeFormGroup() {
    this.form.setValue({
      id:null,
      nomF : "",
      nomCourtF : "",
      villeF : "",
      AdresseF : "",
      Tel_fixF : "",
      Tel_mobileF : "",
      FaxF : "",
      emailF : "",
    });
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Fournisseur>(this.Url);
  }

  addFournisseur(fournisseur){
    return this.http.post<Fournisseur>(this.Url,fournisseur);
  }

  deleteFournisseur(id){
    return this.http.delete(`${this.Url}/${id}`);
  }
  updateFournisseur(fournisseur){
    return this.http.put(`${this.Url}/${fournisseur.id}`,fournisseur);
  }

  populateform(row){
    this.form.setValue(row);

  }
}
