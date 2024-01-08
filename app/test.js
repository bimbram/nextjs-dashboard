let sum = 0;
let last24 = [];
for (let index = 0; index < data.length; index++) {
    if(index === 23) {
        sum += data[index];
        sum -= data[23];
        last24.push(sum);
    } else {
        sum += data[index];
    }
}
console.log(last24);