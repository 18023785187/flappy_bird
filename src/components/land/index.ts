
import { againPlay } from '../audio'
import Explorer from '../explorer'
import { getGameData } from '../game'
import { getRef } from '../scene_manage/ref'

const WIDTH = 336,
    HEIGHT = 112,
    BG_COLOR = 'rgb(222,216,149)'
let y: number
let context: CanvasRenderingContext2D,
    w: number,
    h: number,
    images: HTMLImageElement
let targetW: number,
    targetH: number

class Land {
    constructor() {
        const data = getGameData()
        context = data.context,
            w = data.w,
            h = data.h,
            images = <HTMLImageElement>data.images.land
        targetW = w,
            targetH = targetW * (HEIGHT / WIDTH)
        y = Explorer.getState('bg').y + Explorer.getState('bg').h * 0.8

        this.y = y
        this.image = <HTMLImageElement>images
        this.imageCount = Math.ceil(w / targetW) + 1
        this.speed = Math.round(w * 0.005)
    }
    private image: HTMLImageElement
    private imageCount: number
    private x: number = 0
    private speed: number = 0
    public y: number
    public update(): void {
        const bird = Explorer.getState('bird')
        this.x = this.x < -targetW ? 0 : this.x - this.speed
        if(bird.B >= y) {
            againPlay('collision')
            getRef()!.setState(4)
        }
    }
    public render(): void {
        context.save()
        context.fillStyle = BG_COLOR
        context.fillRect(0, y, w, h)
        for (let i = 0; i <= this.imageCount; i++) {
            context.drawImage(this.image, this.x + (targetW * i), y, targetW, targetH)
        }
        context.restore()
    }
}

export default Land
