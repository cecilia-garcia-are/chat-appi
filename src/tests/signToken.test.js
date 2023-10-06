//pruebas para verificar qur la funcion signAuthToken
//genere un jwt cuando le pasamos la info

const {signAuthToken} = require('../helpers/signToken')

test('La funcion deberia regresar un token cuando le pasamos la data', () => {
 const data= {id: 3}
 const result = signAuthToken(data)

 expect(result).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+$/)
})

