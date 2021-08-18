
import Explorer from "../../explorer"
import { pipes } from "../../pipe"

function update_3(): void {
    Explorer.getState('bg').update()
    Explorer.getState('land').update()
    Explorer.getState('bird').update()
    pipes.forEach(pipe => pipe.update())
}

function render_3(): void {
    Explorer.getState('bg').render()
    Explorer.getState('land').render()
    Explorer.getState('bird').render()
    pipes.forEach(pipe => pipe.render())
    Explorer.getState('scorecard').render()
    import('../../offCanvas').then(res => {
        res.replaceCanvas()
    })
}

export {
    update_3,
    render_3
}
