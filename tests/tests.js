
var assert = chai.assert;

suite('Tests para ficheros INI', function() {
    test('Comprobando correcto funcionamiento', function() {
    });

    test(' Prueba con espacios en blanco', function() {
        var token = lexer(' ');
assert.equal(token[0].type,'blanks');
    });


    test(' Prueba con comentarios', function() {
        var token = lexer('; realizando prueba de comentario');
assert.equal(token[0].type,'comments');
    });

    test('Error', function() {
        var token = lexer('@#!!?34');
assert.equal(token[0].type,'error');
    });
});