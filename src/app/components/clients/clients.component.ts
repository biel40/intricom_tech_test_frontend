import { Component, inject } from '@angular/core';
import { ClientsService } from '../../../open-api/services';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Client } from '../../../open-api/models';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.component.html',
  imports: [
    RouterOutlet
  ],
  providers: [

  ],
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

    private _clientService: ClientsService = inject(ClientsService);
    
    public clients: Client[] = [];

    constructor(
        private _httpClient: HttpClient,
        private _router: Router
    ) {

    }

    ngOnInit() {
        this._loadData();

        this._router.events.subscribe(() => {
            this._loadData();
        });
    }

    private async _loadData() {
        try {
            this.clients = await firstValueFrom(this._clientService.clientControllerGetAllClients());

            console.log('Clients data loaded:', this.clients);
        } catch(error) {
            console.error('Error loading clients data ' + error);
        }
    }

    public async addClient() : Promise<void> {
        this._router.navigate(['/clients/new']);
    }

    public async editClient(id: string) : Promise<void> {
        this._router.navigate(['/clients/edit/' + id]);
    }

    onDestroy() {
        console.log('Clients component destroyed');
    }
}
