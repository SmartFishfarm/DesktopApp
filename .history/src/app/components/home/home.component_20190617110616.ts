import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../providers/get-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private getapi: GetApiService,

  ) { }

  ngOnInit() {
  }

  /*
  getRealtime(){
    this.getapi.getRealtime(companyId).subscribe((res: any) => {
      console.log(res);
    });
  }
  */
 
}
