import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';

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


  constructor(
    private _title: Title,
    private _customersService: CustomersService,
    private _router: Router

  ) { }


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
