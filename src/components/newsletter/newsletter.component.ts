import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TuiInputModule, TuiInputPhoneModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';

@Component({
  selector: 'app-newsletter',
  imports: [
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputPhoneModule,
    TuiButton,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent implements OnInit {
  public newsletterForm!: FormGroup;

  ngOnInit() {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
  }
}
