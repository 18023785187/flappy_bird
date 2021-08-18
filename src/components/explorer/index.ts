
abstract class Explorer {
    static state: Map<string,any> = new Map()
    static setState(key: string, value: any): void {
        Explorer.state.set(key,value)
    }
    static getState(key: string): any {
        return Explorer.state.get(key)
    }
}

export default Explorer
