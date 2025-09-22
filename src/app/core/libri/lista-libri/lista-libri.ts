import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Doc } from '../../../common/models/api-response';
import { BaseComponentDirective } from '../../../services/abstracts/base-component/base-component-directive';
import { LibriService } from '../../../services/libri/libri-service';
import { ErrorService } from '../../../services/error/error-service';

@Component({
  selector: 'app-lista-libri',
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './lista-libri.html',
  styleUrl: './lista-libri.scss'
})
export class ListaLibri extends BaseComponentDirective implements OnInit {

  protected readonly formBuilder = inject(FormBuilder);
  protected readonly libriService = inject(LibriService);
  protected readonly errorService = inject(ErrorService);

  libri: Doc[] = [];
  form!: FormGroup;

  constructor() {
    super();
    this.buildForm();
  }

  ngOnInit(): void {
    if (Object.keys(this.activatedRoute.snapshot.queryParams).length > 0) {
      //Faccio il patchValue diretto perchè il filtro è 1/1 altrimenti andrebbe fatto un mapping
      this.form.patchValue(this.activatedRoute.snapshot.queryParams);
      this.cerca();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      q: [null, Validators.required]
    })
  }

  cerca() {
    this.updateQueryParam(this.form.value);
    this.libriService.getListaLibri(this.form.value).subscribe((res) => {
      this.libri = res.docs;
      console.log(this.libri);
    })
  }

  dettaglio(libro: Doc) {
    this.router.navigate(['dettaglio', libro.key, libro.lending_edition_s ?? 0], { relativeTo: this.activatedRoute.parent })
  }

}
