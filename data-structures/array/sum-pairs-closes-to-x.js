// function sumClosest(arr, x) {
//   let i = 0;
//   let j = arr.length - 1;

//   // 54 - 10 + 40 = 4
//   // 54 - 22 + 40 = -8
//   // 54 - 22 + 30 = 2
//   // 54 - 28 + 30 = -4
//   // 54 - 28 + 29 = -3
//   // 54 - 28 + 28 = -3

//   let min = Number.POSITIVE_INFINITY;
//   while (i !== j) {
//     let diff = x - (Number(arr[i]) + Number(arr[j]));
//     if (diff > 0 && diff < min) {
//       min = diff;
//     }

//     if (diff > 0) {
//       i++;
//     } else {
//       j--;
//     }
//   }

//   return min;
// }

// let arr = ["10", "22", "28", "29", "30", "40"];
// console.log(sumClosest(arr, 54));

function longestKSubstr(s, k) {
  //code here
  let strArr = s.split("");
  let set1 = new Set(strArr);
  let result = strArr.slice(0);

  // console.log(set1.size);
  // console.log(s.length);
  if (set1.size < k) return -1;

  // console.log(k);

  // console.log(set1.size);
  //   let i = 0;
  //   while (set1.size !== k && i < strArr.length) {
  //     console.log(strArr.slice(i));
  //     result = strArr.slice(i);
  //     set1 = new Set(strArr.slice(i));
  //     console.log(set1.size);
  //     i = i + 1;
  //   }

  //   i = strArr.length - 1;
  //   set1 = new Set(strArr);
  //   while (set1.size !== k && i >= 0) {
  //     console.log(strArr.slice(0, i));
  //     result = strArr.slice(0, i);
  //     set1 = new Set(strArr.slice(0, i));
  //     console.log(set1.size);
  //     i = i - 1;
  //   }

  // console.log(result)

  let temp = [];

  for (let i = 0; i < s.length; i++) {
    for (j = k; j < s.length; j++) {
      temp.push(s.substring(i, j));
      console.log(temp[i]);
    }
  }

  let max = 0;
  let maxresult = "";
  for (let i = 0; i < temp.length; i++) {
    set1 = new Set(temp[i]);
    if (set1.size === k && temp[i].length > max) {
      // console.log(temp[i]);
      maxresult = temp[i];
      // break;
    }
  }

  console.log(maxresult);

  return result.length > 0 ? result.length : "-1";
}

longestKSubstr(
  "wlrbbmqbhcdarzowkkyhiddqscdxrjmowfrxsjybldbefsarcbynecdyggxxpklorellnmpapqfwkhopkmco",
  5
);
