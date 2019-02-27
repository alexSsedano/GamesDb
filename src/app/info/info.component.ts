import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectorService } from '../selector.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private gamesApi: SelectorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
