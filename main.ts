input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() == 150) {
        for (let index = 0; index < 3; index++) {
            music.playMelody("E E D D G G F F ", 500)
        }
    } else if (input.lightLevel() < 50) {
        for (let index = 0; index < 3; index++) {
            music.playMelody("B B A A C5 C5 G A ", 500)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        for (let index = 0; index < 3; index++) {
            music.playMelody("E E D D G G F F ", 500)
        }
    } else if (input.lightLevel() < 10) {
        for (let index = 0; index < 3; index++) {
            music.playMelody("B B A A C5 C5 G A ", 500)
        }
    }
})
