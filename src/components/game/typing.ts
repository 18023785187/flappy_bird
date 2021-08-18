

interface IElementObj {
    [propName: string]: HTMLImageElement | IElementObj
}

interface IImageElements {
    bg?: IElementObj,
    bird?: IElementObj,
    land?: HTMLImageElement,
    pipe?: IElementObj,
    button?: IElementObj,
    title?: HTMLImageElement,
    tutorial?: HTMLImageElement,
    ready?: HTMLImageElement,
    die?: HTMLImageElement[],
    font?: HTMLImageElement[],
    over?: HTMLImageElement,
    medals?: HTMLImageElement[],
    panel?: {
        panel: HTMLImageElement,
        nums: HTMLImageElement[]
    }
}

export {
    IImageElements,
    IElementObj
}
