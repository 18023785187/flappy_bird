
const elm: {
    current?: HTMLCanvasElement
} = {}

function setElement(el: HTMLCanvasElement): void {
    elm.current = el
}

export default elm
export {
    setElement
}
