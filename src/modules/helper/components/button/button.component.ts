import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ojek-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class OjekButtonComponent {
    @Input() label: string;
    @Input() icon: string;
    @Output() clickEvent = new EventEmitter<boolean>();

    changeLabel() {
        this.label = 'Loading...';
        this.clickEvent.emit(true);
    }
}
