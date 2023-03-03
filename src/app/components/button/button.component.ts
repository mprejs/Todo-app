import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Click';
  @Input() color: string = 'white';
  @Output() buttonClick = new EventEmitter()
  constructor() {}

  ngOnInit(): void { }
  
  onClick() {
    this.buttonClick.emit()
  }
}
