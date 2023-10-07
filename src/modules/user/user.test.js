const supertest = require('supertest');
const app = require('../../app');
const server = require('../../server');

//crear instancia de supertest usando app


const api = supertest(app)

/*test ('Debo recibir un status 200 cuando hago Get a /', async () => {
  const path = '/'
  await api.get(path).expect(200)
})*/

describe("Pruebas para el registro de un usuario", () => {
    test("Deberia responder un 201", async () => {
      const body = {
        firstname: "shalala",
        lastname: "shalalal",
        email: "shalalala@gmail.com",
        password: "Shalala123@",
      };
  
      await api.post("/api/v1/users").send(body).expect(201);
    });
  
    test("Deberia responder un 400 si falta alguna propiedad en el body", async () => {
      const body = {
        firstname: "shalala",
        email: "shalalala@gmail.com",
        password: "Shalala123@",
      };
  
      await api.post("/api/v1/users").send(body).expect(400);
    });
  
    test("Deberia recibir un objeto con los errores si la informacion es invalida", async () => {
      const data = {
        firstname: "shalala",
        lastname: "shalalal",
        email: "shalalala",
        password: "Shalala123@",
      };
  
      const { body } = await api.post("/api/v1/users").send(data);
  
      expect(body).toBeInstanceOf(Object);
    });
  
    test("Deberia recibir un objeto con la propiedad error = Invalid data si la información es invalida", async () => {
      const data = {
        firstname: "shalala",
        lastname: "",
        email: "shalalala@gmail.com",
        password: "Shalala123@",
      };
  
      const { body } = await api.post("/api/v1/users").send(data);
      expect(body).toHaveProperty("error", "Invalid data");
    }, 50000);
  })

afterAll(() => server.close())