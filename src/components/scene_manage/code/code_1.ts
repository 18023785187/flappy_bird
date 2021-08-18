import Explorer from "../../explorer"
import { getGameData } from '../../game'
import { setSize, getSize } from "../size"

const {
    context,
    w,
    h,
    images
} = getGameData()
setSize('title', w * 0.5, (w * 0.5) * (48 / 178))
const titleDx: number = (w / 2) - (getSize('title').width / 2),
    titleDy: number = (h / 3) - (getSize('title').width / 2)

function update_1(): void {
    Explorer.getState('bg').update()
    Explorer.getState('land').update()
}

function render_1(): void {
    Explorer.getState('bird').setBirdPosition(w / 2, h / 2)
    Explorer.getState('bg').render()
    Explorer.getState('land').render()
    Explorer.getState('bird').render()
    Explorer.getState('score').render()
    Explorer.getState('play').render()
    context.drawImage(<HTMLImageElement>images.title, titleDx, titleDy, getSize('title').width, getSize('title').height)

}

export {
    update_1,
    render_1
}
