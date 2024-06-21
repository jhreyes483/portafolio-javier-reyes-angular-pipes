import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public title = 'JavIeR ReYes';

  constructor(
    private primeNGConfig: PrimeNGConfig
  ){}
  ngOnInit(): void {
    this.primeNGConfig.ripple = true
  }

}
