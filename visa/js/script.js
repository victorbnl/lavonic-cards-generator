function init() {
    // Get canvas and drawing context
    let canvas = document.getElementById("result")
    var ctx = canvas.getContext('2d')

    // Draw card background
    var background = document.getElementById("identity_card_image")
    ctx.drawImage(background, 0, 0)

    // Security code
    document.getElementById("security_code").innerText = "00000"
}

function generate() {
    // Get values
    let discord = document.getElementById("discord").value
    let coordinates = "["
        + document.getElementById("coordinates_x1").value
        + ":"
        + document.getElementById("coordinates_y1").value
        + "]"
    let region = document.getElementById("region").value
    let type = document.getElementById("type").value
    let reason = document.getElementById("reason").value
    let emission_city = document.getElementById("emission_city").value

    // Get canvas and drawing context
    let canvas = document.getElementById("result")
    var ctx = canvas.getContext('2d')

    // Draw card background
    var background = document.getElementById("visa_image")
    ctx.drawImage(background, 0, 0)

    // Draw text informations
    var cascadiaMonoFont = new FontFace('Cascadia Mono', 'url(assets/fonts/CascadiaMono.ttf)');
    cascadiaMonoFont.load().then(function(font) {
        document.fonts.add(font);
        ctx.font = "12px Cascadia Mono"
        ctx.textAlign = "left"
        ctx.fillStyle = "black"
        let today = new Date(Date.now())
        ctx.fillText(today.toLocaleDateString(), 233, 78)
        let exp = new Date(Date.now())
        exp.setFullYear(exp.getFullYear() + 5)
        ctx.fillText(exp.toLocaleDateString(), 226, 96)
        ctx.fillText(type, 190, 124)
        ctx.fillText(reason, 232, 153)
        ctx.fillStyle = "#EF8B03"
        ctx.fillText(emission_city, 208, 228)
        ctx.textAlign = "center"
        ctx.fillText(discord, 51, 106)
        ctx.fillText(coordinates, 51, 124)
        ctx.fillText(region, 51, 142)
    });
}

function save() {
    // Get canvas
    let canvas = document.getElementById("result")

    // Export image
    let img = canvas.toDataURL()

    // Redirect to the image download
    var link = document.createElement('a')
    link.download = 'visa.png'
    link.href = img
    link.click()
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}