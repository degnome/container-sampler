FROM mhart/alpine-node
COPY . /src
RUN cd /src && npm install

ENV NODE_ENV=production

CMD ["node", "/src/server.js"]
