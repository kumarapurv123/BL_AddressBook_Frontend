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

import { signUp } from '../fn/authentication/sign-up';
import { SignUp$Params } from '../fn/authentication/sign-up';


/**
 * Signup
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `signUp()` */
  static readonly SignUpPath = '/auth/v1/signup';

  /**
   * Signup of user.
   *
   * Signup
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUp$Response(params: SignUp$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return signUp(this.http, this.rootUrl, params, context);
  }

  /**
   * Signup of user.
   *
   * Signup
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUp(params: SignUp$Params, context?: HttpContext): Observable<string> {
    return this.signUp$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
