const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const result = document.getElementById("result");
const submit = document.getElementById("form");

submit.addEventListener("submit", (e) =>{
    e.preventDefault();
    result.value = Number(value1.value) + Number(value2.value);
});
