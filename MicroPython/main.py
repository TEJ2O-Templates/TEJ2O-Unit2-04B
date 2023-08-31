"""
Created by: Mr. Coxall
Created on: Sep 2020
This module shows current temperature.
"""

from microbit import *

# variables
current_temperature = 0

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        current_temperature = temperature()
        display.scroll("The temperature is " + str(current_temperature) + " C.")

        display.clear()
        display.show(Image.HAPPY)
