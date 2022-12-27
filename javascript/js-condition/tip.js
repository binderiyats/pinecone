//Tip Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮. (if else ашиглахгүй ternary operator ашиглаарай).

let price = Number(window.prompt('Hoolnii une oruulna uu'));

let tip = price < 5000 ? price * .1
: 5000 < price < 30000 ?  price * .15
: price > 30000 ?  price * .20
: "tip undefined";
let total = price + tip;
console.log(`price: ${price}, \t tip: ${tip}, \t total: ${total} `);