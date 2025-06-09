import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'willow-card',
    imports: [NgStyle],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    backgroundColor = input<string>('white');
}
