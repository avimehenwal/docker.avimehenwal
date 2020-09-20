ARG  VERSION=12
FROM node:${VERSION}

ARG NAME=version.txt
RUN touch ${NAME}

ARG programs=[]
RUN node --version >> ${NAME}; \
    npm --version >> ${NAME}; \
    yarn --version >> ${NAME}; \
    npx --version >> ${NAME};

CMD  /code/run-app
