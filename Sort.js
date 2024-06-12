function insertedSort(a) {
    for (let i = 1; i < a.length; i++) {
        let last = a[i];
        let j = i;
        while ((j > 0) && (a[j - 1] > last)) {
            a[j] = a[j - 1];
            j = j - 1;
        }
        a[j] = last;
    }
    return a;
}
function selectionSort(a) {
    let tmp = 0
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                tmp = a[j];
                a[j] = a[i];
                a[i] = tmp;
            }
        }
    }
    return a;
}
function bubbleSort() {
    let tmp = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[j + 1]) {
                tmp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = tmp;
            }
        }
    }
    return a;
}

function partrition(arr, left, right) {
    let X = arr[left];
    let i = left + 1;
    let j = right;
    let tmp = 0;
    do {
        while ((i <= j) && (arr[i] <= X)) i++;
        while ((i <= j) && (arr[j] > X)) j--;
        if (i < j) {
            tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    } while (i <= j)
    tmp = a[left];
    a[left] = a[j];
    a[j] = tmp;
    return j;
}

function QuickSort(arr, left, right) {
    if (left < right) {
        let k = partrition(arr, left, right);
        QuickSort(arr, left, k - 1);
        QuickSort(arr, k + 1, right);
    }
}

function Merge(arr, left, right, mid) {
    let i = left;
    let j = mid + 1;
    let k = 0;
    let n = right - left + 1;
    let b = [];
    while ((i <= mid) && (j <= right)) {
        if (arr[i] < arr[j]) {
            b[k] = arr[i];
            k++; i++;
        } else {
            b[k] = arr[j];
            k++; j++;
        }
    }
    while (i <= mid) {
        b[k] = arr[i];
        k++; i++;
    }
    while (j <= right) {
        b[k] = arr[j];
        k++; j++;
    }
    i = left;
    for (k = 0; k < n; k++) {
        arr[i] = b[k];
        i++;
    }
}

function MergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);
        MergeSort(arr, left, mid);
        MergeSort(arr, mid + 1, right)
        Merge(arr, left, right, mid);
    }
}

function linearSearch(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) return i;
    }
    return -1;
}

function binarySearch(arr, k, left, right) {
    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] == k) return mid;

        if (arr[mid] > k) return binarySearch(arr, k, left, mid - 1);

        return binarySearch(arr, k, mid + 1, right);
    }
    return -1;

}
let a = [1, 23, 43, 51, 6, 3, 21, 35, 765, 33, 77, 27];
QuickSort(a,0,a.length - 1);
console.log(a);
console.log(linearSearch(a, 3));
console.log(binarySearch(a,3,0,a.length - 1));


