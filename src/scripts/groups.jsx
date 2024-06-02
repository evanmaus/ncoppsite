// fetches data for each group
async function getGroups() {
  const response = await fetch("@/assets/data/groups.csv")
  const csv = (await response.text()).split("\n")
  const headers = csv[0].split(",")

  return csv
    .slice(1)
    .map((line) =>
      Object.fromEntries(
        headers.map((header, index) => [header, line.split(",")[index]])
      )
    )
}

// shows result for a specific row
async function showResult(row) {
  const resultPage = document.getElementById("resultPage")
  const data = await getGroups()

  resultPage.innerHTML += `<div id="results" class="m-auto text-center text-sm h-auto flex w-full">
    <a href="${data[row]["link"]}" target="_blank" class="mx-auto my-1.5 text-center text-sm h-auto w-3/12 font-bold">${data[row]["name"]}</a>
    <div class="mx-auto my-1.5 text-center text-sm h-auto w-1/5">${data[row]["location"]}</div>
    <div class="mx-auto my-1.5 text-center text-sm h-auto w-1/6">${data[row]["type"]}</div>
    <div class="mx-auto my-1.5 text-center text-sm h-auto w-2/5">${data[row]["description"]}</div>
  </div>`
}

async function process(locationOrType, list) {
  document.getElementById("resultPage").innerHTML = ""
  const data = await getGroups()
  const results = []

  for (let i = 0; i < data.length; i++) {
    if (data[i][locationOrType] && list.includes(data[i][locationOrType])) {
      results.push(i)
    }
  }
  for (let r of results) {
    showResult(r)
  }
}

async function showAll() {
  document.getElementById("resultPage").innerHTML = ""
  const data = await getGroups()
  for (let x = 0; x < data.length - 1; x++) {
    showResult(x)
  }
}

function filter(btn, x, list, col) {
  btn[x].addEventListener("click", function () {
    const name = btn[x].innerText
    const index = list.indexOf(name)
    if (index !== -1) {
      list.splice(index, 1)
      list.length === 0 ? showAll() : process(col, list)
    } else {
      list.push(name)
      process(col, list)
    }
    btn[x].classList.toggle("!bg-red-500")
  })
}

const locations = []
const typesOfGroups = []

showAll()

// toggles .selected class and filters when clicked on
for (let x = 0; x < 50; x++) {
  filter(
    document.getElementsByClassName("locationBtn"),
    x,
    locations,
    "location"
  )
  filter(
    document.getElementsByClassName("typeOfGroupBtn"),
    x,
    typesOfGroups,
    "type"
  )
}
