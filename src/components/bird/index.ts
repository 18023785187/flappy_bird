import Explorer from "../explorer"
import { againPlay } from "../audio"
import { getGameData } from "../game"
import { IElementObj } from "../game/typing"

const WIDTH = 48,
    HEIGHT = 48
let el: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    w: number,
    h: number,
    images: IElementObj
let targetW: number,
    targetH: number

let color: string

class Bird {
    constructor() {
        const data = getGameData()
        el = data.el,
            context = data.context,
            w = data.w,
            h = data.h,
            images = <IElementObj>data.images.bird
        targetW = w * .12,
            targetH = targetW * (HEIGHT / WIDTH)

        setBirdColor()

        Object
            .values(images[color])
            .forEach(val => this.images.push(val))
        this.fno = 0
        this.x = this.y = w * .2
        this.upSpeed = parseFloat((h * 0.0006).toFixed(3))
        this.downSpeed = parseFloat((h * 0.00035).toFixed(3))
    }
    private images: HTMLImageElement[] = []
    private fno: number
    private x: number = 0
    private y: number = 0
    private r: number = 0
    private isUp: boolean = false
    private upSpeed: number = 0
    private downSpeed: number = 0
    public T: number = 0
    public R: number = 0
    public B: number = 0
    public L: number = 0
    public event = (): void => {
        againPlay('flappy')
        if (this.fno > 0) {
            this.isUp = true
            this.r = 0
            this.fno = 0
        }
    }
    public update(): void {
        ++this.fno
        if (!this.isUp) {
            this.r += 0.05
            this.y += this.fno * this.upSpeed
        } else {
            this.r -= 0.03
            this.y -= (23 - this.fno) * this.downSpeed
            if (this.fno >= 23) {
                this.isUp = false
                this.fno = 0
            }
        }
        if (this.y < 0) this.y = 0
        // AABB
        this.T = Math.floor(this.y - targetW / 5)
        this.R = Math.floor(this.x + targetW / 5)
        this.B = Math.floor(this.y + targetW / 5)
        this.L = Math.floor(this.x - targetW / 5)
    }
    public render(): void {
        const { images, fno } = this
        if (this.y < Explorer.getState('land').y) {
            context.save()
            context.translate(this.x, this.y)
            context.rotate(this.r)
            context.drawImage(images[Math.floor(fno / 5) % 3], -targetW / 2, -targetH / 2, targetW, targetH)
            context.restore()
        }
    }
    public overUpdate(): void {
        ++this.fno
        if (this.y < Explorer.getState('land').y) {
            this.r += 0.05
            this.y += this.fno * this.upSpeed
        }
        this.B = Math.floor(this.y + targetW / 5)
    }
    public overRender(): void {
        const { images } = this
        if (this.y < Explorer.getState('land').y) {
            context.save()
            context.translate(this.x, this.y)
            context.rotate(this.r)
            context.drawImage(images[0], -targetW / 2, -targetH / 2, targetW, targetH)
            context.restore()
        }
    }
    public setBirdPosition(x: number, y: number): void {
        this.x = x
        this.y = y
    }
}
function setBirdColor(): void {
    const i: number = Math.floor(Math.random() * 3)
    switch (i) {
        case 0:
            color = 'bird0'
            break
        case 1:
            color = 'bird1'
            break
        case 2:
            color = 'bird2'
            break
    }
}

export default Bird
export {
    setBirdColor
}
