basic.forever(function () {
    if (input.soundLevel() < 50) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .  
            `)
    }
    else {
        basic.showLeds(`
        # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
        `)
    }
})
