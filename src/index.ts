
import Game from './components/game'
import list from './components/list'
import { setElement } from './components/element'

import 'assets/css/normalize.css'
import 'assets/css/list.less'

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game')
setElement(canvas)
new Game(canvas);
canvas.parentNode!.appendChild(list)
