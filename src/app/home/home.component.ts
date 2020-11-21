import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imgLink = 'https://www.google.com/maps/place/Masjid+Anjuman/@28.6904083,77.3091531,3a,86.9y/data=!3m8!1e2!3m6!1sAF1QipPKiP0iq9J1pghGvGIpvq8xf3YvduMXPfmk7qlL!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPKiP0iq9J1pghGvGIpvq8xf3YvduMXPfmk7qlL%3Dw360-h212-k-no!7i1080!8i637!4m5!3m4!1s0x390cfb6e5513c321:0x30dfe89ceeb11e84!8m2!3d28.6903299!4d77.3092161';

  ngOnInit(): void {
  }

}
