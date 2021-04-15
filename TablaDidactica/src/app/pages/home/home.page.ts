import { Component, OnInit } from '@angular/core';
import { AudioManagerService } from 'src/app/services/AudioManager/audio-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public audioManager: AudioManagerService) {}

  ngOnInit(){
    this.audioManager.cargarAudios();
  }

  PlaySound(){
    this.audioManager.reproducirAudio("epaaa", 5);
  }

}
