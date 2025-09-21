import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioLibro } from './dettaglio-libro';

describe('DettaglioLibro', () => {
  let component: DettaglioLibro;
  let fixture: ComponentFixture<DettaglioLibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioLibro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioLibro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
