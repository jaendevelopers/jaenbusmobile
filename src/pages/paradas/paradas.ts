import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ApiRestProvider } from '../../providers/api-rest/api-rest';
import { InfoParadaPage } from "../info-parada/info-parada";

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paradas',
  templateUrl: 'paradas.html',
})
export class ParadasPage {
  paradas: any;
  idLinea: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiRest: ApiRestProvider,
    public modalCtrl: ModalController) {
    this.idLinea = this.navParams.get('idLinea');
    this.apiRest.getParadas(this.idLinea).subscribe(
      (data) => {
        console.log(data)
        this.paradas = data;
      }
    )
  }

  abrirInfoParada(iDParada:any) {
    let infoParadaModal = this.modalCtrl.create(InfoParadaPage, {iDParada: iDParada});
    infoParadaModal.present();
  }
  
  ionViewDidLoad() {
    console.log(this.navParams)
    console.log('ionViewDidLoad InfoPage: ' + this.navParams.get("idLinea"));
  }

}
