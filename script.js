const localStorageKey = "to-do-list-gn"

function validateNewtask() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
  let inputvalues = document.getElementById("task").value
  let existe = values.find((x) => x.name == inputvalues)
  return !existe ? false : true
}

function newTask() {
  let input = document.getElementById("task")

  //validação
  if (!input.value) {
    alert("Digite uma tarefa")
  } else if (validateNewtask()) {
    alert("Essa tarefa já existe")
  } else {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    values.push({
      name: input.value,
    })
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues()
  }
  input.value = ""
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
  let list = document.getElementById("to-do-list")
  list.innerHTML = ""
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]["name"]}<button id='btn-ok' onclick ='removeItem("${values[i]["name"]}")'><ion-icon name="checkbox"></ion-icon></button></li>`
  }
}
function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
  let index = values.findIndex((x) => x.name == data)
  values.splice(index, 1)
  localStorage.setItem(localStorageKey, JSON.stringify(values))
  showValues()
}

showValues()
