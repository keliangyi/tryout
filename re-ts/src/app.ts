
// import "./basic/text"
// import './basic/fibonacci'
// import './basic/mixin'
// import './basic/keyof'
// import './basic/error'
import './es/proxy'

import { Banshen } from './senior/map'
import './es/proxy'
import Route from './senior/inject'

[1,0,false,'','create','react','app'].filter(Boolean)

/**伴生对象模式 
 * import 的 Banshen 即使 类型又是 值
 */
const c:Banshen = Banshen.getColor('Blue','Blue') 
const route = new Route()
route.list(45)

