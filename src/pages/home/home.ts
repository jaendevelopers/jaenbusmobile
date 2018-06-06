import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiRestProvider } from '../../providers/api-rest/api-rest';
import { ParadaPage } from '../parada/parada';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lineas: any
  navbarcolor: string = "primary"
  constructor(public navCtrl: NavController, public apirest:ApiRestProvider) {

  }
  ionViewDidLoad() {
    this.apirest.getLines().subscribe(
      (data)=>{
        this.lineas = data;
      }
    )
  }
  goToParada(idlinea) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    let param = {idlinea: idlinea}
    console.log(idlinea)
    this.navCtrl.push(ParadaPage, param);
  }
}
