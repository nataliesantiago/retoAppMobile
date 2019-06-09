import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular'
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-hobbie',
  templateUrl: './modal-hobbie.component.html',
  styleUrls: ['./modal-hobbie.component.scss'],
})
export class ModalHobbieComponent implements OnInit {
  
  @Input() value;
  id: any;
  hobbies: any[] = [];
  isEmpty: boolean = false;

  constructor(navParams: NavParams, public modalCtrl: ModalController, private dataService: DataService) {
    this.id = navParams['data'].user;
  }

  ngOnInit() {
    this.seeHobbies();
  }

  seeHobbies(){
    this.dataService.getHobbiesUser(this.id).subscribe(
      data => {
        if(data['success']){
          this.hobbies = data['data'].hobbies;
        }
        if(data['data'].hobbies.length === 0){
          this.isEmpty = true;
        }
      }
    );
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
