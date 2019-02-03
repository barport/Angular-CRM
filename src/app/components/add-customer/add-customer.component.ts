import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from '../../models/customer'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  notes: string = '';


  constructor(private _title: Title) { }


  ngOnInit(): void {
    this._title.setTitle('PORTCAPITAL CRM | Add Customer');
    this.headerTitle = 'Add Customer';
    this.headerIcon = "fas fa-user-plus";
  }

  onSubmit({ value, valid }: { value: Customer, valid: boolean }): void {
    console.log(value);
    console.log(valid);
  }

}
