/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactDto } from '../../models/contact-dto';

export interface GetContactById$Params {
  id: number;
}

export function getContactById(http: HttpClient, rootUrl: string, params: GetContactById$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactDto>> {
  const rb = new RequestBuilder(rootUrl, getContactById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContactDto>;
    })
  );
}

getContactById.PATH = '/api/contacts/{id}';
