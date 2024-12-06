basic.showString("Hi" + "guys")
record.startRecording(record.BlockingState.Blocking)
basic.showArrow(ArrowNames.North)
basic.showArrow(ArrowNames.NorthEast)
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.SouthEast)
basic.showArrow(ArrowNames.West)
basic.showArrow(ArrowNames.NorthWest)
basic.showString("I" + "am" + "Heer" + "Rajpal" + "btw!!")
record.startRecording(record.BlockingState.Blocking)
basic.showLeds(`
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    . . . . .
    `)
