export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length))
    let low = 0
    let high = low + step

    while (high < breaks.length) {
        if (breaks[high]) {
            for (let i = low; i <= high; i++) {
                if (breaks[i]) return i
            }
        } else {
            low = high
            high = low + step
        }
    }
    return -1
}
