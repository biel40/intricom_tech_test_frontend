import { Component, inject } from '@angular/core';
import { HotelBookingsService } from '../../../open-api/services';
import { HotelBooking } from '../../../open-api/models';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {

  private _hotelBookingService: HotelBookingsService = inject(HotelBookingsService);

  public bookings: HotelBooking[] = [];

  constructor(
    private _httpClient: HttpClient
  ) {

  }

  ngOnInit() {
    this._loadData();
  }

  private async _loadData() {
    try {
      this.bookings = await firstValueFrom(this._hotelBookingService.hotelBookingControllerGetAllBookings());

      console.log('Bookings hotels data loaded:', this.bookings);
    } catch (error) {
      console.error('Error loading bookings data ' + error);
    }
  }

}
