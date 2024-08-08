function calculate() {
    let liters = document.getElementById('liters').value
    let kilometers = document.getElementById('kilometers').value

    let consumption = (kilometers / liters)

    document.getElementById('consumption').innerHTML = consumption
}