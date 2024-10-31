import { Routes } from '@angular/router';
import { ClientsComponent } from '../clients/clients.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { BookingsComponent } from '../bookings/bookings.component';

export const routes: Routes = [
    { path: 'clients', component: ClientsComponent },
    { path: 'hotels', component: HotelsComponent },
    { path: 'bookings', component: BookingsComponent },
];
