//parameterize
      const str = "This is where I begin";
      function parameterize(data) {
        const str = data.split(" ");
        return str.join("-").toLowerCase();
      }
      console.log(parameterize(str));