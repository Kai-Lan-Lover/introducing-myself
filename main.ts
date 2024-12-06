basic.showString("Hi" + "guys")
basic.showArrow(ArrowNames.North)
basic.showArrow(ArrowNames.NorthEast)
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.SouthEast)
basic.showArrow(ArrowNames.West)
basic.showArrow(ArrowNames.NorthWest)
record.startRecording(record.BlockingState.Blocking)
basic.showString("I" + "am" + "Heer" + "Rajpal" + "btw!!")
record.startRecording(record.BlockingState.Blocking)
basic.showLeds(`
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    . . . . .
    `)
