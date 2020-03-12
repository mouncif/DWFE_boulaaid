import { Component, OnInit } from '@angular/core';
import { User } from '../UDModeles/user';
import { UtilisateurService } from 'src/app/UserDroits/services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    id:null,
    profils : "",
    dateCreate : "",
    dateFin : "",
    photoU : "",
    email : "",
};

users : User[]=[];
constructor(private service : UtilisateurService, private rout: Router) { }

ngOnInit() {
}

onSubmit(){
  if (this.service.form.valid){
    this.user = this.service.form.value;
    if(this.service.form.value.id==null){
    this.service.addUser(this.user)
    .subscribe((user)=>{
      this.users = [user, ...this.users];
    });
    console.log(this.user);
    this.service.form.reset();

   } else {
    console.log(this.user);
    this.update();
    this.service.form.reset();
  }
  //this.service.initializeFormGroup();
  this.rout.navigateByUrl('/list-users');
  }

}
update(){
  this.service.updateUser(this.user).subscribe(()=>console.log(this.user));
}

}
