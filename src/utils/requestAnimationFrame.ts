
type IRequestAninmationFrame = ((callback: FrameRequestCallback) => number)

export default function requestAnimationFrame(): IRequestAninmationFrame {
    return (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        })
}
