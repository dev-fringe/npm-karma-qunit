fixture.setBase('src/main/java/webapp');
QUnit.module('DOM manipulation', {
    beforeEach: function() {
        fixture.load('index.html');
         $('#jspFlightNumber').val('KE603');
         $('#jspSchDepD').val('2016-02-10');

    }
});
QUnit.test("hello test", function( assert ) {
    fn_getPassengerList()
    assert.ok( square(3) == "9", "Passed!" );
});