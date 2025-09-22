import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ErrorService } from "../../services/error/error-service";

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const errorService = inject(ErrorService);
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            errorService.showError(error.message);
            return throwError(() => error);
        })
    );
}