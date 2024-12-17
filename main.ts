let lenght: number = 18
let pasek: neopixel.Strip = neopixel.create(DigitalPin.P8, lenght, NeoPixelMode.RGB)
let speed: number = -10
let maxSpeed: number = -99
let minSpeed: number = 0
let speedChange: number = 0
let spindirect = 1
/*pasek.setPixelColor(0, neopixel.hsl(270, 99, 50))
pasek.setPixelColor(1, neopixel.hsl(60, 99, 50))
pasek.setPixelColor(2, neopixel.hsl(120, 99, 50))*/
pasek.showRainbow()

basic.forever(function() {
    pasek.rotate(spindirect)

    whaleysans.showNumber(Math.abs(speed))
    pasek.show()

    basic.pause(speed/10)

    if(speed > maxSpeed) {
        if (input.buttonIsPressed(Button.B)) {
            speedChange += 1
            if (speedChange > 1) {
                speed -= 10
            } else {
                speed -= 1
            }
        } else {
            speedChange = 0
        }        
    }
    
    if (speed <= minSpeed) {
        if (input.buttonIsPressed(Button.A)) {
            speedChange += 1
            if (speedChange > 1) {
                speed += 10
            } else {
                speed += 1
            }
        } else {
            speedChange = 0
        }
    }
    
    if(input.logoIsPressed()) {
        spindirect = spindirect * -1
    }
})
