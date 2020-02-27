import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Client } from '../../GVModeles/client';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Client[]=[];
  client: Client;
  dataSource=new MatTableDataSource<Client>();
  displayedColumns: string[] = ['id',
    'nomC', 
    'prenomC', 
    'statutC', 
    'photoC', 
    'telC', 
    'email', 
    'adresseC', 
    'villeC',
    'actions'];
  constructor(private service: ClientService, private rout:Router) { }

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
    this.service.deleteClient(id)
    .subscribe(()=>{
      this.clients = this.clients.filter(client=>client.id!=id);
      //this.notification.openSnackBar("Success deleting ...");
      this.fetchElements();
    })
  }
  onEdit(row){
    this.service.populateform(row);
    this.rout.navigateByUrl('/client');
  }

}
