import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectorService } from '../selector.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public night = false;
  public style ;
  

  constructor( private gamesApi: SelectorService, private activatedRoute: ActivatedRoute) { }
  cambiarColor() {
    if(this.night == false){
      this.night = true;
      console.log(this.night);
      this.style = {
        backgroundColor: '#222222'
      }
    }else{
      this.night = false;
      console.log(this.night);
      this.style = {
        backgroundColor: 'white'
      }
    }
  }

  ngOnInit() {
    var url = this.activatedRoute.snapshot['_routerState'].url;
  
    switch (url) {
      case '/ps4':
       this.gamesApi.getPs4();
        break;
      case '/xbox':
      this.gamesApi.getXbox();
        break;
      case '/pc':
      this.gamesApi.getPc();
        break;
      default:
      this.gamesApi.getPs4();
    }
    
  }
}
