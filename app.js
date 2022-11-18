const search = () => {
    let searchbox = document.getElementById("search-item").value;
    searchbox = searchbox.toUpperCase()
    const product = document.querySelectorAll(".product")
    const pname = document.getElementsByTagName("h2")
    console.log(searchbox)
    for (let i = 0; i < product.length; i++) {
        let match = pname[i].innerText.toUpperCase();

        if (match.includes(searchbox)) {
            console.log("yes")

            product[i].style.display = "flex";
        }
        else {
            product[i].style.display = "none";
        }
    }
}




