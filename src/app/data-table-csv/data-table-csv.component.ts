import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table-csv',
  templateUrl: './data-table-csv.component.html',
  styleUrls: ['./data-table-csv.component.css']
})
export class DataTableCsvComponent implements OnInit {

  constructor() { }

  public data = [
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
];
 
  title = 'angulardatatables';
  dtOptions: any = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
}
}
