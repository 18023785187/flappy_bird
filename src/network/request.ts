import images from './images'
import audios from './audios'
import { IAudios, IImages } from './typing'

function getData(data: string = 'images'): IImages | IAudios {
    switch (data) {
        case 'images':
            return images
        case 'audios':
            return audios
        default:
            return images
    }
}

export {
    getData,
}
