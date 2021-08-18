import Pipe from "."
import { requestAnimationFrame } from 'utils'

let timer: number

function createPipeTimer(time: number = 1650): number {
    timer = window.setInterval(() => requestAnimationFrame()(() => new Pipe()), time)
    return timer
}
function clearPipeTimer(): void {
    window.clearInterval(timer)
}

export {
    createPipeTimer,
    clearPipeTimer
}
