import { DatosService } from './../../../../datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public datosService: DatosService) { 

  }

  

  ngOnInit(): void {
  }

}
