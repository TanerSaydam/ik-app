import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectModel } from 'src/app/models/select.model';
import { GenericSelectComponent } from '../generic/generic-select/generic-select.component';
import { ProfessionModel } from '../professions/models/profession.model';
import { EmployeeModel } from './models/employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: EmployeeModel[] = [];
  professions: ProfessionModel[] = [];
  selectModels: SelectModel[] =  [];
  @ViewChild("addForm") addForm: NgForm;
  @ViewChild(GenericSelectComponent) private selectedComponent: GenericSelectComponent;
  constructor(
    private _emp: EmployeeService    
  ) { }

  ngOnInit(): void {
    this.getList();
    this.getListProfession();
  }

  getList(){
    this._emp.getList((res)=> this.employees = res);
  }

  getListProfession(){
    this._emp.getListProfession((res)=> {
      this.selectModels = [];
      this.professions = res
      this.professions.forEach(element => {
        let model = {id: element.id, value: element.name};
        this.selectModels.push(model);
      });
    });
  }

  add(){
    //console.log(this.addForm.value);
    console.log(this.selectedComponent.selected);
    
  }

}
