/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppPage } from '../../../e2e/src/app.po';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  page;
  perpage;
  data;
  total;
  totalpages;

  constructor(private api: ApiService) {this.buscarTodos();}
  buscarTodos(page=1){
    this.api.buscarUsuarios(page).subscribe(usuarios=>{
      console.log(usuarios);
      this.page = usuarios['page'];
      this.perpage = usuarios['perpage'];
      this.data = usuarios['data'];
      this.total = usuarios['total'];
      this.totalpages = usuarios['totalpages'];
    });
  }

}
