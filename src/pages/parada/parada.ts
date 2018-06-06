import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParadaPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parada',
  templateUrl: 'parada.html'
})
export class ParadaPage {
  idLinea: any;

  paradasRoot = 'ParadasPage'
  mapaRoot = 'MapaPage'
  horarioRoot = 'HorarioPage'


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idLinea = {idLinea:this.navParams.get('idlinea')};
  }

}
