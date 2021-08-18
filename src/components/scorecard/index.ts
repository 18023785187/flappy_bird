
import { setTotal, getTotal } from './total'
import { getGameData } from '../game'

const WIDTH = 24,
    HEIGHT = 44

let context: CanvasRenderingContext2D,
    w: number,
    h: number,
    images: HTMLImageElement[]

let targetW: number,
    targetH: number,
    y: number


class Scorecard {
    constructor() {
        const data = getGameData()
        context = data.context,
            w = data.w,
            h = data.h,
            images = <HTMLImageElement[]>data.images.font

        targetW = w * .06,
            targetH = targetW * (HEIGHT / WIDTH),
            y = h * .1

        this.images = [...images]

        setTotal(0)
    }
    private images: HTMLImageElement[] = []
    private isDouble: boolean = false
    public render(): void {
        const total: string = getTotal().toString(),
            center = Math.ceil(total.length / 2)

        if (this.isDouble) {
            for (let i = 0; i < total.length; i++) {
                context.drawImage(this.images[total[i]], w / 2 - targetW * (center - i), y, targetW, targetH)
            }
        } else {
            for (let i = 0; i < total.length; i++) {
                context.drawImage(this.images[total[i]], w / 2 - targetW * (center - i - 0.5), y, targetW, targetH)
            }
        }
    }
}

export default Scorecard
