FROM node:latest

LABEL maintainer="Jack Fong"

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb http://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y git yarn \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 80

WORKDIR /var/www/html/nuxt

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

CMD ["yarn", "start"]
