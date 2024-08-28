package chicago

import "testing"

func TestHello(t *testing.T) {
	want := "White Sox"
	if got := Hello(); got != want {
		t.Errorf("BaseballTeam = %q, want %q", got, want)
	}
}
