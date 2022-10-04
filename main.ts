input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    if (num == number) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.showNumber(number)
    }
    if (num != number) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.showNumber(number)
    }
    basic.showString("Goodbye")
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let num = 0
let number = 0
basic.showString("Hello!")
number = randint(0, 20)
for (let index = 0; index < 3; index++) {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
}
