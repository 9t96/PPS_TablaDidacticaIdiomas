import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AudioManagerService } from 'src/app/services/AudioManager/audio-manager.service';
import { eTema } from 'src/app/shared/clases/eTema';

const tAnimales = [
  {
    tipo: eTema.ANIMALES,
    nombre: "Jirafa",
    img_src: "../../assets/images/animales/giraffe.svg",
    sound_id: "jirafa",
    background: "red"
  },
  {
    tipo: eTema.ANIMALES,
    nombre: "Leon",
    img_src: "../../assets/images/animales/lion.svg",
    sound_id: "leon",
    background: "red"
  },
  {
    tipo: eTema.ANIMALES,
    nombre: "Ballena",
    img_src: "../../assets/images/animales/whale.svg",
    sound_id: "ballena",
    background: "red"
  },
  {
    tipo: eTema.ANIMALES ,
    nombre: "Elefante",
    img_src: "../../assets/images/animales/elephant.svg",
    sound_id: "jirafa",
    background: "red"
  },
  {
    tipo: eTema.ANIMALES,
    nombre: "Cocodrillo",
    img_src: "../../assets/images/animales/cocodrile.svg",
    sound_id: "cocodrillo",
    background: "red"
  }
]

const tColores = [
  {
    tipo: eTema.COLORES,
    nombre: "Rojo",
    img_src: "../../assets/images/colores/red.svg",
    sound_id: "rojo",
    background: "red"
  },
  {
    tipo: eTema.COLORES,
    nombre: "Azul",
    img_src: "../../assets/images/colores/blue.svg",
    sound_id: "azul",
    background: "blue"
  },
  {
    tipo: eTema.COLORES,
    nombre: "Verde",
    img_src: "../../assets/images/colores/green.svg",
    sound_id: "verde",
    background: "green"
  },
  {
    tipo: eTema.COLORES ,
    nombre: "amarillo",
    img_src: "../../assets/images/colores/yellow.svg",
    sound_id: "amarillo",
    background: "yellow"
  },
  {
    tipo: eTema.COLORES,
    nombre: "naranja",
    img_src: "../../assets/images/colores/orange.svg",
    sound_id: "naranja",
    background: "orange"
  }
]

const tNumeros = [
  {
    tipo: eTema.NUMEROS,
    nombre: "Rojo",
    img_src: "../../assets/images/numeros/one.svg",
    sound_id: "uno",
    background: "red"
  },
  {
    tipo: eTema.NUMEROS,
    nombre: "Azul",
    img_src: "../../assets/images/numeros/two.svg",
    sound_id: "dos",
    background: "red"
  },
  {
    tipo: eTema.NUMEROS,
    nombre: "Verde",
    img_src: "../../assets/images/numeros/three.svg",
    sound_id: "tres",
    background: "red"
  },
  {
    tipo: eTema.NUMEROS ,
    nombre: "amarillo",
    img_src: "../../assets/images/numeros/four.svg",
    sound_id: "cuatro",
    background: "red"
  },
  {
    tipo: eTema.NUMEROS,
    nombre: "naranja",
    img_src: "../../assets/images/numeros/five.svg",
    sound_id: "cinco",
    background: "red"
  }
]



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  language: any;
  theme: any;
  selectedLang: string;
  tema: Array<any>;

  constructor(public audioManager: AudioManagerService, public alertController: AlertController) {
    this.language = {
      src:"../../../assets/images/spain.png",
      id: "es"
    }

    this.theme = {
      src: "../../../assets/images/cube-icon.png",
      id: "cubes"
    }
  }

  ngOnInit(){
    this.audioManager.cargarAudiosEs();
    this.audioManager.cargarAudiosEn();
    this.audioManager.cargarAudiosBr();
    this.tema = tNumeros;
  }

  PlaySound(sound_id: string){
    this.audioManager.reproducirAudio(sound_id + "_"+this.language.id, 3);
  }

  CambiarIdioma(lang: string){
    switch (lang) {
      case "es":
       this.language = {
          src:"../../../assets/images/spain.png",
          id: "es"
        }
        break;
    case "en":
      this.language = {
          src:"../../../assets/images/united-kingdom.png",
          id: "en"
        }
        break;
    case "br":
      this.language = {
          src:"../../../assets/images/portugal.png",
          id: "br"
        }
        break;
    }
  }

  CambiarTema(tema: eTema){
    switch (tema) {
      case eTema.ANIMALES:
        this.tema = tAnimales
        break;
      case eTema.COLORES:
        this.tema = tColores
        break;
      case eTema.NUMEROS:
        this.tema = tNumeros
        break;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
