/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program shows current temperature.
*/

// variables
let temperature = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  temperature = input.temperature()
  basic.showString('The temperature is: ' + temperature.toString() + ' C.')
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
