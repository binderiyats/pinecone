//oocher #1
      const queueLine = [
        "Бат",
        "Дорж",
        "Пунцаг",
        "Готов",
        "Баяраа",
        "Болд",
        "Навчаа",
        "Гончигсумлай",
        "Цэцгээ",
        "Нэргүй",
        "Бальбийгомбо",
        "Баатар",
        "Сүхээ",
      ];
      function isQueue(egch1, egch2) {
        queueLine.splice(8, 0, egch1, egch2);
      }
      isQueue("tsetsgee", "burmaa");
      console.log(queueLine);
      //oocher #2
      const firstTen = queueLine.slice(0, 10);
      console.log(firstTen);
