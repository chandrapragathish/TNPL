import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-area-wise',
  templateUrl: './area-wise.component.html',
  styleUrls: ['./area-wise.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AreaWiseComponent implements OnInit {

  public dataa = [
    { name: 'Ajay', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
  ];

  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      processing: true
    };
  }
}
