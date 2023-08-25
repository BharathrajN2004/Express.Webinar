// normal function
const x = 10;

function NormalFun() {
    let a = 10;
    return a + x;
}
// console.log(NormalFun());

function ParamFun(x, y) {
    return x * y;
}
// console.log(ParamFun(10, 20));

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}
fetchData().then((value) => {
    // console.log(value);
});

// console.log('Fetching data...');

async function* myGenerator(step) {
    await new Promise((resolve) => setTimeout(resolve, 10));
    yield 0;
    yield step;
    yield step * 2;
}

const gen = myGenerator(2);
// gen
//     .next()
//     .then((res) => {
//         console.log(res); // { value: 0, done: false }
//         return gen.next();
//     })
//     .then((res) => {
//         console.log(res); // { value: 2, done: false }
//         return gen.next();
//     })
//     .then((res) => {
//         console.log(res); // { value: 4, done: false }
//         return gen.next();
//     })
//     .then((res) => {
//         console.log(res); // { value: undefined, done: true }
//         return gen.next();
//     });


// lambda function

const LambdaFun = (x, y) => {
    return x + y;
}
console.log(LambdaFun(10, 20));

const AsyncLambdaFun = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/10');
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

AsyncLambdaFun().then((value) => {
    console.log(value);
});