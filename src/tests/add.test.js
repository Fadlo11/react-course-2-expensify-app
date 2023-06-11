const add = (a, b) => (a+b)

test('should add two numbers',() =>{
    const result = add(3,4);

    expect(result).toBe(7)
})

const generateGreeting = (name) => `Hello ${name}!`

test('should return Hello and the name!', () => {
    const result = generateGreeting('Fadel')

    expect(result).toBe('Hello Fadel!')
})