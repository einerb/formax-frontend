import { environment } from '../../environments/environment';

export const API_KEY =
  '?api_key=ZxwNWzyogRMMgDNHeGNbaBQFXuGCbv4m7lPPlYct91sO3DUNkw';

export const Endpoint = {
  PRODUCT: {
    BASE: environment.api.base + 'products' + API_KEY,
    DELETE: environment.api.base + 'products/remove',
  },
  ORDER: {
    BASE: environment.api.base + 'orders' + API_KEY,
    DETAILS: environment.api.base + 'orders',
    PRODUCTSBYORDER: environment.api.base + 'orders/products',
    DELETE: environment.api.base + 'orders/remove',
  },
};
