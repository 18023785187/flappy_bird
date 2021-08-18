
import Explorer from "../../explorer"
import { pipes } from "../../pipe"
import { setSize, getSize } from "../size"
import { getGameData } from "../../game"

const {
    el,
    context,
    w,
    h,
    images
} = getGameData()

setSize('over', w * .5, w * .5 * (54 / 240))

const overDx: number = w / 2 - getSize('over').width / 2,
    overDy: number = h / 4 - getSize('over').height / 2

function update_5(): void {
    Explorer.getState('panel').update()
    Explorer.getState('panel').updateMedal()
    Explorer.getState('panel').updateNum()
}

function render_5(): void {
    Explorer.getState('bg').render()
    Explorer.getState('land').render()
    Explorer.getState('bird').render()
    pipes.forEach(pipe => pipe.render())
    Explorer.getState('scorecard').render()
    context.drawImage(<HTMLImageElement>images.over, overDx, overDy, getSize('over').width, getSize('over').height)
    Explorer.getState('ok').render()
    Explorer.getState('panel').render()
    Explorer.getState('panel').renderMedal()
    Explorer.getState('panel').renderNum()
}

export {
    update_5,
    render_5
}
