export function id(path) {
    return document.getElementById(path)
}

export function one(path) {
  return document.querySelector(path)
}

export function all(path) {
  return document.querySelectorAll(path)
}

export function showPanel(name) {
    // document.querySelectorAll('.panel').forEach((node)=>node.style.display='none')
    all('.panel').forEach((node)=>node.style.display='none')
    id(name).style.display = 'block'
}
