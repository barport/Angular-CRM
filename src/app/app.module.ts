import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CleanNamePipe } from './pipes/clean-name.pipe';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    ContactsComponent,
    CustomersComponent,
    PageNotFoundComponent,
    CleanNamePipe,
    PageHeaderComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
