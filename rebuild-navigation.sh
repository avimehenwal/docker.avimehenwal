#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 18 - Sep - 2020
# PURPOSE     : entrypoint script
# FILENAME    : script.sh
#
# Long problem description

ROOT="./docker-documentation/modules/ROOT"
INDEX="nav.adoc"
INDEX_FILE=$ROOT/$INDEX

# https://www.utf8-chartable.de/unicode-utf8-table.pl?start=9984&number=128&names=-&utf8=string-literal
Y="\xe2\x9c\x97"
X="\xE2\x9C\x94"
F="\xe2\x9c\x88"

# Hierarchy is not supported in asciidoc
# If I start writing chapters in `chapter/*.adoc` directory, it would still be located at root
# in destination folder. Hierarchy with `chapter` is skipped
echo > ${INDEX_FILE}
cat <<EOT > ${INDEX_FILE}
* xref:index.adoc[Index]
EOT

for FULL_NAME in $(find $ROOT/pages -type f -name '*.adoc' ! -name 'index.adoc')
  do
    # echo -e "$FULL_NAME"
    LINK=$(basename $FULL_NAME)
    # echo $LINK
    echo "* xref:${LINK}[${LINK^}]" | tee --append ${INDEX_FILE}
  done

# END