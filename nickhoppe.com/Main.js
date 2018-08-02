$(document).ready(() => {



    var x = document.querySelector("#testword");
    x.addEventListener("click", updateName);

    function updateName() {
        var newWord = prompt("Enter a new name");
        x.textContent = "The new word is " + newWord;
    }

    //////////////////////////////////////////////
    var y = document.querySelector("#changetoo");
    y.addEventListener("click", updateNameToo);

    function updateNameToo() {
        var newWordToo = prompt("Enter a new word");
        y.textContent = ("The new word is " + newWordToo);
    }

    ///////////////////////////////////////////////////

    









});
