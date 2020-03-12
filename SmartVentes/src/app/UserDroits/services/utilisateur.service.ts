import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../UDModeles/user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private Url = "http://localhost:3000/Users"
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    profils : new FormControl(''),
    dateCreate : new FormControl(''),
    dateFin : new FormControl(''),
    photoU : new FormControl(''),
    email : new FormControl('',Validators.email)

  });

  initializeFormGroup() {
    this.form.setValue({
      id:null,
      profils : "",
      dateCreate : "",
      dateFin : "",
      photoU : "",
      email : "",
    });
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<User>(this.Url);
  }

  addUser(user){
    return this.http.post<User>(this.Url,user);
  }

  deleteUser(id){
    return this.http.delete(`${this.Url}/${id}`);
  }
  updateUser(user){
    return this.http.put(`${this.Url}/${user.id}`,user);
  }

  populateform(row){
    this.form.setValue(row);

  }
}