
// An event listener for toggling the sidebar menu
function handleToggleClick () {
  document.getElementById('hamburger-icon').classList.toggle("is-show-icon");
  document.getElementById('close-icon').classList.toggle("is-show-icon");
  document.getElementById('sidebar-wrapper').classList.toggle("hide-sidebar-menu");
  document.getElementById('nav-link-wrapper').classList.toggle("hide-sidebar-menu");
}