import { Component } from '@angular/core';
import { DataService } from './../services/data.service';
import * as moment from 'moment';
import swal from 'sweetalert';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  userName: any;
  userLastName: any;
  documentId: any;
  password: any;
  birthDay: any;

  constructor(private dataService: DataService) {}

  create(){
    let newDate = moment(this.birthDay).format('DD-MM-YYYY');
    const dataUser = {
      "firstName": this.userName,
      "lastName": this.userLastName,
      "documentId": this.documentId,
      "password": this.password,
      "birthDay": newDate,
      "hobbies": []
    }
    this.dataService.createUser(dataUser).subscribe(
      data => {
        if(data['success']){
          swal("","Usuario creado con exito", "success")
        }else{
            swal("", "Por favor ingrese todos los campos del formulario", "error")
        }
      }
    );
  }

}
