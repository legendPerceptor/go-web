package chicago

import "rsc.io/quote"

// The baseball team string will be exported because it starts with a captical.
var BaseballTeam = "White Sox"

func Hello() string {
	return quote.Hello() + " " + BaseballTeam
}
