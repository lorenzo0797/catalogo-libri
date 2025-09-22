import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Libro } from '../../../../common/models/libri-dto';
import { BaseComponentDirective } from '../../../../services/abstracts/base-component/base-component-directive';

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
    console.log(this.libro);
  }


}
