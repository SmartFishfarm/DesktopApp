import { AuthService } from './../../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../providers/get-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private interval = null;

  constructor(
    private getapi: GetApiService,
    private authService: AuthService,
  ) {
    this.getRealtime();
   }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.interval = setInterval(() => {
      this.getRealtime();
    }, 30*1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  
  getRealtime(){
    const companyId = this.authService.getCompnayId();
    this.getapi.getRealtime(companyId).subscribe((res: any) => {
      console.log(res);
    });
  }

  onLoggedout() {
    this.authService.logout();

}
  
  
 
}
