import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from '../../../services/loader/loader-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class Loader {

  loaderService = inject(LoaderService);

}
