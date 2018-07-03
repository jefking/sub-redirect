# Redirect
Redirects a request to a sub-domain. Request path should be maintained, meaning folers/files/query string will be applied to the request on the sub-domain. Protocol is configurable; if you want to redirect http to https.

## Examples
+ http://jefking.me -> http://www.jefking.me
+ http://jefking.me -> https://www.jefking.me
+ http://jefking.me?test=happy -> http://www.jefking.me?test=happy
+ http://jefking.me/index.htm?test=happy -> http://www.jefking.me/index.htm?test=happy

## Configuration
+ SUBDOMAIN = www (default)
+ PROTOCOL = http (default)