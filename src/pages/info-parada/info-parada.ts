import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApiRestProvider } from "../../providers/api-rest/api-rest";

/**
 * Generated class for the InfoParadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-parada',
  templateUrl: 'info-parada.html',
})
export class InfoParadaPage {

 infoParada: any;

  constructor(public navCtrl: NavController,public apiRest: ApiRestProvider, public navParams: NavParams,public viewCtrl: ViewController) {
    apiRest.getInfoParada(17).subscribe(
      (data)=>{
        this.infoParada = data;
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoParadaPage');
  }

  closeInfo() {
    this.viewCtrl.dismiss();
  }

}
