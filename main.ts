let émoticône = 0
input.onGesture(Gesture.Shake, function () {
    émoticône = randint(0, 3)
    if (émoticône == 0) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.pause(2000)
        basic.showString("Fin!")
    } else if (émoticône == 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
        basic.pause(2000)
        basic.showString("Fin!")
    } else if (émoticône == 2) {
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
        basic.showString("Fin!")
    } else {
        basic.showIcon(IconNames.Asleep)
        basic.pause(2000)
        basic.showString("Fin!")
    }
})
