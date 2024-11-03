import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../../../open-api/models';
import { FormsModule } from '@angular/forms';   
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ClientsService } from '../../../../open-api/services';

@Component({
  selector: 'app-client-form',
  standalone: true,
  templateUrl: './client-form.component.html',
  imports: [
    FormsModule
  ],
  providers: [

  ],
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {

    private _clientService: ClientsService = inject(ClientsService);

    public isCreating: boolean = true;

    public client: Client = {
        id: '0',
        name: '',
        address: '',
        phone: '',
        createdDate: new Date().toUTCString(),
        hotelBookings: []
    }

    constructor(
        private _httpClient: HttpClient,
        private _router: Router
    ) {

    }

    ngOnInit() {
        if (this.client.id !== '0') {
            this.isCreating = false
        }
    }

    public async onSubmit() : Promise<void> {   
        try {
            alert('Client data:' + this.client.name + ' ' + this.client.address + ' ' + this.client.phone + ' ' + this.client.createdDate);

            if (this.isCreating) {
                // Create new client
                let responseFromApi = await firstValueFrom(this._clientService.clientControllerCreateClient({
                    body: {
                        name: this.client.name,
                        address: this.client.address,
                        phone: this.client.phone,
                        createdDate: this.client.createdDate,
                        hotelBookings: []
                    }
                }));

                alert('Cliente nuevo añadido con éxito!');

                this._router.navigate(['/clients']);
            } else {
                // Update existing client...
            }

            this._router.navigate(['/clients']);
        } catch (error) {
            console.error('Error saving client data ' + error);
        }
    }

    public async onCancel() : Promise<void> {
        this._router.navigate(['/clients']);
    }
}
