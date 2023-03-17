import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsPopupService {

  constructor(private toastr : ToastrService) { }


  showSuccess(message : any) {
    this.toastr.success(message, 'Success',{ toastClass: 'toast-success' });
  }

  showError(message : any) {
    this.toastr.error(message, 'Error',{ toastClass: 'toast-error' });
  }
}
