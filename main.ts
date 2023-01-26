basic.forever(function () {
    serial.writeValue("earthquake", pins.analogReadPin(AnalogPin.P1))
    serial.writeValue("level", pins.analogReadPin(AnalogPin.P2))
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) >= 1004 && pins.analogReadPin(AnalogPin.P2) <= 300) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(1)
        music.playMelody("G F E B D C C5 G ", 500)
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showNumber(0)
})
