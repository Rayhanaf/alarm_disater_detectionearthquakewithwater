basic.forever(function () {
    serial.writeValue("earthquake", pins.analogReadPin(AnalogPin.P1))
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(1)
        music.playMelody("G F E B D C C5 G ", 500)
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showNumber(0)
})
