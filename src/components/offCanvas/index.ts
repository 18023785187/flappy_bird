
const offCanvas: HTMLCanvasElement = document.createElement('canvas')
let canvas: HTMLCanvasElement

function replaceCanvas(): void {
    canvas && canvas.getContext('2d')!.drawImage(offCanvas, 0, 0)
}
function setCanvas(canvasEl: HTMLCanvasElement): void {
    canvas = canvasEl
}

export default offCanvas
export {
    replaceCanvas,
    setCanvas
}
