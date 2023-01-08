import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mid-deco',
    templateUrl: './mid-deco.component.html',
    styleUrls: ['./mid-deco.component.scss']
})
export class MidDecoComponent {
    @Input() extra: boolean = false;
}
