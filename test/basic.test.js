describe('APIUrls', function(){
    var provider;
    beforeEach(angular.mock.module('Test'));

    beforeEach(angular.mock.inject(function(APIUrls) {
        provider = APIUrls;
    }));

    it('should generate the basic API urls', function () {
        provider.getUrl('entities').should.be.eql('http://basicapi.com:80/v1/entities');
        provider.getUrl('entity', 1234).should.be.eql('http://basicapi.com:80/v1/entities/1234');
    });

    it('should test', function () {
        provider.api('cats').url('persians').should.be.eql('http://cats.com:80/persians');
        provider.api('cats').url('persian', 1234).should.be.eql('http://cats.com:80/persians/1234');
    });

});
