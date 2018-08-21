# radar-client-web.
[![](https://data.jsdelivr.com/v1/package/gh/mustansirzia/radar-client-web/badge)](https://www.jsdelivr.com/package/gh/mustansirzia/radar-client-web)
[![GitHub tag](https://img.shields.io/github/tag/MustansirZia/radar-client-web.svg?style=flat)](https://github.com/MustansirZia/go-rethinklogger/releases)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)


[Radar client](http://radar.zendesk.com/client.html) for the web with bundled [engine.io](https://www.npmjs.com/package/engine.io-client) and [minilog](http://mixu.net/minilog/) dependencies served over a CDN and minified using jsDelivr.

[Browserify](http://browserify.org/) is used to build a browser compatible build from the related npm packages.


## Installation.

Minified.
```html
<script src="https://cdn.jsdelivr.net/gh/mustansirzia/radar-client-web/dist/index.min.js"></script>
```

Non-Minified.
```html
<script src="https://cdn.jsdelivr.net/gh/mustansirzia/radar-client-web/dist/index.js"></script>
```

<br />

## Usage.
```html
    <script>
         RadarClient.configure({
            host: "xyz.com",
            port: 80,
            userId: "abc",
            userType: 0,
            accountName: 'radar_account'
        });

        RadarClient.alloc('radar_account', function() {
            RadarClient
                .message('messaging')
                .on(function(message) {     
                        alert(message);
                })
                .sync();
        });
    <script>
```

<br />

## Further References.
•  Radar (http://radar.zendesk.com/index.html).

• jsDelivr (https://www.jsdelivr.com/).

<br />

## License.
• MIT. 