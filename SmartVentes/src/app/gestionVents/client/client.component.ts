import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { Client } from '../GVModeles/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: Client = {
      id:null,
      nomC : "",
      prenomC : "",
      statutC : "",
      photoC : "",
      telC : "",
      email : "",
      adresseC : "",
      villeC : "",
  };

  clients : Client[]=[];
  constructor(private service : ClientService, private rout: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.service.form.valid){
      this.client = this.service.form.value;
      if(this.service.form.value.id==null){
      this.service.addClient(this.client)
      .subscribe((client)=>{
        this.clients = [client, ...this.clients];
      });
      console.log(this.client);
      this.service.form.reset();

     } else {
      console.log(this.client);
      this.update();
      this.service.form.reset();
    }
    //this.service.initializeFormGroup();
    this.rout.navigateByUrl('/list-client');
    }

  }
  update(){
    this.service.updateClient(this.client).subscribe(()=>console.log(this.client));
  }

}
