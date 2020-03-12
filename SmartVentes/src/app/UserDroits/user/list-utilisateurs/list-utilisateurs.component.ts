import { Component, OnInit } from '@angular/core';
import { User } from '../../UDModeles/user';
import { MatTableDataSource } from '@angular/material';
import { UtilisateurService } from 'src/app/UserDroits/services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.css']
})
export class ListUtilisateursComponent implements OnInit {

 
  users: User[]=[];
  user: User;
  dataSource=new MatTableDataSource<User>();
  displayedColumns: string[] = ['id',
    'profils',
    'dateCreate',
    'dateFin',
    'photoU',
    'email',
    'actions'];
  constructor(private service: UtilisateurService, private rout:Router) { }

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
    this.service.deleteUser(id)
    .subscribe(()=>{
      this.users = this.users.filter(user=>user.id!=id);
      //this.notification.openSnackBar("Success deleting ...");
      this.fetchElements();
    })
  }
  onEdit(row){
    this.service.populateform(row);
    this.rout.navigateByUrl('/user');
  }

}
