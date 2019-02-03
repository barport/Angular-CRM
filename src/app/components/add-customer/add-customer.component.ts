import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;

  constructor(private _title: Title) { }


  ngOnInit() {
    this._title.setTitle('PORTCAPITAL CRM | Add Customer');
    this.headerTitle = 'Add Customer';
    this.headerIcon = "fas fa-user-plus";
  }

}
