var path = window.location.pathname.split('/');
path.includes("en") ? UIkit.toggle('#toggle-lang').toggle() : null;
path.includes("shop") ? UIkit.tab("#tabs-main").show(1) : null;
path.includes("commission") ? UIkit.tab("#tabs-main").show(2) : null;
path.includes("live") ? UIkit.tab("#tabs-main").show(3) : null;

// document.getElementById("tab-home").addEventListener("click", function()
// {
//   window.history.replaceState(
//   {}, null, "/");
// }, false);
//
// document.getElementById("tab-shopu").addEventListener("click", function()
// {
//   window.history.replaceState(
//   {}, null, "/shop");
// }, false);
//
// document.getElementById("tab-commission").addEventListener("click", function()
// {
//   window.history.replaceState(
//   {}, null, "/commission");
// }, false);
//
// document.getElementById("tab-liveu").addEventListener("click", function()
// {
//   window.history.replaceState(
//   {}, null, "/live");
// }, false);