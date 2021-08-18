
const audios: Map<string, HTMLAudioElement> = new Map()

function againPlay(key: string): void {
    if (!audios.has(key)) return
    const audio: HTMLAudioElement = <HTMLAudioElement>audios.get(key);
    audio.currentTime = 0
    audio.play()
}
function setAudios(key: string, value: HTMLAudioElement): void {
    audios.set(key, value)
}
function pause(key: string): void {
    if (!audios.has(key)) return
    const audio: HTMLAudioElement = <HTMLAudioElement>audios.get(key);
    audio.pause()
}

export default audios
export {
    againPlay,
    setAudios,
    pause
}
