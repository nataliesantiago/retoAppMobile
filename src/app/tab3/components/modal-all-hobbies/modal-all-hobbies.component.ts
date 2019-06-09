import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-all-hobbies',
  templateUrl: './modal-all-hobbies.component.html',
  styleUrls: ['./modal-all-hobbies.component.scss'],
})
export class ModalAllHobbiesComponent implements OnInit {

  allHobbies: any[] = [];

  constructor(public modalCtrl: ModalController, private dataService: DataService) { }

  ngOnInit() {
    this.getAllHobbies();
  }

  getAllHobbies(){
    this.dataService.getHobbies().subscribe(
      data => {
        if(data['success']){
          this.allHobbies = data['data'];
          console.log(this.allHobbies)
        }
      }
    );
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
