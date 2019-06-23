import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../providers/get-api.service';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  limits: any;

  constructor(
    private getapi: GetApiService,
    private authService: AuthService,

  ) { 
    const companyId = this.authService.getCompanyId();

    this.getapi.getDesktopLimits(companyId).subscribe((res: any) => { 
      this.limits = res;
    });
  }

  ngOnInit() {
  }

}
