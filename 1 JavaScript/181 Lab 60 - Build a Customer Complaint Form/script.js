const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const prodCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const compGroup = document.getElementById("complaints-group");

const compGroupArr = [
  document.getElementById("damaged-product"),
  document.getElementById("nonconforming-product"),
  document.getElementById("delayed-dispatch"),
  document.getElementById("other-complaint")
];

const compDesc = document.getElementById("complaint-description");

const solnGroup = document.getElementById("solutions-group");

const solnGroupArr = [
  document.getElementById("refund"),
  document.getElementById("exchange"),
  document.getElementById("other-solution")
]

const solnDesc = document.getElementById("solution-description");

const clearBtn = document.getElementById("clear-btn");

const msgBox = document.getElementById("message-box");

const elArr = [
  {
    name: 'full-name',
    element: fullName
  },
  {
    name: 'email',
    element: email
  },
  {
    name: 'order-no',
    element: orderNo
  },
  {
    name: 'product-code',
    element: prodCode
  },
  {
    name: 'quantity',
    element: quantity
  },
  {
    name: 'complaints-group',
    element: compGroup
  },
  {
    name: 'complaint-description',
    element: compDesc
  },
  {
    name: 'solutions-group',
    element: solnGroup
  },
  {
    name: 'solution-description',
    element: solnDesc
  }
];

function validateForm() {
  const isValid = {
    'full-name': true,
    'email': true,
    'order-no': true,
    'product-code': true,
    'quantity': true,
    'complaints-group': true,
    'complaint-description': true,
    'solutions-group': true,
    'solution-description': true
  }

  const regEmail = /\w+@\w+\.com/i;
  const regOrderNo = /2024\d{6}/;
  const regProdCode = /[a-z][a-z]\d\d\-[a-z]\d{3}-[a-z][a-z]\d/i;

  if (fullName.value === "") {
    isValid['full-name'] = false;
  }
  if (!regEmail.test(email.value)) {
    isValid['email'] = false;
  }
  if (!regOrderNo.test(orderNo.value)) {
    isValid['order-no'] = false;
  }
  if (!regProdCode.test(prodCode.value)) {
    isValid['product-code'] = false;
  }
  if (quantity.value <= 0) {
    isValid['quantity'] = false;
  }
  if (!compGroupArr.some(comp => comp.checked)) {
    isValid['complaints-group'] = false;
  }
  if(compGroupArr[3].checked && compDesc.value.length < 20) {
    isValid['complaint-description'] = false;
  } else {
    isValid['complaint-description'] = true;
  }
  if (!solnGroupArr.some(soln => soln.checked)) {
    isValid['solutions-group'] = false;
  }
  if(solnGroupArr[2].checked && solnDesc.value.length < 20) {
    isValid['solution-description'] = false;
  } else {
    isValid['solution-description'] = true;
  }

  return isValid;
}

function isValid(valState) {
  for(const state in valState) {
    if (!valState[state]) {
      return false;
    }
  }
  return true;
}

elArr.forEach(el => el.element.addEventListener("change", () => {
  if(validateForm()[el.name]) {
    el.element.style.borderColor = "green";
  } else {
    el.element.style.borderColor = "red";
  }
}));

clearBtn.addEventListener("click", () => {
  msgBox.textContent = "";
  elArr.forEach(el => el.element.style.borderColor = "rgb(118, 118, 118)");
});

form.addEventListener("submit", () => {
  if(!isValid(validateForm())) {
    elArr.forEach(el => {
      if(validateForm()[el.name]) {
        el.element.style.borderColor = "green";
      } else {
        el.element.style.borderColor = "red";
      }
    });
    msgBox.textContent = "Please fill out the required fields correctly.";
  }
});