
interface ISize {
    width: number,
    height: number
}

const size: {
    [propName: string]: ISize
} = {}

function setSize(propName: string, width: number, height: number): void {
    size[propName] = {
        width,
        height
    }
}
function getSize(propName: string): ISize {
    return size[propName]
}

export {
    setSize,
    getSize
}
