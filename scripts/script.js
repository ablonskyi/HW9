let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumPositiveElements = 0;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
        sumPositiveElements += arr[i];
    }
}
alert(sumPositiveElements);

let maxElement = arr[0];
for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    }
}
alert(maxElement);

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
        sumPairedPositiveElements += sumPairedPositiveElements;
    }
}
alert(sumPairedPositiveElements);

let sumUnpairedPositiveElements = 0;
for(let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 != 0) {
        sumUnpairedPositiveElements += sumUnpairedPositiveElements;
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


