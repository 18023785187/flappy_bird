import { getGameData } from '../../game'

const {
    context,
    w,
    h
} = getGameData()


function code_0(): void {
    if (!context) return
    context.fillStyle = 'rgb(40,44,52)'
    context.fillRect(0, 0, w, h)
    import('../../offCanvas').then(res => {
        res.replaceCanvas()
    })
}

export default code_0
