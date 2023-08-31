"""
Created by: Mr. Coxall
Created on: Sep 2020
This module calculates area and perimeter of rectangle.
"""

from microbit import *

# variables
area = 3 * 5
perimeter = 2 * (3 + 5)

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        display.scroll("The dimensions of a rectangle are 5 cm and 3 cm.")
        display.scroll("Area is " + str(area) + " cm^2.")
        display.scroll("Perimeter is " + str(perimeter) + " cm.")

        display.clear()
        display.show(Image.HAPPY)
