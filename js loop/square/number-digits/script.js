let too = window.prompt("too bichne uu");
      let urt = 0;
      while (too > 0) {
        urt++;
        too = Math.floor(too / 10);
      }
      console.log(urt);