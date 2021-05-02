import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioManagerService {

  
  constructor(private _nativeAudio: NativeAudio) { }

  private preload(key: string, asset: string) {
    this._nativeAudio.preloadComplex(key, asset, 1, 1, 0)
      .then(() => {
        console.log(key, 'cargado con exito');
      })
      .catch(err => {
        console.log('Error al cargar', key, 'en ruta', asset, 'error:', err);
      });
  }

  private play(key: string) {
    this._nativeAudio.play(key).then((res) => {
      console.log('Reproduzco', key, res);
    }).catch(err => {
      console.log('Error al reproducir', err, 'en', key);
    });
  }

  private stop(key: string) {
    this._nativeAudio.stop(key).then((res) => {
      console.log('Detengo', key, res);
    }).catch(err => {
      console.log('Error al parar', err, 'en', key);
    });
  }

  public cargarAudiosEs() {
    //Animales
    this.preload('ballena_es', 'assets/sonidos/es/animales/ballena.mp3');
    this.preload('cocodrillo_es', 'assets/sonidos/es/animales/cocodrillo.mp3');
    this.preload('elefante_es', 'assets/sonidos/es/animales/elefante.mp3');
    this.preload('jirafa_es', 'assets/sonidos/es/animales/jirafa.mp3');
    this.preload('leon_es', 'assets/sonidos/es/animales/leon.mp3');
    //Colores
    this.preload('amarillo_es', 'assets/sonidos/es/colores/amarillo.mp3');
    this.preload('azul_es', 'assets/sonidos/es/colores/azul.mp3');
    this.preload('naranja_es', 'assets/sonidos/es/colores/naranja.mp3');
    this.preload('rojo_es', 'assets/sonidos/es/colores/rojo.mp3');
    this.preload('verde_es', 'assets/sonidos/es/colores/verde.mp3');
    //Numeros
    this.preload('uno_es', 'assets/sonidos/es/numeros/uno.mp3');
    this.preload('dos_es', 'assets/sonidos/es/numeros/dos.mp3');
    this.preload('tres_es', 'assets/sonidos/es/numeros/tres.mp3');
    this.preload('cuatro_es', 'assets/sonidos/es/numeros/cuatro.mp3');
    this.preload('cinco_es', 'assets/sonidos/es/numeros/cinco.mp3');
  }

  public cargarAudiosEn() {

    //Animales
    this.preload('ballena_en', 'assets/sonidos/en/animales/whale.mp3');
    this.preload('cocodrillo_en', 'assets/sonidos/enes/animales/aligator.mp3');
    this.preload('elefante_en', 'assets/sonidos/en/animales/elephant.mp3');
    this.preload('jirafa_en', 'assets/sonidos/en/animales/giraffe.mp3');
    this.preload('leon_en', 'assets/sonidos/en/animales/lion.mp3');
    //Colores
    this.preload('amarillo_en', 'assets/sonidos/en/colores/yellow.mp3');
    this.preload('azul_en', 'assets/sonidos/en/colores/blue.mp3');
    this.preload('naranja_en', 'assets/sonidos/en/colores/orange.mp3');
    this.preload('rojo_en', 'assets/sonidos/en/colores/red.mp3');
    this.preload('verde_en', 'assets/sonidos/en/colores/green.mp3');
    //Numeros
    this.preload('uno_en', 'assets/sonidos/en/numeros/one.mp3');
    this.preload('dos_en', 'assets/sonidos/en/numeros/two.mp3');
    this.preload('tres_en', 'assets/sonidos/en/numeros/three.mp3');
    this.preload('cuatro_en', 'assets/sonidos/en/numeros/four.mp3');
    this.preload('cinco_en', 'assets/sonidos/en/numeros/five.mp3');
  }

  public cargarAudiosBr() {
    //Animales
    this.preload('ballena_br', 'assets/sonidos/br/animales/baleia.mp3');
    this.preload('cocodrillo_br', 'assets/sonidos/br/animales/jacare.mp3');
    this.preload('elefante_br', 'assets/sonidos/br/animales/elefante.mp3');
    this.preload('jirafa_br', 'assets/sonidos/br/animales/jirafa.mp3');
    this.preload('leon_br', 'assets/sonidos/br/animales/leon.mp3');
    //Colores
    this.preload('amarillo_br', 'assets/sonidos/br/colores/amarelo.mp3');
    this.preload('azul_br', 'assets/sonidos/br/colores/azul.mp3');
    this.preload('naranja_pbrt', 'assets/sonidos/br/colores/naranja.mp3');
    this.preload('rojo_br', 'assets/sonidos/br/colores/rojo.mp3');
    this.preload('verde_br', 'assets/sonidos/br/colores/verde.mp3');
    //Numeros
    this.preload('uno_br', 'assets/sonidos/br/numeros/um.mp3');
    this.preload('dos_br', 'assets/sonidos/br/numeros/dois.mp3');
    this.preload('tres_br', 'assets/sonidos/br/numeros/tres.mp3');
    this.preload('cuatro_br', 'assets/sonidos/br/numeros/cuatro.mp3');
    this.preload('cinco_br', 'assets/sonidos/br/numeros/cinco.mp3');
  }

  public reproducirAudio(key: string, delay: number) {
    this.play(key);
    setTimeout(() => { this.stop(key); }, delay * 1000);
  }
}
