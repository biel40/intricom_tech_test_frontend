import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, Hotel } from '../../../../open-api/models';
import { FormsModule } from '@angular/forms';   
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HotelsService } from '../../../../open-api/services';

@Component({
  selector: 'app-hotel-form',
  standalone: true,
  templateUrl: './hotel-form.component.html',
  imports: [
    FormsModule
  ],
  providers: [

  ],
  styleUrl: './hotel-form.component.scss'
})
export class HotelFormComponent {

    private _hotelService: HotelsService = inject(HotelsService);

    public isCreating: boolean = true;

    public hotel: Hotel = {
        id: '0',
        name: '',
        address: '',
        createdDate: new Date().toUTCString(),
        hotelBookings: []
    }

    constructor(
        private _httpClient: HttpClient,
        private _router: Router
    ) {

    }

    ngOnInit() {
        if (this.hotel.id !== '0') {
            this.isCreating = false
        }
    }

    public async onSubmit() : Promise<void> {   
        try {
            alert('Client data:' + this.hotel.name + ' ' + this.hotel.address + ' ' + ' ' + this.hotel.createdDate);

            if (this.isCreating) {
                // Create new client
                let responseFromApi = await firstValueFrom(this._hotelService.hotelControllerCreateHotel({
                    body: {
                        name: this.hotel.name,
                        address: this.hotel.address,
                        createdDate: this.hotel.createdDate,
                        hotelBookings: []
                    }
                }));

                console.log('Response from API:', responseFromApi);

                alert('Hotel nuevo añadido con éxito!');
            } else {
                // Update existing client...
            }

            this._router.navigate(['/hotels']);
        } catch (error) {
            console.error('Error saving hotel data ' + error);
        }
    }

    public async onCancel() : Promise<void> {
        this._router.navigate(['/hotels']);
    }
}
