/**
 * @ngdoc       service
 * @name        pvarache.APIUrls.api.service:APIUrls
 * @description Generates full urls based on the server configuration and stored routes
 */
angular.module('pvarache.APIUrls', [])
    .provider('APIUrls', function () {

        this.apis = {};

        this.hostname = "";
        this.suffix = "";
        this.port = "80";
        this.secure = false;
        this.urls = {};

        this.$get = (function () {
            var Funcs = {
                apis: this.apis,
                /**
                 * @ngdoc       property
                 * @name        APIUrls#hostname
                 * @propertyOf  pvarache.APIUrls.api.service:APIUrls
                 * @description Holds the hostname of the API server
                 */
                hostname: this.hostname,
                /**
                 * @ngdoc       property
                 * @name        APIUrls#suffix
                 * @propertyOf  pvarache.APIUrls.api.service:APIUrls
                 * @description Holds an optional suffix
                 */
                suffix: this.suffix,
                /**
                 * @ngdoc       property
                 * @name        APIUrls#port
                 * @propertyOf  pvarache.APIUrls.api.service:APIUrls
                 * @description Holds the port of the API server
                 */
                port: this.port,
                /**
                 * @ngdoc       property
                 * @name        APIUrls#secure
                 * @propertyOf  pvarache.APIUrls.api.service:APIUrls
                 * @description Chooses between http:// and https://
                 */
                secure: this.secure,
                /**
                 * @ngdoc       property
                 * @name        APIUrls#urls
                 * @propertyOf  pvarache.APIUrls.api.service:APIUrls
                 * @description Map of urls. Each one must point to one of the API route. Function can be used
                 */
                urls: this.urls,
                /**
                 * @ngdoc       function
                 * @name        APIUrls#getUrl
                 * @methodOf    pvarache.APIUrls.api.service:APIUrls
                 * @description Return the full request of the route
                 * @param  {string} key Key of the route
                 * @return {string}     Full request url
                 */
                getUrl: function (key) {
                    var argsArray = Array.prototype.slice.call(arguments);
                    argsArray = [this].concat(argsArray);
                    return Funcs.generateUrl.apply(this, argsArray);
                },
                generateUrl: function (api, key) {
                    var url = api.urls[key],
                        argsArray;

                    if (angular.isFunction(url)) {
                        argsArray = Array.prototype.slice.call(arguments);
                        argsArray.splice(0, 2);
                        url = url.apply(null, argsArray);
                    }

                    return (api.secure ? "https://" : 'http://') +
                        api.hostname + ':' +
                        (api.port || 80) +
                        (api.suffix || '') +
                        url;
                },
                api: function (apiName) {
                    return {
                        url: Funcs.generateUrl.bind(this, this.apis[apiName])
                    };
                }
            };
            return Funcs;
        }).bind(this);
    });
