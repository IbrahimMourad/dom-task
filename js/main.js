const list = document.querySelector('#cart-list ul');
const forms = document.forms;

const countInp = document.querySelectorAll('.count');
const total = document.querySelectorAll('#totalInput')[0];

// delete
list.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  } else if (e.target.className === 'add') {
    // Add to quantity

    var addInput = e.target.nextElementSibling;
    var currentQty = parseInt(addInput.value);

    addInput.value = currentQty + 1;
    getTotal();
  } else if (e.target.className === 'remove') {
    // Decrease Quantity
    var input = e.target.previousElementSibling;
    var currentQty = parseInt(input.value);

    if (currentQty > 0) {
      input.value = currentQty - 1;
      getTotal();
    }
  }
});

// DELETE carts
const DelBox = document.querySelector('#deleteall');
DelBox.addEventListener('change', function (e) {
  if (DelBox.checked) {
    var div = document.getElementById('cart-list');
    div.innerHTML = '';
    total.value = 0;
  }
});
//add count
//subtract content

function getTotal() {
  var sum = 0;

  countInp.forEach((el) => {
    sum += parseInt(el.value);
  });

  total.value = sum;
  return sum;
}

getTotal();

// test comit
