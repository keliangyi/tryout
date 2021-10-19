import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'moneyPipe' })
export class MoneyPipe implements PipeTransform {
    transform(value: number, exponent: number = 2): unknown {
        return '￥' + value.toFixed(exponent);
    }
}
