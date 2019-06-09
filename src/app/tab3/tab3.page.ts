import { Component } from '@angular/core';
import { DataService } from './../services/data.service';
import swal from 'sweetalert';
import { ModalController } from '@ionic/angular';
import { ModalHobbieComponent } from './components/modal-hobbie/modal-hobbie.component';
import { ModalAllHobbiesComponent } from './components/modal-all-hobbies/modal-all-hobbies.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userName: any;
  userLastName: any;
  users: any[] = [];

  constructor(private dataService: DataService, public modalController: ModalController) {
    this.readUsers();
  }

  search(){
    const dataUser = {
      "firstName": this.userName,
      "lastName": this.userLastName
    }
    this.dataService.searchUser(dataUser).subscribe(
      data => {
        if(data['success']){
          this.users = data['data'];
        }
        if(data['data'].length === 0){
          swal("No se encontraron coincidencias", "Por favor ingrese un nombre y apellido validos", "error")
      }
      }
    );
  }

  readUsers(){
    this.dataService.getUsers().subscribe(
      data => {
        this.users = data['data'];
      }
    );
  }

  async deleteUser(id){
    const willDelete = await swal({
      text: "¿Está seguro que desea eliminar el usuario? ",
      icon: "warning",
      dangerMode: true,
    });
      
    if (willDelete) {
        await this.dataService.deleteUser(id).subscribe(
          data => {
            if(data['success']){
              swal("Usuario eliminado con exito")
              this.users = this.users.filter(user => {
                return user._id !== id;
              });
            }else{
                swal("El usuario no fue eliminado con exito")
            }
          }
        );
    }
  }

  async seeHobbies(id) {
    const modal = await this.modalController.create({
      component: ModalHobbieComponent,
      componentProps: { user: id }
    });
    return await modal.present();
  }

  async selectHobbies(){
    const modal = await this.modalController.create({
      component: ModalAllHobbiesComponent
    });
    return await modal.present();
  }

}
