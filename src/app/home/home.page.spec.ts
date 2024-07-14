import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lampIcon: string = 'bulb'; // Ikon lampu default
  lampColor: string = 'red'; // Warna lampu default

  constructor() {}

  // Tambahkan metode untuk mengubah lampu berdasarkan perintah
  changeLamp(command: string) {
    switch(command) {
      case 'Matikan Lampu':
        this.lampIcon = 'bulb'; // Ikon default
        this.lampColor = 'grey'; // Warna lampu mati
        break;
      case 'Nyalakan Lampu Merah':
        this.lampIcon = 'bulb'; // Ikon lampu
        this.lampColor = 'red'; // Warna lampu merah
        break;
      case 'Nyalakan Lampu Hijau':
        this.lampIcon = 'bulb'; // Ikon lampu
        this.lampColor = 'green'; // Warna lampu hijau
        break;
      case 'Nyalakan Lampu Biru':
        this.lampIcon = 'bulb'; // Ikon lampu
        this.lampColor = 'blue'; // Warna lampu biru
        break;
      default:
        this.lampIcon = 'bulb'; // Ikon default
        this.lampColor = 'red'; // Warna lampu default
    }
  }
}
