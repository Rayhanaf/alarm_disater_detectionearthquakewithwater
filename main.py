def on_forever():
    serial.write_value("earthquake", pins.digital_read_pin(DigitalPin.P1))
    serial.write_value("level", pins.digital_read_pin(DigitalPin.P2))
    if pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) >= 200:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_number(1)
        music.start_melody(music.built_in_melody(Melodies.DADADADUM),
            MelodyOptions.ONCE)
        basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.show_number(0)
basic.forever(on_forever)
