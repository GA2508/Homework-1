//                               Exercises 1
function getAngle(x, y) {
    if(x*0 === 0 & y * 0 === 0) {
        return 180 - x -y
    }
    return "nermuceq amboxj tiv"
}
console.log("Exercises 1")
console.log(getAngle(45, 90));
console.log(getAngle(30, 30));
console.log(getAngle(75, 25));


//                               Exercises 2
function sumOfN(a) {
    if (a * 0 === 0) {
        let strA = String(a);
        return a + Number(strA+strA) + Number(strA+strA+strA)
    }
    return "nermuceq amboxj tiv"
}
console.log("Exercises 2");
console.log(sumOfN(3));
console.log(sumOfN(17));
console.log(sumOfN(100));



//                                Exercises 3

function getRemainder(z,c) {
    if ((z % c === 0 ) || (c % z === 0)) {
        return 1;
    } 
        return 0;
    
}
console.log("Exercises 3");
console.log(getRemainder(3,14));
console.log(getRemainder(18,2));
console.log(getRemainder(7,21));


//                           Exercises 4





function getAverage(m, n, f, h, j) {
    let result = (m + n + f + h + j) / 5;

    return result;
}
console.log("Exercises 4");
console.log(getAverage(45, -12, 0, 3, -15));
console.log(getAverage(7, 52, -23, 9, -81));


//                             Exercises 5




function changeNumber(q) {
    let stringQ = String(q);
    let result = stringQ[stringQ.length - 1];

    if  (Number(result) !== 0) {
        for (let i = 0; i < stringQ.length - 1; i++) {
            result += stringQ[i];
        }
    } else result = q;

    result = Number(result);
    return result;
}
console.log("Exercises 5");
console.log(changeNumber(367));
console.log(changeNumber(1002));
console.log(changeNumber(250));
console.log(changeNumber(8));