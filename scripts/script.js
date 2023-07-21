let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumPositiveElements = 0;
let positiveElementsCount  = 0;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
        sumPositiveElements += arr[i];
        positiveElementsCount++;
    }
}
alert(`${sumPositiveElements}\nКількість: ${positiveElementsCount}`);

let minElement = arr[0];
let iNumber = 0;
for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        iNumber = i;
    }
}
alert(`${minElement}\nПорядковий номер ${iNumber}`);

let maxElement = arr[0];
for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
        iNumber = i;
    }
}
alert(`${maxElement}\nПорядковий номер ${iNumber}`);

let negotiveElementsCount = 0;
for(let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
        negotiveElementsCount++;
    }
}
alert(negotiveElementsCount);

let unpairedPositiveElementsCount = 0;
for(let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 != 0) {
        unpairedPositiveElementsCount++;
    }
}
alert(unpairedPositiveElementsCount);

let pairedPositiveElementsCount = 0;
for(let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
        pairedPositiveElementsCount++;
    }
}
alert(pairedPositiveElementsCount);

let sumPairedPositiveElements = 0;
for(let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
        sumPairedPositiveElements += arr[i];
    }
}
alert(sumPairedPositiveElements);

let sumUnpairedPositiveElements = 0;
for(let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 != 0) {
        sumUnpairedPositiveElements += arr[i];
    }
}
alert(sumUnpairedPositiveElements);

let multiplePositiveElements = 1;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
        multiplePositiveElements = multiplePositiveElements * arr[i];
    }
}
alert(multiplePositiveElements);

for (let i = 0; i <= arr.length; i++){
    if (arr[i] < maxElement) {
        arr[i] = 0;
    }
}
alert(arr);


