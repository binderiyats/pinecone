function numbers1(a, b) {
        let array = [];
        if (a < b) {
          for (let i = a; i <= b; i++) {
            if (i % 2 === 0) {
              array.push(i);
            }
          }
        } else {
          for (let i = a; i >= b; i--) {
            if (i % 2 === 0) {
              array.push(i);
            }
          }
        }
        return array;
      }

      console.log(numbers1(80, 70));
      function numbers2(c, d) {
        let array = [];
        if (c < d) {
          for (let i = c; i <= d; i++) {
            if (i % 2 !== 0) {
              array.push(i);
            }
          }
        } else {
          for (let i = c; i >= d; i--) {
            if (i % 2 !== 0) {
              array.push(i);
            }
          }
        }
        return array;
      }
      console.log(numbers2(10, 20));