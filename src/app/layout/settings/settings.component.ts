import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../providers/get-api.service';
import { AuthService } from '../../providers/auth.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  limits: any;
  closeResult: string;

  constructor(
    private getapi: GetApiService,
    private authService: AuthService,
    private modalService: NgbModal,


  ) { 
    const companyId = this.authService.getCompanyId();

    this.getapi.getDesktopLimits(companyId).subscribe((res: any) => { 
      this.limits = res;
    });
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
  }



}
