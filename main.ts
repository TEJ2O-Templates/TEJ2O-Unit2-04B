/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program calculates area and perimeter of rectangle.
*/

// variables
const area = 3 * 5
const perimeter = 2 * (3 + 5)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showString('The dimensions of a rectangle are 5 cm and 3 cm.')
  basic.pause(1000)
  basic.showString("The area is: " + area + " cm^2.")
  basic.pause(1000)
  basic.showString("The perimeter is: " + perimeter + " cm.")
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
