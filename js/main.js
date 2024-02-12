console.log(data);

var Card = document.querySelector("#card")

for (var i = 0; i < data.length; i++) {
    const element = data[i];

    var Box = document.createElement("div")
    Box.className = "box"

    var BoxImage = document.createElement("img")
    BoxImage.className = "img"
    BoxImage.setAttribute("src", element.image)

    var BoxText = document.createElement("div")
    BoxText.className = "text"

    var TextTop = document.createElement("div")
    TextTop.className = "top"

    var TextLeft = document.createElement("div")
    TextLeft.className = "left"

    var Name = document.createElement("small")
    Name.className = "name"
    Name.textContent = element.Name

    var leftTop = document.createElement("h3")
    leftTop.textContent = "Yellow Painting"
    leftTop.className = "h3"

    var TextRight = document.createElement("div")
    TextRight.className = "right"

    var RightTop = document.createElement("p")
    RightTop.className = "top"
    RightTop.textContent = "Current Bid"

    var Price = document.createElement("h3")
    Price.className = "price"
    Price.textContent = element.price

    var Button = document.createElement("button")
    Button.className = "button"
    Button.textContent = "Place a bid"

    TextLeft.appendChild(Name)
    TextLeft.appendChild(leftTop)

    TextRight.appendChild(RightTop)
    TextRight.appendChild(Price)

    TextTop.appendChild(TextLeft)
    TextTop.appendChild(TextRight)

    BoxText.appendChild(TextTop)
    BoxText.appendChild(Button)

    Box.appendChild(BoxImage)
    Box.appendChild(BoxText)

    Card.appendChild(Box)

}


console.log(data2);

var Card = document.querySelector("#artwork")

for (var i = 0; i < data2.length; i++) {
    const element = data[i];

    var Box = document.createElement("div")
    Box.className = "box"

    var BoxImage = document.createElement("img")
    BoxImage.className = "img"
    BoxImage.setAttribute("src", element.image)

    var BoxText = document.createElement("div")
    BoxText.className = "text"

    var TextTop = document.createElement("div")
    TextTop.className = "top"

    var TextLeft = document.createElement("div")
    TextLeft.className = "left"

    var Name = document.createElement("small")
    Name.className = "name"
    Name.textContent = element.Name

    var leftTop = document.createElement("h3")
    leftTop.textContent = "Yellow Painting"
    leftTop.className = "h3"

    var TextRight = document.createElement("div")
    TextRight.className = "right"

    var RightTop = document.createElement("p")
    RightTop.className = "top"
    RightTop.textContent = "Current Bid"

    var Price = document.createElement("h3")
    Price.className = "price"
    Price.textContent = element.price

    var Button = document.createElement("button")
    Button.className = "button"
    Button.textContent = "Place a bid"

    TextLeft.appendChild(Name)
    TextLeft.appendChild(leftTop)

    TextRight.appendChild(RightTop)
    TextRight.appendChild(Price)

    TextTop.appendChild(TextLeft)
    TextTop.appendChild(TextRight)

    BoxText.appendChild(TextTop)
    BoxText.appendChild(Button)

    Box.appendChild(BoxImage)
    Box.appendChild(BoxText)

    Card.appendChild(Box)

}

console.log(creators);
var Creators = document.querySelector("#creators")

for (var i = 0; i < creators.length; i++) {
    const element = creators[i];

    var Box = document.createElement('div')
    Box.className = "box"

    var BackImage = document.createElement("img")
    BackImage.className = "box__img"
    BackImage.setAttribute( "src", element.image)

    var BoxText = document.createElement("div")
    BoxText.className = "text"

    var BoxAvatar = document.createElement("img")
    BoxAvatar.className = "avatar"
    BoxAvatar.getAttribute("src", element.avatar)

     var Name = document.createElement("h3")
     Name.className = "name"
     Name.textContent = element.Name

     var BoxComment = document.createElement("p")
     BoxComment.className = "comment"
     BoxComment.textContent = element.Comment

     var Button = document.createElement("button")
     Button.className = "button"
     Button.textContent = "+ Follow"

     BoxText.appendChild(Name)
     BoxText.appendChild(BoxComment)
     BoxText.appendChild(Button)

     Box.appendChild(BackImage)
     Box.appendChild(BoxAvatar)
     Box.appendChild(BoxText)
    
Creators.appendChild(Box)
}