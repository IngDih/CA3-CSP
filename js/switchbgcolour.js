/* Switch colour button on page 2 */
var color = ["#caf7e3", "#b6b6d9", "#FFD2DD", "#FAFFDB", "#DBE9FF", "#FFDBDB"]
var i = 0;
document.querySelector(".button3").addEventListener("click",
    function () {
        i = i < color.length ? ++i : 0;
        document.querySelector("body").style.background = color[i]
    })