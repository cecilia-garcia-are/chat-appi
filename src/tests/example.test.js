const sum = require('../sum');

test('La suma de 4 y 5 debe dar 9', () => {
    const a = 5
    const b = 4
    //Act
    const result = sum(a, b)
    expect(result).toBe(9)
})

test("La suma de un string '10' y 15 debe dar undefined", () => {
    const a = "10"
    const b = 15

    const result = sum(a, b)
    expect(result).toBeUndefined()
})

test("Si se manda uno o todos los parametros vacios deberia de volver un null", () => {
    const a = null
    const b = 7

    const result = sum()
    expect(result).toBeNull()
})

//expresion regular para probar un token
