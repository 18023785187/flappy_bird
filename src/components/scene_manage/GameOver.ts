
import { getGameData } from '../game'
import { setSize } from "./size"
import { getRef } from './ref'

const {
    w,
    images
} = getGameData()

const scene = getRef()
setSize('die', w * .2, w * .2 * (268 / 260))

abstract class GameOver {
    static opacity: number = 1
    static dieImages: HTMLImageElement[] = [...(images.die as HTMLImageElement[])]
    static imagesIndex: number = 0
    static get detectionIndex() {
        if (GameOver.imagesIndex >= 14) {
            scene!.setState(5)
        }
        return GameOver.imagesIndex
    }
    static resetting(): void {
        GameOver.imagesIndex = 0
    }
}

export default GameOver
