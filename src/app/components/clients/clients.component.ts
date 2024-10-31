import { Component, inject } from '@angular/core';
import { ClientsService } from '../../../open-api/services';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Client } from '../../../open-api/models';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.component.html',
  imports: [

  ],
  providers: [

  ],
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

    private _clientService: ClientsService = inject(ClientsService);
    
    public clients: Client[] = [];

    constructor(
        private _httpClient: HttpClient
    ) {

    }

    ngOnInit() {
        this._loadData();
    }

    private async _loadData() {
        try {
            this.clients = await firstValueFrom(this._clientService.clientControllerGetAllClients());

            console.log('Clients data loaded:', this.clients);
        } catch(error) {
            console.error('Error loading clients data ' + error);
        }
        
    }
}
