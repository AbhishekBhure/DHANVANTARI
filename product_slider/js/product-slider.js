var span = document.getElementsByClassName("product-carousel-btn");
var cardItem = document.querySelectorAll(".card-item");
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of cardItem) {
        if (l == 0) { i.style.left = "0px";}
        if (l == 1) { i.style.left = "-340px"; } 
        if (l == 2) { 
            document.getElementById('bts').style.display = "none";
            i.style.left = "-680px"; }
        if (l == 2) { 
            document.getElementById('link-btn').style.display = "block";
            document.getElementById('link-btn').onclick = function () {
                location.href = "produtcs.html"
            };
            }
    }
}
span[0].onclick = () => {
    l--;
    for (var i of cardItem) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { 
            document.getElementById('link-btn').style.display = "none";
            document.getElementById('bts').style.display = "block";
            i.style.left = "-340px"; }
        if (l == 2) { i.style.left = "-680px"; }
        if (l < 0) { l = 0 }
        }
}

