export function readCookie (name) {
  var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'))
  return (match ? decodeURIComponent(match[3]) : null)
}
