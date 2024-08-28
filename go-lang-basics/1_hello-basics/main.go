package main

import "fmt"

func main() {
	// How to print a number in decimal, binary, and hexadecimal?
	num := 42
	fmt.Printf("%d - %b - %#X \n", num, num, num)
	for i := 1000; i < 1010; i++ {
		fmt.Printf("%d - %b - %#X \n", i, i, i)
	}
	// The ASCII code
	for i := 60; i <= 122; i++ {
		fmt.Printf("%d \t %b \t %x \t %q \n", i, i, i, i)
	}
}
