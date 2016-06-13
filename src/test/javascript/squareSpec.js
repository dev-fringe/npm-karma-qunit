fixture.setBase('src/main/java/webapp');
QUnit.module('DOM manipulation', {
    beforeEach: function() {
        fixture.load('index.html');
    }
});
QUnit.test("hello test", function( assert ) {
    assert.ok( square(3) == "9", "Passed!" );
});
