import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { OrderService } from '../orders/services/order.service';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { Order } from '../orders/models/order';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),OrderService,provideHttpClient(),provideClientHydration()]
};
