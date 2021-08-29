function tempRegulada () {
    basic.showString("T:" + input.temperature() + "C")
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() >= 10 && input.temperature() <= 25) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
}
basic.forever(function () {
    tempRegulada()
})
