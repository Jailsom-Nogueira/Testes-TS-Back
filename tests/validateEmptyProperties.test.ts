describe("Testando o validateEmptyProperties", ()=>{

    test("Testando o validador toBe", ()=>{

        const soma = 7+11;
        expect(soma).toBe(18);

    });

    test("Testando o validador toEqual", ()=>{

        const array = [1, 2, 3];
        expect(array).toEqual([1, 2, 3]);

    });

    test("Testando os toBeGreaterThan", ()=>{
        const soma = 7+11;
        expect(soma).toBeGreaterThan(15);
        expect(soma).toBeGreaterThanOrEqual(18);

    });

    test("Testando os toBeGreaterThan", ()=>{
        const soma = 7+11;
        expect(soma).toBeLessThan(40);
        expect(soma).toBeLessThanOrEqual(18);

    });
    
    test("Testando o toContain", ()=>{
        const array = [1, 2, 3, "Oi"];
        expect(array).toContain(2);
        expect(array).toContain(3);
    });

    test("Testar o toContainEqual", ()=>{
        const arrayComplexo = [
            {
                nome:"Alice",
                email: "alice@email.com"
            },
            {
                nome: "Bob",
                email: "bob@email.com"
            },
            {
                nome: "Coragem",
                email: "coragem@email.com"
            }
        ];

        expect(arrayComplexo).toContainEqual({
            nome: "Coragem",
            email: "coragem@email.com"
        });
        expect(arrayComplexo).toContainEqual({
            nome:"Alice",
            email: "alice@email.com"
        });

        expect(arrayComplexo[1].nome).toEqual("Bob");
    });

    test("Testando as negaçoes", ()=>{

        const soma = 11+7;
        expect(soma).not.toBe(15);
        
    });

});