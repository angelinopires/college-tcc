import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DoubleCheckModal {
  title: string;
  description: string;
  onConfirm: () => void;
}

@Component({
  selector: 'app-double-confirm-modal',
  templateUrl: './double-confirm-modal.component.html',
  styleUrls: ['./double-confirm-modal.component.scss']
})
export class DoubleConfirmModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DoubleCheckModal) {}
}
