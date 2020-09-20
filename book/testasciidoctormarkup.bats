#!/usr/bin/env bats

TEST_SUITE="asciidoctor markup"
TEST_FILE="qanda.html"
echo -e "TEST SUITE - ${TEST_SUITE}"

xstyle="//style"

# linux based xml parsing
function parse {
  xpath=$1
  xmllint --html -xpath ${xpath} ${TEST_FILE} \
    | grep span.bgblue \
    | sed -e 's/^[[:space:]]*//'
}

@test "addition using bc" {
  result="$(echo 2+2 | bc)"
  [ "$result" -eq 4 ]
}

@test "addition using dc" {
  result="$(echo 2 2+p | dc)"
  [ "$result" -eq 4 ]
}

@test "test if css stylesheet is included in html" {
  expected="span.bgblue {"
  actual=
  [ "$(parse ${xstyle})" == "$expected" ]
}

# NOTE [] works as test
# if inside [ "" ] commas are removes, string is split into multiple
# substrings if spaces or special chars are used inside it
# FIX - make sure variables are use with quotes [ "${var}" ]