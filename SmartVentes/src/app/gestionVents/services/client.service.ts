import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client } from '../GVModeles/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private Url = "http://localhost:3000/Clients"
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomC : new FormControl(''),
    prenomC : new FormControl(''),
    statutC : new FormControl(''),
    photoC : new FormControl(''),
    telC : new FormControl('', [Validators.required, Validators.minLength(8)]),
    email : new FormControl('',Validators.email),
    adresseC : new FormControl(''),
    villeC : new FormControl(''),

  });

  initializeFormGroup() {
    this.form.setValue({
      id:null,
      nomC : "",
      prenomC : "",
      statutC : "",
      photoC : "",
      telC : "",
      email : "",
      adresseC : "",
      villeC : "",
    });
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Client>(this.Url);
  }

  addClient(client){
    return this.http.post<Client>(this.Url,client);
  }

  deleteClient(id){
    return this.http.delete(`${this.Url}/${id}`);
  }
  updateClient(client){
    return this.http.put(`${this.Url}/${client.id}`,client);
  }

  populateform(row){
    this.form.setValue(row);

  }
}