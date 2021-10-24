import { Pipe, PipeTransform } from '@angular/core';

export enum Identity {
    SUPER = 0,
    ADMIN = 1,
    SUB = 2
}

export const IndetityMap = new Map<Identity, string>([
    [Identity.ADMIN, '管理员'],
    [Identity.SUB, '子管理员'],
    [Identity.SUPER, '超级管理员'],
])

@Pipe({
    name: 'identity'
})
export class IdentityPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return IndetityMap.get(value) || '';
    }

}
