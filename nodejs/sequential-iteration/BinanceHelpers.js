export function intervalToMilliseconds(interval) {

    const secondsPerUnit = {
        's': 1,
        'm': 60,
        'h': 60 * 60,
        'd': 24 * 60 * 60,
        'w': 7 * 24 * 60 * 60
    }

    const unit = interval.slice(-1)
    const quantity = interval.slice(0,-1)

    return secondsPerUnit[unit] * quantity * 1000
}