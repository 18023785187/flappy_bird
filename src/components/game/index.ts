
import SceneManage from '../scene_manage'
import { createRef, getRef } from '../scene_manage/ref'
import { setAudios } from '../audio'

import { getData } from 'network/request'
import { isObject } from 'utils'

import { IImages, IAudios } from 'network/typing'
import { IImageElements } from './typing'

class Game {
    constructor(el: HTMLCanvasElement) {
        if (Game.init) return
        if (el.tagName !== 'CANVAS')
            throw new Error(`<${el.tagName.toLowerCase()}> is not a <canvas>`)

        Game.el = el
        Game.init = true
        Game.context = <CanvasRenderingContext2D>el.getContext('2d')

        this.getWindowWAndH()
        el.width = Game.w
        el.height = Game.h
        this.loadData()

        createRef(new SceneManage())
        getRef()!.run()
        getRef()!.setState(1)
    }
    static el: HTMLCanvasElement
    static w: number = 0
    static h: number = 0
    static init: boolean = false
    static images: IImageElements = {}
    static context: CanvasRenderingContext2D
    private getWindowWAndH(): void {
        Game.w = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        Game.h = window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
    }
    private loadData(): void {
        handlerImages(<IImages>getData(), Game.images)
        handlerAudios()

        function handlerImages(data: IImages, images: IImageElements): void {
            Object.keys(data).forEach(key => {
                if (isObject(data[key])) {
                    images[key] = {}
                    handlerImages(data[key], images[key])
                } else if (Array.isArray(data[key])) {
                    images[key] = <HTMLImageElement[]>[];
                    for (const item of data[key]) {
                        const img = new Image()
                        img.src = item;
                        images[key].push(img)
                    }
                } else {
                    const img = new Image();
                    img.src = data[key];

                    images[key] = img
                }
            })
        }
        function handlerAudios(): void {
            const data = <IAudios>getData('audios')
            Object.keys(data).forEach(key => {
                setAudios(key, new Audio(data[key]))
            })
        }
    }
}
function getGameData() {
    return {
        el: Game.el,
        context: Game.context,
        w: Game.w,
        h: Game.h,
        images: Game.images,
    }
}

export default Game
export {
    getGameData
}
