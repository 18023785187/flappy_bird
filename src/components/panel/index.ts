
import { getGameData } from '../game'
import { IImageElements } from '../game/typing'

const PANEL_WIDTH = 238,
    PANEL_HEIGHT = 126,
    NUM_WIDTH = 16,
    NUM_HEIGHT = 20,
    MEDALS_WIDTH = 44,
    MEDALS_HEIGHT = 44
let context: CanvasRenderingContext2D,
    w: number,
    h: number,
    images: IImageElements
let targetPanelW: number,
    targetPanelH: number,
    targetNumW: number,
    targetNumH: number,
    targetMedalsW: number,
    targetMedalsH: number,
    mDx: number,
    mDy: number,
    nDx: number,
    nDy1: number,
    nDy2: number
let y: number,
    posX: number

class Panel {
    constructor() {
        const data = getGameData()
        context = data.context,
            w = data.w,
            h = data.h,
            images = data.images

        targetPanelW = w * .8,
            targetPanelH = targetPanelW * (PANEL_HEIGHT / PANEL_WIDTH),
            targetNumW = w * .05,
            targetNumH = targetNumW * (NUM_HEIGHT / NUM_WIDTH),
            targetMedalsW = w * .15,
            targetMedalsH = targetMedalsW * (MEDALS_HEIGHT / MEDALS_WIDTH)

        y = h * .35
        posX = w * .1

        this.panel = images.panel!.panel
        this.nums = images.panel!.nums
        this.medals = <HTMLImageElement[]>images.medals
        this.x = w
        this.speed = w * .05
        this.scale = 10

        mDx = posX + targetMedalsW / 1.4,
            mDy = y + targetMedalsH,
            nDx = posX + targetPanelW * .8,
            nDy1 = y + targetPanelH * .3,
            nDy2 = y + targetPanelH * .65
    }
    private panel: HTMLImageElement
    private nums: HTMLImageElement[]
    private medals: HTMLImageElement[]
    private x: number
    private speed: number
    private scale: number
    private num1: string = ''
    private num2: string = ''
    private ranking: number = 4
    private fno: number = 0
    public update(): void {
        if (this.x <= posX) this.x = posX
        else this.x -= this.speed
    }
    public render(): void {
        context.save()
        context.drawImage(this.panel, this.x, y, targetPanelW, targetPanelH)
        context.restore()
    }
    public updateMedal(): void {
        if (this.fno >= 230) {
            if (this.scale <= 1) this.scale = 1
            else this.scale -= .25
        }
    }
    public renderMedal(): void {
        if (this.ranking < 4 && this.fno >= 230) {
            context.drawImage(this.medals[this.ranking], mDx, mDy, targetMedalsW * this.scale, targetMedalsH * this.scale)
        }
    }
    public updateNum(): void {
        if (this.x >= posX) {
            ++this.fno
        }
    }
    public renderNum(): void {
        if (this.fno >= 50 && this.fno < 150) {
            for (let i = 0; i < this.num1.length; i++) {
                const random: number = Math.floor(Math.random() * 10)
                context.drawImage(this.nums[random], nDx - targetNumW * i, nDy1, targetNumW, targetNumH)
            }
            for (let i = 0; i < this.num2.length; i++) {
                const random: number = Math.floor(Math.random() * 10)
                context.drawImage(this.nums[random], nDx - targetNumW * i, nDy2, targetNumW, targetNumH)
            }
        } else if (this.fno > 150) {
            for (let i = 0; i < this.num1.length; i++) {
                const tarI: number = this.num1.length - 1 - i
                context.drawImage(this.nums[Number(this.num1[tarI])], nDx - targetNumW * i, nDy1, targetNumW, targetNumH)
            }
            for (let i = 0; i < this.num2.length; i++) {
                const tarI: number = this.num2.length - 1 - i
                context.drawImage(this.nums[Number(this.num2[tarI])], nDx - targetNumW * i, nDy2, targetNumW, targetNumH)
            }
        }
    }
    public setTotal(): void {
        const totals: {
            date?: string,
            total: string
        }[] = JSON.parse(window.localStorage.getItem('totals') || '[{`total`:`0`}]')
        this.num1 = window.localStorage.getItem('curTotal') || (0).toString()
        this.num2 = totals[0].total
        this.ranking = totals.findIndex(item => item.total === this.num1)
    }
}

export default Panel
