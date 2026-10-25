# Static resume served by unprivileged nginx.
# Runs as numeric UID 101 and listens on $PORT (default 8080), per PicoPaaS platform rules.
FROM nginxinc/nginx-unprivileged:1.31.7-alpine

ENV PORT=8080

# Rendered into /etc/nginx/conf.d/default.conf at startup by the image's envsubst entrypoint.
COPY --chown=101:101 nginx/default.conf.template /etc/nginx/templates/default.conf.template
RUN rm -f /etc/nginx/conf.d/default.conf

COPY --chown=101:101 index.html 404.html robots.txt sitemap.xml /usr/share/nginx/html/
COPY --chown=101:101 assets/ /usr/share/nginx/html/assets/

USER 101
EXPOSE 8080
