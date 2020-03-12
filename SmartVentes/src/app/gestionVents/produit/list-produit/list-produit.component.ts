import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Produit } from '../../GVModeles/produit';
import { ProduitService } from 'src/app/gestionVents/services/produit.service';

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
  constructor(private service: ProduitService, private rout:Router, private notification :MatSnackBar) { }

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
    if(confirm('vous etes sur ...!!!')){
    this.service.deleteProduit(id)
    .subscribe(()=>{
      this.produits = this.produits.filter(produits=>produits.id!=id);
      this.notification.open("Success deleting ...");
      this.fetchElements();
    })
  }
  }
  onEdit(row){
    this.service.populateform(row);
    this.rout.navigateByUrl('/Produit');
  }

}
