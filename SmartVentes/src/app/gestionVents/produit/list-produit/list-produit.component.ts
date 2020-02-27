import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FournisseurService } from '../../services/fournisseur.service';
import { Router } from '@angular/router';
import { Produit } from '../../GVModeles/produit';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits: Produit[]=[];
  produit: Produit;
  dataSource=new MatTableDataSource<Produit>();
  displayedColumns: string[] = [
    'id',
    'nomP',
    'nomCourtP',
    'prix_baseP',
    'prix_venteP',
    'seuil_max_remiseP',
    'uniteP',
    'imageP',
    'quantite_initP',
    'quantite_actP',
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
      this.produits = this.produits.filter(produits=>produits.id!=id);
      //this.notification.openSnackBar("Success deleting ...");
      this.fetchElements();
    })
  }
  onEdit(row){
    this.service.populateform(row);
    this.rout.navigateByUrl('/fournisseur');
  }

}
