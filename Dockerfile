
FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g @ionic/cli @angular/cli

RUN npm install --legacy-peer-deps

COPY tsconfig.json tsconfig.app.json tsconfig.spec.json ./

COPY angular.json ionic.config.json capacitor.config.ts .editorconfig .eslintrc.json .gitignore .browserslistrc ./

COPY src ./src
COPY assets ./assets

EXPOSE 8100

CMD ["ionic", "serve", "--external"]
