#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 18 - Sep - 2020
# PURPOSE     : entrypoint script
# FILENAME    : script.sh
#
# Long problem description

ROOT="./docker-documentation/modules/ROOT"
INDEX="nav.adoc"

APT_DEPENDENCIES=(bash bats make)
SNAP_DEPENDENCIES=(docker)

# https://www.utf8-chartable.de/unicode-utf8-table.pl?start=9984&number=128&names=-&utf8=string-literal
Y="\xe2\x9c\x97"
X="\xE2\x9C\x94"
F="\xe2\x9c\x88"

# Hierarchy is not supported in asciidoc
# If I start writing chapters in `chapter/*.adoc` directory, it would still be located at root
# in destination folder. Hierarchy with `chapter` is skipped
function trim {
  string=$1
  prefix="./pages/"
  suffix=".adoc"
  foo=${string#"$prefix"}
  foo=${foo%"$suffix"}
  echo ${foo} | sed 's/Chapters\///g'
}

echo > ${INDEX}
cat <<EOT > ${INDEX}
* xref:index.adoc[Index]
EOT

for FILE in $(find $ROOT/pages -type f -name '*.adoc' ! -name 'index.adoc')
  do
    LINK=$(trim $FILE)
    echo "* xref:${LINK}[${LINK^}]" | tee --append ${INDEX}
  done

# END