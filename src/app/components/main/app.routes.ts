import { Routes } from '@angular/router';
import { ClientsComponent } from '../clients/clients.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { ClientFormComponent } from '../clients/client-form/client-form.component';
import { HotelFormComponent } from '../hotels/hotel-form/hotel-form.component';

export const routes: Routes = [
    { path: 'clients', component: ClientsComponent, children: [
        { path: 'new', component: ClientFormComponent }, 
        { path: 'edit/:id', component: ClientFormComponent }
    ]},
    { path: 'hotels', component: HotelsComponent, children: [
        { path: 'new', component: HotelFormComponent }, 
        { path: 'edit/:id', component: HotelFormComponent }
    ]},
    { path: 'bookings', component: BookingsComponent },
];
