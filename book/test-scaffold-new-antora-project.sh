#!/usr/bin/env bats

SOURCE_FILE="./scaffold-new-antora-project.sh"
source $SOURCE_FILE

@test "test if TOP_LEVEL_DIR exists" {
  [[ -d $TOP_LEVEL_DIR ]]
}
@test "test if antora_file exists under TOP_LEVEL_DIR" {
  [[ -f $antora_file ]]
}
@test "test if antora_file is NOT empty" {
  [[ -s $antora_file ]]
}
@test "test if nav_file exists" {
  [[ -f $nav_file ]]
}
@test "test if nav_file is NOT empty" {
  [[ -s $nav_file ]]
}
