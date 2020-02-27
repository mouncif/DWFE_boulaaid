import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../services/fournisseur.service';
import { Router } from '@angular/router';
import { Fournisseur } from '../GVModeles/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  fournisseur : Fournisseur = {
      id:null,
      nomF : "",
      nomCourtF : "",
      villeF : "",
      AdresseF : "",
      Tel_fixF : "",
      Tel_mobileF : "",
      FaxF : "",
      emailF : "",
  };
  fournisseurs : Fournisseur[];
  constructor(private service : FournisseurService, private rout: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.service.form.valid){
      this.fournisseur = this.service.form.value;
      if(this.service.form.value.id==null){
      this.service.addFournisseur(this.fournisseur)
      .subscribe((fournisseur)=>{
        this.fournisseurs = [fournisseur, ...this.fournisseurs];
      });
      console.log(this.fournisseur);
      this.service.form.reset();

     } else {
      console.log(this.fournisseur);
      this.update();
      this.service.form.reset();
    }
    //this.service.initializeFormGroup();
    this.rout.navigateByUrl('/list-Fournisseur');

    }

  }
  update(){
    this.service.updateFournisseur(this.fournisseur).subscribe(()=>console.log(this.fournisseur));
  }

}
