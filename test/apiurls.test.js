angular.module('Test', ['pvarache.APIUrls'])
    .config(['APIUrlsProvider', function (APIUrlsProvider) {
        APIUrlsProvider.hostname = 'basicapi.com';
        APIUrlsProvider.suffix = '/v1';
        APIUrlsProvider.urls = {
            'entities': '/entities',
            'entity': function (id) {
                return '/entities/' + id;
            }
        };
        APIUrlsProvider.apis.cats = {
            hostname: 'cats.com',
            urls: {
                'persians': '/persians',
                'persian': function (id) {
                    return '/persians/' + id;
                }
            }
        };
    }]);
