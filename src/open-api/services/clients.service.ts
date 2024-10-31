/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Client } from '../models/client';
import { clientControllerCreateClient } from '../fn/clients/client-controller-create-client';
import { ClientControllerCreateClient$Params } from '../fn/clients/client-controller-create-client';
import { clientControllerGetAllClients } from '../fn/clients/client-controller-get-all-clients';
import { ClientControllerGetAllClients$Params } from '../fn/clients/client-controller-get-all-clients';
import { clientControllerUpdateClient } from '../fn/clients/client-controller-update-client';
import { ClientControllerUpdateClient$Params } from '../fn/clients/client-controller-update-client';

@Injectable({ providedIn: 'root' })
export class ClientsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `clientControllerGetAllClients()` */
  static readonly ClientControllerGetAllClientsPath = '/clients';

  /**
   * Listar todos los registros de clientes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientControllerGetAllClients()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientControllerGetAllClients$Response(params?: ClientControllerGetAllClients$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Client>>> {
    return clientControllerGetAllClients(this.http, this.rootUrl, params, context);
  }

  /**
   * Listar todos los registros de clientes.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientControllerGetAllClients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientControllerGetAllClients(params?: ClientControllerGetAllClients$Params, context?: HttpContext): Observable<Array<Client>> {
    return this.clientControllerGetAllClients$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Client>>): Array<Client> => r.body)
    );
  }

  /** Path part for operation `clientControllerCreateClient()` */
  static readonly ClientControllerCreateClientPath = '/clients';

  /**
   * Crear un nuevo cliente.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientControllerCreateClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientControllerCreateClient$Response(params: ClientControllerCreateClient$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return clientControllerCreateClient(this.http, this.rootUrl, params, context);
  }

  /**
   * Crear un nuevo cliente.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientControllerCreateClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientControllerCreateClient(params: ClientControllerCreateClient$Params, context?: HttpContext): Observable<void> {
    return this.clientControllerCreateClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `clientControllerUpdateClient()` */
  static readonly ClientControllerUpdateClientPath = '/clients/{id}';

  /**
   * Modificar un cliente ya existente.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientControllerUpdateClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientControllerUpdateClient$Response(params: ClientControllerUpdateClient$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return clientControllerUpdateClient(this.http, this.rootUrl, params, context);
  }

  /**
   * Modificar un cliente ya existente.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientControllerUpdateClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientControllerUpdateClient(params: ClientControllerUpdateClient$Params, context?: HttpContext): Observable<void> {
    return this.clientControllerUpdateClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
