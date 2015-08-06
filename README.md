# angular-api-urls

Manages for you the routes of your API. Just provide your API configuration and
the routes you want to use and it will generates your URLs.

## Example

First install the module with a simple

```shell
bower install --save angular-api-urls
```

Then make something cool.

There is two ways to configure APIs.

If you have only one API, just configure it with the `APIUrlsProvider` params.
Otherwise, you can add your configuration in the `apis` properties like this:

```js
// Your awesome module needs to depend on pvarache.APIUrls
angular.module('MyApp', ['pvarache.APIUrls'])

    // Configure the APIUrls Provider
    .config(['APIUrlsProvider', function (APIUrlsProvider) {

        // Basic API information
        APIUrlsProvider.hostname = "my.api.com";
        APIUrlsProvider.suffix = "/v1";
        APIUrlsProvider.secure = true;
        APIUrlsProvider.port = 443;

        // Your routes
        APIUrlsProvider.urls = {
            // Simple route
            cats: "/cats",
            // Route with params
            cat: function (catId) {
                return "/cat/" + catId;
            },
            // Route with even more params (e.g. A filter)
            catsByHairyness: function (hairyness) {
                return '/cats?hairyness=' + hairyness;
            }
        };

        // Add another api if you want
        APIUrlsProvider.apis.farm = {
            hostname: 'farm.com',
            suffix: '/v1',
            urls: {
                'chickens': '/chickens',
                'chicken': function (id) {
                    return '/chickens/' + id;
                }
            }
        };

    }]);
```
Once configured, you can use it like that

```js
APIUrls.getUrl('cats');
```

And it will give you: `https://my.api.com/v1/cats`

And for the routes with params:

```js
APIUrls.getUrl('catsByHairyness', 'fuzzy');
```

The other APIs can be accessed with:

```js
// Will return http://farm.com/v1/chickens
APIUrls.api('farm').url('chickens');
```

You can now use it wherever you want

```js
angular.module('MyApp')
    .controller('AwesomeController', [
        '$scope',
        '$http',
        'APIUrls',
        function ($scope, $http, APIUrls) {
            $http.get(APIUrls.getUrl('cats'))
                .success(function (cats) {
                    console.log(cats);
                })
                .error(function (reason) {
                    console.error(reason);
                });
        }]);
```

Have fun ;)
