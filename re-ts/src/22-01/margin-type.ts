

type Direction = 'top' | 'left' | 'bottom' | 'right'
type MarginProperty = `margin${Capitalize<Direction>}`


type CSSUnit = 'px' | 'pt' | 'vw' | 'vh' | "%"
type MarginUnit = number | `${number}${CSSUnit}`
type Margin = { [K in MarginProperty]?: MarginUnit }

const marginObject: Margin = {
    marginBottom: '1px',
    marginLeft: "5%"
}

console.log(marginObject);
