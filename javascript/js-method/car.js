    const carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
        ["Audi", "Germany", 2016],
        ["BMW", "Germany", 2016],
        ["Chevrolet", "USA", 2016],
        ["Dodge", "USA", 2016],
        ["Ferrari", "Italy", 2016],
        ["Honda", "Japan", 2016],
        ["Jaguar", "UK", 2016],
        ["Lamborghini", "Italy", 2016],
      ];
      function searchByFirstDigit(brands, letter) {
        const carNames = [];
        for (let i = 0; i < brands.length; i++) {
          carNames.push(brands[i][0]);
        }
        const result = [];
        for (let i = 0; i < carNames.length; i++) {
          if (carNames[i][0].toLowerCase() === letter.toLowerCase()) {
            result.push(brands[i]);
          }
        }
        return result;
      }
      //   const search = prompt("");
      //   console.log(searchByFirstDigit(carBrands, search));