import {provideZonelessChangeDetection} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('App', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Not behaviour driven tests', () => {
    it('should create the app', () => {
      expect(app).toBeTruthy();
    });

    it(`should have a h1 title 'Roman Number Converter'`, () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const actualTitle = compiled.querySelector('h1')?.textContent;

      expect(actualTitle).toBe('Roman Number Converter');
    });
  });

  describe('Behaviour driven tests', () => {
    it(`should focus on input field, when label is clicked`, () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const label = compiled.querySelector('label');
      const inputField = compiled.querySelector('input');
      if (!label) {
        fail('There is no Label, but it expected one.');
        return;
      }
      if (!inputField) {
        fail('There is no input field, but it expected one.');
        return
      }

      (label as HTMLLabelElement).click();

      expect(document.activeElement).toBe(inputField);
    });

    it('should converted 846 into DCCCXLVI and display it', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const inputField = compiled.querySelector('input');
      if (!inputField) {
        fail('There is no input field, but it expected one.');
        return
      }

      inputField.click();
      inputField.value = '846';
      inputField.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(compiled.querySelector('section')?.textContent?.trim()).toBe('DCCCXLVI');
    });

    it('should show an error that input needs to be positive number, when input is zero', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const inputField = compiled.querySelector('input');
      if (!inputField) {
        fail('There is no input field, but it expected one.');
        return
      }

      inputField.click();
      inputField.value = '0';
      inputField.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(compiled.querySelector('section')?.textContent?.trim()).toBe('Only positive numbers can be converted into roman numbers.');
    });

    it('should show an error that input needs to be positive number, when input is negative', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const inputField = compiled.querySelector('input');
      if (!inputField) {
        fail('There is no input field, but it expected one.');
        return
      }

      inputField.click();
      inputField.value = '-1';
      inputField.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(compiled.querySelector('section')?.textContent?.trim()).toBe('Only positive numbers can be converted into roman numbers.');
    });
  });
});
