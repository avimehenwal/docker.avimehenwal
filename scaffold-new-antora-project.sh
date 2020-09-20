#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 20 - Sep - 2020
# PURPOSE     : scaffold new antora project
# FILENAME    : new-antora-doc.sh
#
# Scaffold new antora documentation project
#
# sample/
# |-- antora.yml
# `-- modules
#     `-- ROOT
#         |-- attachments
#         |-- examples
#         |-- images
#         |-- nav.adoc
#         |-- pages
#         `-- partials
#

TOP_LEVEL_DIR="./docker-documentation"
# TOP_LEVEL_DIR="./SAMPLE/newProject"
FIRST_LEVEL_DIR="modules"
SECOND_LEVEL_DIR="ROOT"
THIRD_LEVEL_DIRS=(attachments examples images pages partials)

antora_file="${TOP_LEVEL_DIR}/antora.yml"
nav_file="${TOP_LEVEL_DIR}/${FIRST_LEVEL_DIR}/${SECOND_LEVEL_DIR}/nav.adoc"
TEST_FILE="./test-scaffold-new-antora-project.bats"

for THIRD_LEVEL in "${THIRD_LEVEL_DIRS[@]}"
do
    CMD="$TOP_LEVEL_DIR/$FIRST_LEVEL_DIR/$SECOND_LEVEL_DIR/$THIRD_LEVEL"
    mkdir --parents --verbose $CMD
done

cat << EOF > ${antora_file}
name: component1
title: Component 1 Documentation
version: 0.01
start_page: ROOT:index.adoc
nav:
- modules/ROOT/nav.adoc
EOF

cat << EOF > ${nav_file}
* xref:index.adoc[Index]
* link:{attachmentsdir}/chart.html[prebuilt HTML]
EOF

# bats $TEST_FILE
# bats ./
# bash "./test-scaffold-new-antora-project.sh"

# END
