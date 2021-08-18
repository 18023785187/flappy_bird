
import Game from './components/game'
import list from './components/list'
import offCanvas, { setCanvas } from './components/offCanvas'
import { setElement } from './components/element'

import 'assets/css/normalize.css'
import 'assets/css/list.less'

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game')
setCanvas(canvas)
setElement(canvas)
new Game(offCanvas, canvas);
canvas.parentNode!.appendChild(list)
