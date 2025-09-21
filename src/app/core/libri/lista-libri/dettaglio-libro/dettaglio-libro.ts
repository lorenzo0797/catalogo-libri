import { Component, inject, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../../../../common/models/libri-dto';
import { MatExpansionModule } from '@angular/material/expansion';
import { BaseComponentDirective } from '../../../../services/abstracts/base-component/base-component-directive';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dettaglio-libro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule
  ],
  templateUrl: './dettaglio-libro.html',
  styleUrl: './dettaglio-libro.scss'
})
export class DettaglioLibro extends BaseComponentDirective implements OnInit {

  libro!: Libro;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.libro = this.activatedRoute.snapshot.data['data'];
  }


}
