import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MemberEntity } from '../models/member.model';

@Component({
  selector: '[app-member-row]',
  templateUrl: './member-row.component.html',
  styles: []
})
export class MemberRowComponent {
  @Input() member: MemberEntity;
}
