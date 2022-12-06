r = 5;
      k = "";
      for (let i = 1; i <= 5; i++) {
        // hooson zaig hewleh dawtalt
        for (let j = 1; j <= r - i; j++) {
          k += " ";
        }
        // ** hewleh
        for (let x = 1; x <= i * 2 - 1; x++) {
          k += "*";
        }
        k += "\n";
      }
      console.log(k);