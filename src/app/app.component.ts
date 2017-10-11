import {Component, OnInit} from '@angular/core';
import { Mural} from './shared/model/mural.model';
import { MuralsService} from './shared/services/murals.service';
import {Observable} from "rxjs/Observable";
import {log} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  murals: Observable<Mural[]>;

  constructor(private muralsService: MuralsService) {

  }

  ngOnInit(): void {
    this.murals = this.muralsService.getMurals();
  }
}
