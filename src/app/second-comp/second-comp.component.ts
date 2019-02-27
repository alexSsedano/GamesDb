import { Component, OnInit } from '@angular/core';
import {DatosService} from '../datos.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  elements = [];
  constructor(private datos: DatosService) { 
    this.elements=datos.getDatos();
  }
  datito = 'miDato';
 
  name="";
  hero = {
    name : "megapoIIon"
    
  }
  
  sayHi(){
    console.log("hi");
  }

  ngOnInit() {
  }

  

}
