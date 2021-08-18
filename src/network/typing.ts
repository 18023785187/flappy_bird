
interface IStringObj {
    [propName: string]: string | IStringObj
}

interface IImages {
    bg: IStringObj,
    bird: IStringObj,
    land: IStringObj,
    pipe: IStringObj,
    button: IStringObj,
    title: string
    tutorial: string,
    ready: string,
    die: string[],
    font: string[],
    over: string,
    medals: string[],
    panel: {
        panel: IStringObj,
        nums: string[]
    }
}

interface IAudios {
    bg: string,
    flappy: string,
    score: string,
    collision: string
}

export {
    IImages,
    IStringObj,
    IAudios
}
