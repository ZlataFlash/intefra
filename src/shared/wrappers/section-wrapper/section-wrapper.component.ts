import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  imports: [],
  templateUrl: './section-wrapper.component.html',
  styleUrl: './section-wrapper.component.scss',
})
export class SectionWrapperComponent {
  public title = input('');
  public more = input('');
}
