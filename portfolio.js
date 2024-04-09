var slideIndex = 0
carousel()

function carousel() {
    // Cycles through paintings every 2 seconds
    var i
    var x = document.getElementsByClassName("gallery")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    slideIndex ++
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex - 1].style.display = "block"
    setTimeout(carousel, 2000)
}

var itemChecked = false
var abstractChecked = false
var landscapeChecked = false
var peopleChecked = false
var skullChecked = false
var coverChecked = false

function filterPaintings(c) {
    console.log(c)
    // toggle checked
    if (c == "item" && itemChecked) { 
        itemChecked = false
    } else if (c == "abstract" && abstractChecked) {
        abstractChecked = false
    } else if (c == "landscape" && landscapeChecked) {
        landscapeChecked = false
    } else if (c == "people" && peopleChecked) {
        peopleChecked = false
    } else if (c == "skull" && skullChecked) {
        skullChecked = false
    } else if (c == "cover" && coverChecked) {
        coverChecked = false
    } else if (c == "item" && !itemChecked) {
        itemChecked = true
    } else if (c == "abstract" && !abstractChecked) {
        abstractChecked = true
    } else if (c == "landscape" && !landscapeChecked) {
        landscapeChecked = true
    } else if (c == "people" && !peopleChecked) {
        peopleChecked = true
    } else if (c == "skull" && !skullChecked) {
        skullChecked = true
    } else if (c == "cover" && !coverChecked) {
        coverChecked = true
    }
    // hide unchecked items first
    if (!itemChecked) {
        var elements = Array.from(document.getElementsByClassName("item"))
        hideVisibility(elements)
    }
    if (!abstractChecked) {
        var elements = Array.from(document.getElementsByClassName("abstract"))
        hideVisibility(elements)
    }
    if (!landscapeChecked) {
        var elements = Array.from(document.getElementsByClassName("landscape"))
        hideVisibility(elements)
    } 
    if (!peopleChecked) {
        var elements = Array.from(document.getElementsByClassName("people"))
        hideVisibility(elements)
    } 
    if (!skullChecked) {
        var elements = Array.from(document.getElementsByClassName("skull"))
        hideVisibility(elements)
    } 
    if (!coverChecked) {
        var elements = Array.from(document.getElementsByClassName("cover"))
        hideVisibility(elements)
    } 
    // show checked elements
    if (itemChecked) {
        var elements = Array.from(document.getElementsByClassName("item"))
        showVisibility(elements)
    } 
    if (abstractChecked) {
        var elements = Array.from(document.getElementsByClassName("abstract"))
        showVisibility(elements)
    } 
    if (landscapeChecked) {
        var elements = Array.from(document.getElementsByClassName("landscape"))
        showVisibility(elements)
    } 
    if (peopleChecked) {
        var elements = Array.from(document.getElementsByClassName("people"))
        showVisibility(elements)
    } 
    if (skullChecked) {
        var elements = Array.from(document.getElementsByClassName("skull"))
        showVisibility(elements)
    } 
    if (coverChecked) {
        var elements = Array.from(document.getElementsByClassName("cover"))
        showVisibility(elements)
    }
}

function toggleVisibility(elements) {
    elements.forEach(el => {
        visible = el.checkVisibility()
        if (visible) {
            el.style.display = 'none'
        } else {
            el.style.display = "inline-grid"
        }
        
    });

}
function hideVisibility(elements) {
    elements.forEach(el => {
        el.style.display = 'none'
    })
}

function showVisibility(elements) {
    elements.forEach(el => {
        el.style.display = 'inline-grid'
    })
}