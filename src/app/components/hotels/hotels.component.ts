import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Hotel } from '../../../open-api/models';
import { HotelsService } from '../../../open-api/services';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-Hotels',
  standalone: true,
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {

  private _hotelService: HotelsService = inject(HotelsService);

  public hotels: Hotel[] = [];

  constructor(
    private _httpClient: HttpClient
  ) {

  }

  ngOnInit() {
    this._loadData();
  }

  private async _loadData() {
    try {
      this.hotels = await firstValueFrom(this._hotelService.hotelControllerGetAllHotels());

      console.log('Hotels data loaded succesfully:', this.hotels);
    } catch (error) {
      console.error('Error loading Hotels data ' + error);
    }

  }
}
