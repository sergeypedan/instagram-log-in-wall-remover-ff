// Utilities

function remove(html_node) {
  // html_node.style.display = "none"
  html_node.parentElement.removeChild(html_node)
}


// Modal

function candidates() {
  return Array.from(document.body.querySelectorAll('div[role="presentation"]'))
}

function modal_div() {
  return candidates().pop()
}

function remove_modal() {
  const div = modal_div()
  if (div) remove(div)
}


// Scrolling

function correct_scrolling() {
  document.body.style.overflow = null
}


// Banner

function bottom_banner_candidates() {
  return Array.from(document.body.querySelectorAll("div[style='width: 100%;']"))
}

function remove_bottom_banner() {
  const text = "Log in to see photos and videos"
  const divs = bottom_banner_candidates()
  const div  = divs.find(div => div.innerText.includes(text))
  if (div) remove(div)
}



// Actinos

setInterval(function() {
  remove_modal()
  correct_scrolling()
  remove_bottom_banner()
}, 5000)
