import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(title: string, text: string, btnName: string = "Sil"){
    return Swal.fire({
      title: title,
      text: text,
      showCloseButton: true,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: btnName,
      cancelButtonText: "Vazgeç"
    })
  }
}
