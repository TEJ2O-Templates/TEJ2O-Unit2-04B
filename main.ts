/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program shows current temperature.
*/

// variables
let currentTemperature = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  currentTemperature = input.temperature()
  basic.showString('The temperature is: ' + currentTemperature.toString() + ' C.')
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
