let tables = document.getElementsByTagName('table')

let tableWrapper

for (let table of tables) {
    tableWrapper = document.createElement('div')
    tableWrapper.classList.add('table-responsive')

    table.parentNode.insertBefore(tableWrapper, table)

    tableWrapper.appendChild(table)
}