import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguageModal } from './modal.component';

describe('LanguageModal', () => {
  let component: LanguageModal;
  let fixture: ComponentFixture<LanguageModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
