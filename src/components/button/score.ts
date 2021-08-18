import { getGameData } from '../game'
import { up } from '../list'

const WIDTH = 116,
    HEIGHT = 70
let el: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    w: number,
    h: number,
    image: HTMLImageElement
let targetW: number,
    targetH: number

class Score {
    constructor(x: number, y: number) {
        const data = getGameData()
        el = data.el,
            context = data.context,
            w = data.w,
            h = data.h,
            image = <HTMLImageElement>data.images.button!.score
        targetW = w * .3
        targetH = targetW * (HEIGHT / WIDTH)

        this.image = image
        this.x = x * w - targetW / 2
        this.y = y * h - targetH / 2
    }
    private image: HTMLImageElement
    private x: number
    private y: number
    public event = (e: TouchEvent | MouseEvent | PointerEvent) => {
        const pos = ((e as TouchEvent).touches && (e as TouchEvent).touches[0]) || e
        if (pos.pageX >= this.x
            &&
            pos.pageX <= this.x + targetW
            &&
            pos.pageY >= this.y
            &&
            pos.pageY <= this.y + targetH
        ) {
            up()
        }
    }
    public render(): void {
        const { image, x, y } = this
        context.save()
        context.drawImage(image, x, y, targetW, targetH)
        context.restore()
    }
}

export default Score
