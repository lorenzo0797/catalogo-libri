import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Libro } from "../../../../../common/models/libri-dto";
import { LibriService } from "../../../../../services/libri/libri-service";

export const libroResolver: ResolveFn<Libro> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Libro> => {
    const libriService = inject(LibriService);
    return libriService.getDettaglioLibro(route.params['id'], route.params['idE']);
}