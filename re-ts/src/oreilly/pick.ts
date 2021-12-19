import { Currency } from './record'

namespace pick {

    const c: Currency = {
        unit: 'CNY',
        value: 45
    }

    const e = Currency
    console.log(e);

    type D = Pick<Currency, 'unit'>
    const d: D = {
        unit: "CNY"
    }

}