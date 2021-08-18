import Explorer from "../../explorer"
import { getRef } from '../ref'
import { getGameData } from '../../game'
import { setSize, getSize } from "../size"

const {
    context,
    w,
    h,
    images
} = getGameData()
setSize('ready', w * 0.5, (w * 0.5) * (64 / 196))
setSize('tutorial', w * 0.3, (w * 0.3) * (98 / 114))

const readyDx: number = (w / 2) - (getSize('ready').width / 2),
    readyDy: number = (h / 3.5) - (getSize('ready').height)
const tutorialDx: number = (w / 2) - (getSize('tutorial').width / 2),
    tutorialDy: number = (h / 2) - (getSize('tutorial').height / 2)

const scene = getRef()

abstract class TutorialState {
    static opacity = 1
    static isReversal = false
}

function update_2(): void {
    Explorer.getState('bg').update()
    Explorer.getState('land').update()
    if (scene!.fno % 2 === 0) {
        if (!TutorialState.isReversal) {
            TutorialState.opacity -= 0.0625
            if (TutorialState.opacity === 0) {
                TutorialState.isReversal = true
            }
        } else {
            TutorialState.opacity += 0.125
            if (TutorialState.opacity === 1) {
                TutorialState.isReversal = false
            }
        }
    }
}

function render_2(): void {
    Explorer.getState('bird').setBirdPosition(w / 4, h / 3)
    Explorer.getState('bg').render()
    Explorer.getState('land').render()
    Explorer.getState('bird').render()
    Explorer.getState('scorecard').render()
    context.drawImage(<HTMLImageElement>images.ready, readyDx, readyDy, getSize('ready').width, getSize('ready').height)
    context.save()
    context.globalAlpha = TutorialState.opacity
    context.drawImage(<HTMLImageElement>images.tutorial, tutorialDx, tutorialDy, getSize('tutorial').width, getSize('tutorial').height)
    context.restore()
    import('../../offCanvas').then(res => {
        res.replaceCanvas()
    })
}

export {
    update_2,
    render_2
}
