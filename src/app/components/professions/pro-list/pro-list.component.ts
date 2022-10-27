import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { ProfessionModel } from '../models/profession.model';


@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css']
})
export class ProListComponent implements OnInit, OnChanges {

  @Input() pageCount: number = 0;
  search: string = "";
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() getEvent = new EventEmitter<number>();
  @Output() getListWithPageNumber = new EventEmitter<number>();
  @Input() professions: ProfessionModel[] = [];
  constructor(
    private _swal: SwalService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.professions = changes["professions"].currentValue;
  }

  ngOnInit(): void {        
  }

  delete(id: number){
    let meslek = this.professions.filter(p=> p.id == id)[0];
    this._swal.callSwal("Sil?", `${meslek.name} meslek bilgisini silmek istiyor musunuz?`).then((res)=> {
      if (res.isConfirmed)
        this.deleteEvent.emit(id);
    })
  }

  get(id: number){
    this.getEvent.emit(id);
  }

  setPageNumber(pageNumber: number){
    this.getListWithPageNumber.emit(pageNumber);
  }
}
