
import { IImageElements } from '../game/typing'

let images: IImageElements
import('../game').then(res => {
    const data = res.getGameData()
    images = data.images
})

const el: HTMLDivElement = document.createElement('div'),
    box: HTMLDivElement = document.createElement('div'),
    title: HTMLDivElement = document.createElement('div'),
    btn: HTMLDivElement = document.createElement('div'),
    content: HTMLDivElement = document.createElement('div'),
    item: HTMLDivElement = document.createElement('div')

el.className = 'list',
    box.className = 'box',
    title.className = 'title',
    btn.className = 'btn',
    content.className = 'content',
    item.className = 'item',

    title.textContent = '历史最高记录'

title.appendChild(btn)
box.appendChild(title)
box.appendChild(content)
el.appendChild(box)

btn.addEventListener('click', down)

function down(): void {
    el.style.cssText = `
        transform: translateY(-10%);
        opacity: 1;
    `
    window.setTimeout(() => {
        el.style.cssText = `
            transform: translateY(100%);
            opacity: 0;
        `
        window.setTimeout(() => {
            content.innerHTML = ''
        }, 500)
    }, 500)
}
function up(): void {
    el.style.cssText = `
        transform: translateY(0%);
        opacity: 1;
    `
    const infos: string | null = window.localStorage.getItem('totals')
    if (!infos) return
    content.style.display = 'none'
    try {
        JSON.parse(infos).forEach((info: {
            total: string,
            date: string
        }, index: number) => {
            if (index > 9) throw ''
            const tar: HTMLDivElement = <HTMLDivElement>item.cloneNode(true)
            tar.appendChild(index < 4 ? images.medals![index].cloneNode(true) : images.font![index].cloneNode(true))
            tar.innerHTML += `
                <div class='total'>${info.total}</div>
                <div class='date'>${info.date}</div>
            `
            content.appendChild(tar)
        })
    } catch { }
    content.style.display = ''
}

export default el
export {
    down,
    up
}
