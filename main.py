def on_forever():
    serial.write_value("earthquake", pins.analog_read_pin(AnalogPin.P1))
    basic.show_number(pins.analog_read_pin(AnalogPin.P1))
basic.forever(on_forever)

def on_forever2():
    if pins.digital_read_pin(DigitalPin.P1) == 1:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_number(1)
        music.start_melody(music.built_in_melody(Melodies.POWER_DOWN),
            MelodyOptions.FOREVER)
        basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.show_number(0)
basic.forever(on_forever2)
