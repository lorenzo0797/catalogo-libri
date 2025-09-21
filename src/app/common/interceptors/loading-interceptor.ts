import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { LoaderService } from "../../services/loader/loader-service";

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const loaderService = inject(LoaderService);
    loaderService.startLoading();
    return next(req).pipe(
        finalize(() => loaderService.endLoading())
    );
}