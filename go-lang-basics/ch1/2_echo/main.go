package main

import (
	"fmt"
	"os"
	"strings"
	"time"
)

func main() {
	var s, sep string

	start := time.Now()
	for i := 1; i<len(os.Args); i++ {
		s += sep + os.Args[i]
		sep = " "
	}
	fmt.Println(s)
	duration := time.Since(start)
	fmt.Printf("The duration of Method 1 is %d\n", duration)

	start = time.Now()
	fmt.Println(strings.Join(os.Args[1:], " "))
	duration = time.Since(start)
	fmt.Printf("The duration of Method 2 is %d\n", duration)

	for index, val := range os.Args[1:] {
		fmt.Printf("%d : %s\n", index, val)
	}
}