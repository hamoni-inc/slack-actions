FROM node:20-alpine

COPY main.js /main.js

ENTRYPOINT ["node", "/main.js"]