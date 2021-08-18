import { isMobile } from "utils";

const IS_TOUCH = isMobile() ? 'touchstart' : 'click'

export {
    IS_TOUCH
}
