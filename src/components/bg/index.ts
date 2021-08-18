
import { getGameData } from '../game'
import { IElementObj } from '../game/typing'

const WIDTH = 288,
    HEIGHT = 512
let y: number
let context: CanvasRenderingContext2D,
    w: number,
    h: number,
    images: IElementObj
let targetW: number,
    targetH: number

class BG {
    constructor() {
        const data = getGameData()
        context = data.context,
            w = data.w,
            h = data.h,
            images = <IElementObj>data.images.bg
        targetH = h,
            targetW = targetH * (WIDTH / HEIGHT)
        y = 0

        let bg: HTMLImageElement[] = [],
            i: number = Math.floor(Math.random() * 2)

        Object
            .values(images)
            .forEach(val => bg.push(<HTMLImageElement>val))

        this.y = y
        this.h = targetH
        this.bg = bg[i]
        this.bgColor = i === 0 ? 'rgb(78,192,202)' : 'rgb(0,135,147)'
        this.imageCount = Math.ceil(w / targetW) + 1
        this.speed = Math.round(w * 0.003)
    }
    private bg: HTMLImageElement
    private bgColor: string = ''
    private imageCount: number = 1
    private x: number = 0
    private speed: number = 0
    public y: number
    public h: number
    public update(): void {
        this.x = this.x < -targetW ? 0 : this.x - this.speed
    }
    public render(): void {
        context.save()
        context.fillStyle = this.bgColor
        context.fillRect(0, 0, w, h)
        for (let i = 0; i <= this.imageCount; ++i) {
            context.drawImage(this.bg, this.x + (targetW * i), y, targetW, targetH)
        }
        context.restore()
    }
}

export default BG
