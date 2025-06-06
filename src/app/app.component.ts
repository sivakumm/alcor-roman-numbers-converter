import {Component, computed, Signal, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {convertToRoman} from './converter/roman.converter';
import {MatToolbar} from '@angular/material/toolbar';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ArabicNumber} from './models/arabic';
import {ErrorMessage} from './models/error-message';
import {RomanNumber} from './models/roman';

@Component({
  selector: 'app-root',
  imports: [FormsModule, MatFormField, MatIconModule, MatInput, MatLabel, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly arabicNumber = signal<ArabicNumber>(1);

  private readonly validatedArabicNumber: Signal<ArabicNumber | ErrorMessage> = computed(() => {
    if (this.arabicNumber() < 1) {
      return 'Only positive numbers can be converted into roman numbers.';
    }
    return this.arabicNumber();
  });

  readonly romanNumber = computed<RomanNumber | ''>(() => {
    const validatedArabicNumber = this.validatedArabicNumber();
    if (typeof validatedArabicNumber !== 'number') {
      return '';
    }
    return convertToRoman(validatedArabicNumber);
  });

  readonly conversionError = computed<ErrorMessage>(() => {
    const validatedArabicNumber = this.validatedArabicNumber();
    if (typeof validatedArabicNumber !== 'string') {
      return '';
    }
    return validatedArabicNumber;
  });
}
