let register = window.prompt("regsiteree bichne uu");
      let alphs = register.substring(0, 2);
      let numbers = register.substring(2, 10);
      register.length === 10 && !Number(alphs)
        ? console.log("Зөв оруулсан байна")
        : console.log("Буруу оруулсан байна");