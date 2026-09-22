# edd-dcvloeren service

Deployed on Hetzner as systemd `edd-dcvloeren.service`, source at
`/home/bob/repos/edd-dcvloeren/index.js` (Node/Express, port 3153). Two pi MCP tiers
(bare public, `/3.14` admin) plus the website's own `POST /contact-form` route -
`edd.dcvloeren.nl` reverse-proxies here. This copy is for version history / reference -
deploy is copy-to-Hetzner + `systemctl restart edd-dcvloeren`, not a git pull.

Secrets (`MAILGUN_API_KEY`, `DENNIS_EMAIL`, pi credentials, upload token) live in
`/home/bob/repos/edd-dcvloeren/.env` on Hetzner, never in this repo.
