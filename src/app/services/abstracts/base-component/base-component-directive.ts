import { Location } from '@angular/common';
import { Directive, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[appBaseComponentDirective]'
})
export abstract class BaseComponentDirective {

  protected readonly router = inject(Router);
  protected readonly location = inject(Location);
  protected readonly activatedRoute = inject(ActivatedRoute);

  goBack() {
    this.location.back()
  }

  updateQueryParam(qp: any) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: qp,
      queryParamsHandling: 'merge'
    }
    )
  }

}
