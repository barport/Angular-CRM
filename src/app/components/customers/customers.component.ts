import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.headerTitle = "Customers";
    this.headerIcon = "fas fa-user";
    this.titleService.setTitle('Company CRM | Customers');

  }

}
