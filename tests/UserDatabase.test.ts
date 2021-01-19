import { UserDatabase } from "../src/data/UserDatabase";

describe("Testando o UserDatabase", () => {

    const userDatabase = new UserDatabase();

    test("Testando o createUser", async () => {

        const user = {
            id: "123",
            name: "Bob",
            email: "bob@email.com",
            role: "NORMAL"
        }

        await userDatabase.createUser(user.id, user.email, user.name, user.role);

        const userFromDb = await userDatabase.getUserById(user.id);

        console.log(userFromDb);
        expect(userFromDb).not.toBe(undefined);

    });

    test("Testando o createUser com negação", async () => {

        const user = {
            id: "123",
            name: "Bob",
            email: "bob@email.com",
            role: "NORMAL"
        }

        await userDatabase.createUser(user.id, user.email, user.name, user.role);

        const userFromDb = await userDatabase.getUserById(user.id);

        console.log(userFromDb);
        expect(userFromDb.id).toBe("123");

    });

    test("Testando criar dois usuários com o mesmo id", async () => {
        expect.assertions(2);
        try {
            const bob = {
                id: "123",
                name: "Bob",
                email: "bob@email.com",
                role: "NORMAL"
            }

            const coragem = {
                id: "123",
                name: "Coragem",
                email: "coragem@email.com",
                role: "NORMAL"
            }

            await userDatabase.createUser(bob.id, bob.email, bob.name, bob.role);
            await userDatabase.createUser(coragem.id, coragem.email, coragem.name, coragem.role);

        } catch (error) {
            console.log(error);
            expect(error).not.toBe(undefined);
            expect(error.code).toBe("ER_DUP_ENTRY");
        }
    })

    afterEach(async () => {
        await userDatabase.deleteUser("123");
    });

});