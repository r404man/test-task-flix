import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: `button[mat-button],
   button[mat-stroked-button],
   button[mat-raised-button],
   button[mat-flat-button],
   button[mat-icon-button],
   button[mat-mini-fab],
   button[mat-fab]`,

  providers: [MatTooltip],
})
export class MatButtonDirective implements AfterViewInit {
  @Input() isViewerDisabled: boolean = false;
  @Input() viewerTooltipMessage: string = 'Role USER are not allowed';

  @HostListener('mouseover') mouseover() {
    if (this.isViewerDisabled) {
      this.matTooltip.message = this.viewerTooltipMessage;
      this.matTooltip.show();
    }
  }

  @HostListener('mouseleave') mouseleave() {
    this.matTooltip.hide();
  }

  constructor(
    private el: ElementRef<HTMLButtonElement>,
    private renderer: Renderer2,
    private matTooltip: MatTooltip
  ) {}

  disableButton(): void {
    this.renderer.setProperty(
      this.el.nativeElement,
      'disabled',
      this.isViewerDisabled
    );
  }

  ngAfterViewInit(): void {
    this.disableButton();
  }
}
