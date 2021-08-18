
import Explorer from '../explorer'
import { record, crossOut } from '../scorecard/record'
import { getRef } from '../scene_manage/ref'
import { getGameData } from '../game'
import { IElementObj } from '../game/typing'
import { requestAnimationFrame } from 'utils'
import { againPlay } from '../audio'

const pipes: Pipe[] = []
const WIDTH = 52,
    HEIGHT = 320
let context: CanvasRenderingContext2D,
    w: number,
    h: number,
    images: IElementObj
let color: string
let targetW: number,
    targetH: number,
    targetI: number
setPipeColor()

class Pipe {
    constructor() {
        const data = getGameData()
        context = data.context,
            w = data.w,
            h = data.h,
            images = <IElementObj>data.images.pipe
        const landY: number = Explorer.getState('land').y
        targetH = Math.floor(landY * .78),
            targetW = Math.floor(landY * (WIDTH / HEIGHT) * .6),
            targetI = Math.floor(landY * 0.22)

        pipes.push(this)
        record(this)

        Object
            .values(images[color])
            .forEach(val => this.images.push(val))
        this.speed = Math.round(w * 0.005)

        this.brush = (Math.floor(Math.random() * 8) + 2) / 10
    }
    private images: HTMLImageElement[] = []
    private x: number = w
    private speed: number = 0
    private brush: number = 0
    public update(): void {
        const bird = Explorer.getState('bird')
        this.x -= this.speed
        if (this.x + targetW < 0) {
            requestAnimationFrame()(() => pipes.shift())
        }
        if (bird.R > this.x + this.speed && bird.L < this.x + targetW) {
            if (bird.T < targetH * (1 - this.brush) || bird.B > targetH * (1 - this.brush) + targetI) {
                againPlay('collision')
                getRef()!.setState(4)
            }
        }
        if (bird.L > this.x + targetW) {
            crossOut(this)
        }
    }
    public render(): void {
        const { images, brush, x } = this
        context.save()
        context.drawImage(images[0], 0, HEIGHT * brush, WIDTH, HEIGHT, x, 0, targetW, targetH)
        context.drawImage(images[1], 0, 0, WIDTH, HEIGHT * brush, x, targetH * (1 - brush) + targetI, targetW, targetH * brush)
        context.restore()
    }
}
function setPipeColor(): void {
    const i: number = Math.floor(Math.random() * 2)
    if (i === 0) {
        color = 'pipe'
    } else {
        color = 'pipe2'
    }
}
function clearPipes(): void {
    pipes.length = 0
}

export default Pipe
export {
    pipes,
    setPipeColor,
    clearPipes
}
