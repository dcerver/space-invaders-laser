input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    Laser = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        Laser.change(LedSpriteProperty.Y, -1)
    }
    Laser.delete()
})
input.onButtonPressed(Button.B, function () {
	
})
let Laser: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 100) {
        ship.change(LedSpriteProperty.X, 1)
        basic.pause(750)
    } else if (input.acceleration(Dimension.X) < -100) {
        ship.change(LedSpriteProperty.X, -1)
        basic.pause(750)
    }
})
