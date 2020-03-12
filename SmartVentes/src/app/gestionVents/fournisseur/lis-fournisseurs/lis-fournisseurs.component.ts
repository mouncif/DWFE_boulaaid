import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../GVModeles/fournisseur';
import { FournisseurService } from '../../services/fournisseur.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lis-fournisseurs',
  templateUrl: './lis-fournisseurs.component.html',
  styleUrls: ['./lis-fournisseurs.component.css']
})
export class LisFournisseursComponent implements OnInit {

  fournisseurs: Fournisseur[]=[];
  fournisseur: Fournisseur;
  dataSource=new MatTableDataSource<Fournisseur>();
  displayedColumns: string[] = [
    'id',
    'nomF',
    'nomCourtF',
    'villeF',
    'AdresseF',
    'Tel_fixF',
    'Tel_mobileF',
    'FaxF',
    'emailF',
    'actions'];
  constructor(private service: FournisseurService, private rout:Router) { }

  ngOnInit() {
    this.fetchElements();
  }
  fetchElements(){
   
    this.service.getAll().subscribe(
      res=>{
        if(!res) return ;
        console.log(res);
        this.dataSource=new MatTableDataSource(res as any);
      }
    )
  }
  onDelete(id){
    this.service.deleteFournisseur(id)
    .subscribe(()=>{
      this.fournisseurs = this.fournisseurs.filter(fournisseur=>fournisseur.id!=id);
      //this.notification.openSnackBar("Success deleting ...");
      this.fetchElements();
    })
  }
  onEdit(row){
    this.service.populateform(row);
    this.rout.navigateByUrl('/Fournisseur');
  }

}
