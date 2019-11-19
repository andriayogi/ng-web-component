import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ojek-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class OjekInputComponent {
    @Input() user: string;
    @Input() key: string;
    @Input() eye: string;

    @Output() clickEvent = new EventEmitter<boolean>();

    show = true;
    changeType() {
        if (this.show === true) {
            this.eye = 'fas fa-eye-slash';
            this.show = false;
        } else {
            this.eye = 'fas fa-eye';
            this.show = true;
        }
        this.clickEvent.emit(true);
    }
}
