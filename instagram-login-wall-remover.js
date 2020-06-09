// Utilities

function remove_if_exists(node, label) {
  // node.style.display = "none"
  if (!node) return
  console.info("Removing", label)
  node.parentElement.removeChild(node)
}

function has_a_child_of_type(node, type) {
  return node.getElementsByTagName(type).length > 0
}

function has_a_child_of_query(node, query) {
  return node.querySelectorAll(query).length > 0
}

function includes_one_of_strings(node, strings) {
  return strings.some(string => node.innerText.includes(string))
}


// Modal

function modal_div() {
  var divs = document.body.querySelectorAll('div[role="presentation"]')
  divs = Array.from(divs)
  divs = divs.filter(div => has_a_child_of_type(div, "form"))
  divs = divs.filter(div => has_a_child_of_type(div, "button"))
  divs = divs.filter(div => has_a_child_of_query(div, "input[name=\"username\"]"))
  return divs[0]
}


// Scrolling

function correct_scrolling() {
  if (document.body.style.overflow === "") return
  console.info("Re-enabling page scrolling")
  document.body.style.overflow = ""
}


// Banner

function bottom_banner() {
  var divs = document.body.querySelectorAll("div[style='width: 100%;']")
  divs = Array.from(divs)
  divs = divs.filter(div => has_a_child_of_type(div, "button"))
  divs = divs.filter(div => div.innerText.includes("Instagram"))
  divs = divs.filter(div => includes_one_of_strings(div, ["Log in", "Log In", "Войти", "Войдите", "Зарегистрироваться"]))
  return divs[0]
}



// Page checks

function at_photo_page() {
  return location.pathname.includes("/p/")
}



// Actions

setInterval(function() {
  remove_if_exists(bottom_banner(), "bottom banner")
  if (!at_photo_page()) {
    remove_if_exists(modal_div(), "modal dialog layer")
    correct_scrolling()
  }
}, 5000)
