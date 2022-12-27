const modal = new bootstrap.Modal(document.getElementById('carModal'));

const getCars = async () => {
    const res =  await fetch(`http://localhost:3333/api/cars`);    
    const data =  await res.json();
    return data;
};

const currencyFormatter = (value) =>
    new Intl.NumberFormat('mn-MN', { maximumSignificantDigits: 3 }).format(value);

const getCarCard = (car) => {
    return `   
        <div class="col-3">
          <div class="card">
            <div class="ratio ratio-4x3">
              <img class="card-img-top" src="${car.imageUrl}" />
            </div>
            <div class="card-body">
              <p class="card-name">${car.model}</p>
              <p class="card-category">${car.brand}</p>
              <p class="card-name card-price">${currencyFormatter(car.price)}₮</p>
              <div class="d-flex justify-content-end gap-1" >
                <button type="button" class="btn btn-success btn-sm" onclick="editCar(${car.id})">Edit
                </button>
                <button type="button" class="btn btn-danger btn-sm" onclick="deleteCar(${car.id})">Delete
                </button>
              </div>
            </div>
          </div>
        </div>`
};

const carsTarget = document.getElementById('cars');

const getCarsHtml = async () => {
    carsTarget.innerHTML = ``;
    const cars = await getCars();
    for (const car of cars) {
        carsTarget.innerHTML += getCarCard(car);
    }
};

getCarsHtml();

const submitBtn = document.getElementById('formSubmit');

const imageUrlTarget = document.getElementById('imageUrl');
const modelTarget = document.getElementById('model');
const brandTarget = document.getElementById('brand');
const priceTarget = document.getElementById('price');

submitBtn.addEventListener('click', async () => {
    const newCar = {
        imageUrl: imageUrlTarget.value,
        model: modelTarget.value,
        brand: brandTarget.value,
        price: priceTarget.value,
    };
     const req = await fetch ('http://localhost:3333/api/cars',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(newCar),
     });
     const res = await req.json();
     console.log(res);
     modal.hide();
     getCarsHtml();
    });

const deleteCar = (id) => {
    if(confirm('Are you sure to delete?'))
    fetch('http://localhost:3333/api/cars',{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id})
    })
    .then((res) => res.json())
    .catch((err)=> {
        alert('Successfully Deleted!');
        getCarsHtml();
    });
};


const getCar = async(id) => {
    const res = await fetch('http://localhost:3333/api/cars' + id);
    const data = await res.json();

}

const editCar = (id) => {
    fetch(`http://localhost:3333/api/cars/${id}`)
    .then(res => res.json())
    .then(car => {
        imageUrlTarget.value = car.imageUrl;
        modelTarget.value = car.model;
        brandTarget.value = car.brand;
        priceTarget.value = car.price;
        modal.show();
        
    });

    // fetch('http://localhost:3333/api/cars', {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body : JSON.stringify(newCar),
    // })
}

