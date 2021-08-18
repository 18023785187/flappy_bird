
import GameOver from "../GameOver"
import Explorer from "../../explorer"
import { pipes } from '../../pipe'
import { getGameData } from '../../game'
import { getSize } from "../size"
import { getRef } from '../ref'

const {
    context,
    w,
    h
} = getGameData()

const scene = getRef()

function update_4(): void {
    Explorer.getState('bird').overUpdate()
    if (GameOver.opacity > 0) {
        scene!.fno % 3 === 0 && (GameOver.opacity -= 0.1)
    }
    if (Explorer.getState('bird').B >= Explorer.getState('land').y && GameOver.detectionIndex < 14) {
        scene!.fno % 3 === 0 && (GameOver.imagesIndex += 1)
    }
}

function render_4(): void {
    const bird = Explorer.getState('bird')
    context.clearRect(0, 0, w, h)
    Explorer.getState('bg').render()
    Explorer.getState('land').render()
    pipes.forEach(pipe => pipe.render())
    bird.overRender()
    context.fillStyle = `rgba(255,255,255,${GameOver.opacity})`
    context.fillRect(0, 0, w, h)
    if (bird.B >= Explorer.getState('land').y && GameOver.detectionIndex < 14) {
        context.drawImage(GameOver.dieImages[GameOver.imagesIndex], bird.x - getSize('die').width / 1.7, bird.B - getSize('die').height, getSize('die').width, getSize('die').height)
    }
    Explorer.getState('scorecard').render()
    import('../../offCanvas').then(res => {
        res.replaceCanvas()
    })
}

export {
    update_4,
    render_4
}
