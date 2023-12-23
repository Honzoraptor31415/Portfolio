const colors = ["#807AD6", "#5F9EC7", "#00FFFF", "#5C6AFF"]

function animate() {
  if (self.innerWidth <= 999) {
    for (let i = 0; i <= 30; i++) {
      let randomColor = colors[Math.ceil(Math.random() * colors.length - 1)]
      let element = document.createElement("div")
      element.classList.add("bg-element")
      element.style = `box-shadow:0 0 7px ${randomColor}, inset 0 0 7px ${randomColor};top:${Math.floor(Math.random() * 100)}%;left:${Math.floor(Math.random() * 100)}%;width:${Math.floor(Math.random() * 300)}px;height:${Math.floor(Math.random() * 300)}px;border-color:${randomColor}`
      document.getElementById("header-background").appendChild(element)
    }
  } else {
    for (let i = 0; i <= 100; i++) {
      let randomColor = colors[Math.ceil(Math.random() * colors.length - 1)]
      let element = document.createElement("div")
      element.classList.add("bg-element")
      element.style = `box-shadow:0 0 7px ${randomColor}, inset 0 0 7px ${randomColor};top:${Math.floor(Math.random() * 100)}%;left:${Math.floor(Math.random() * 100)}%;width:${Math.floor(Math.random() * 300)}px;height:${Math.floor(Math.random() * 300)}px;border-color:${randomColor}`
      document.getElementById("header-background").appendChild(element)
    }
  }
}

function load() {
  setTimeout(() => {
    if (document.getElementById("header-background")) {
      animate()
    } else {
      load()
    }
  }, 100);
}

load()