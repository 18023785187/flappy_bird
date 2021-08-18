import SceneManage from './index'

let ref: SceneManage | null = null
function createRef(target: SceneManage): void {
    if (ref) return
    ref = target
}
function getRef(): SceneManage | null {
    return ref
}

export {
    createRef,
    getRef
}
