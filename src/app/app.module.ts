import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { FaqComponent } from './faq/faq.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { WashingPlanComponent } from './washing-plan/washing-plan.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProcessComponent } from './process/process.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApointmentComponent } from './apointment/apointment.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { EmployeeComponent } from './employee/employee.component';
import { PlacesComponent } from './places/places.component';
import { PlaceComponent } from './place/place.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NotFoundComponent,
    ServerErrorComponent,
    FaqComponent,
    MapComponent,
    ContactComponent,
    ComingSoonComponent,
    MaintenanceComponent,
    WashingPlanComponent,
    FeedbackComponent,
    ProcessComponent,
    AboutUsComponent,
    ApointmentComponent,
    TestimonialComponent,
    EmployeeComponent,
    PlacesComponent,
    PlaceComponent,
    HomeSliderComponent,
    ServicesComponent,
    HomeComponent,
    LocationsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
