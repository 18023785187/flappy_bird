
import Explorer from '../explorer'
import Button from '../button'
import BG from '../bg'
import Land from '../land'
import Bird from '../bird'
import Scorecard from '../scorecard'
import Panel from '../panel'
import { clearPipes } from '../pipe'

import { againPlay } from '../audio'
import { getTotal } from '../scorecard/total'
import { createPipeTimer, clearPipeTimer } from '../pipe/timer'
import { requestAnimationFrame, formatDate } from 'utils'
import { IS_TOUCH } from '../constant'

class SceneManage {
    constructor() {
        this.stateCode = 0
        import('./code/code_0').then(res => {
            this.renderArr[0] = res.default
        })
        import('./code/code_1').then(res => {
            this.updateArr[1] = res.update_1
            this.renderArr[1] = res.render_1
        })
        import('./code/code_2').then(res => {
            this.updateArr[2] = res.update_2
            this.renderArr[2] = res.render_2
        })
        import('./code/code_3').then(res => {
            this.updateArr[3] = res.update_3
            this.renderArr[3] = res.render_3
        })
        import('./code/code_4').then(res => {
            this.updateArr[4] = res.update_4
            this.renderArr[4] = res.render_4
        })
        import('./code/code_5').then(res => {
            this.updateArr[5] = res.update_5
            this.renderArr[5] = res.render_5
        })
        import('../element').then(res => {
            res.default.current?.addEventListener(IS_TOUCH, this.event)
        })
    }
    private stateCode: number
    private updateArr: Array<Function> = new Array(6).fill(function () { })
    private renderArr: Array<Function> = new Array(6).fill(function () { })
    private update(): void {
        const { updateArr, stateCode } = this
        updateArr[stateCode]()
    }
    private render(): void {
        const { renderArr, stateCode } = this
        renderArr[stateCode]()
    }
    //帧数
    public fno: number = 0
    public setState(code: number): void {
        if ((code < 0 || code > 6) || this.stateCode === code) return
        this.stateCode = code
        const bird = Explorer.getState('bird')
        switch (code) {
            case 1:
                clearPipes()
                clearPipeTimer()
                Explorer.setState('play', new Button.Play(.3, .65))
                Explorer.setState('score', new Button.Score(.7, .65))
                Explorer.setState('ok', new Button.Ok(.5, .7))
                Explorer.setState('bg', new BG())
                Explorer.setState('land', new Land())
                Explorer.setState('bird', new Bird())
                Explorer.setState('scorecard', new Scorecard())
                Explorer.setState('panel', new Panel())
                import('../element').then(res => {
                    res.default.current?.addEventListener(IS_TOUCH, Explorer.getState('play').event);
                    res.default.current?.addEventListener(IS_TOUCH, Explorer.getState('score').event);
                })
                import('./GameOver').then(res => {
                    res.default.resetting()
                })
                againPlay('bg')
                break;
            case 2:
                import('../element').then(res => {
                    res.default.current?.addEventListener(IS_TOUCH, bird.event)
                    res.default.current?.removeEventListener(IS_TOUCH, Explorer.getState('score').event)
                    res.default.current?.removeEventListener(IS_TOUCH, Explorer.getState('ok').event)
                })
                break
            case 3:
                createPipeTimer()
                break
            case 4:
                import('../element').then(res => {
                    res.default.current?.removeEventListener(IS_TOUCH, bird.event)
                })
                const temp: any = JSON.parse(<string>window.localStorage.getItem('totals'))
                const totals: {
                    date: string,
                    total: string
                }[] = Array.isArray(temp) ? temp : []
                totals.push({
                    date: formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"),
                    total: getTotal().toString()
                })
                totals.length > 10 && (totals.length = 10)
                totals.sort((a, b) => Number(b.total) - Number(a.total))
                window.localStorage.setItem('totals', JSON.stringify(totals))
                window.localStorage.setItem('curTotal', getTotal().toString())
                break
            case 5:
                Explorer.getState('panel').setTotal()
                import('../element').then(res => {
                    res.default.current?.addEventListener(IS_TOUCH, Explorer.getState('ok').event)
                })
                break
            default:
                break;
        }
    }
    public run(): void {
        ++this.fno
        this.update()
        this.render()
        requestAnimationFrame()(this.run.bind(this))
    }
    public event = () => {
        if (this.stateCode === 2) {
            this.setState(3)
        }
    }
}

export default SceneManage
