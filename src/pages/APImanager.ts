import { APIMethods } from '../API/APImethods';
import { APIRequestContext } from '@playwright/test';

export class APImanager {
  readonly apiMethods: APIMethods;

  constructor(request: APIRequestContext) {
    this.apiMethods = new APIMethods(request);
  }
}
