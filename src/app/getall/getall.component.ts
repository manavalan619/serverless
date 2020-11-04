import { Component, OnInit } from '@angular/core';

import { GetallService } from './getall.service';



@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.scss'],
})
export class GetallComponent implements OnInit {

columnDefs = [
{headerName: 'Name', field: 'Name'},
{headerName: 'Email', field: 'Email'}];
one = {
   Name: '',
   Email: ''
};
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(
private getallService: GetallService
  ) { }

  ngOnInit() {
    this.GpGetAllValues();
  }

onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}
GpGetAllValues() {
 this.getallService.GpGetAllValues()
  .subscribe(
    data => {
       console.log('successfully get all data --- ', data);
       this.rowData = data;
    },
    error => {
       console.log('cannot able to get all data --- ', error);
    }
    );
}

}