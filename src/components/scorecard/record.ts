import { getTotal, setTotal } from '../scorecard/total'
import { againPlay } from '../audio'

const map: WeakMap<any, boolean> = new WeakMap()

function record(target: any): void {
    map.set(target, true)
}
function crossOut(target: any): void {
    if (!map.has(target)) return
    map.delete(target)
    setTotal(getTotal() + 1)
    againPlay('score')
}

export {
    record,
    crossOut
}
