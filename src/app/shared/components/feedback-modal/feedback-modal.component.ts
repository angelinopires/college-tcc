import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface FeedbackModal {
  title: string;
  description?: string;
  routeToRedirect?: string;
}

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss']
})
export class FeedbackModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: FeedbackModal) { }
}
