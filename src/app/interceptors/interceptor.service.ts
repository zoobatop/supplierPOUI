import { HttpHandlerFn, HttpRequest }from '@angular/common/http';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const username:string = 'rafael.geres';
  const password:string = '123';
  const encodedCredentials: string = btoa(`${username}:${password}`);

  if ( req.method === 'GET') {
    // Clone the request to add the authentication header.
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Basic ${encodedCredentials}`),
    });
    return next(newReq);
  }

  return next(req);
}
