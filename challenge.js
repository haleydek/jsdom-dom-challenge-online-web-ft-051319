document.addEventListener("DOMContentLoaded", function() {
    const up = document.getElementById("+");
    const down = document.getElementById("-");
    const likeButton = document.getElementById("<3");

    function counterUp () {
        let counter = document.querySelector("h1#counter").innerHTML;
        let number = parseInt(counter, 10);

        document.querySelector("h1#counter").innerHTML = `${number + 1}`;
        // hideOtherLikes();
    };
    
    function counterDown () {
        let counter = document.querySelector("h1#counter").innerHTML;
        let number = parseInt(counter, 10);

        if (number >= 1) {
            document.querySelector("h1#counter").innerHTML = `${number - 1}`;
        };
        // hideOtherLikes();
    };

    function hideOtherLikes () {
        let likes = document.getElementsByTagName("ul")[0].children;
        let counter = document.querySelector("h1#counter").innerText;

        // if (likes.length > 0) {
        //     likes.filter(like => (like.id != counter))
        //     .map(like => like.style.display = "none");

        //     document.getElementById(`${counter}`).style.display = "list-item";
        // };
    };

    function like () {
        let counterNumber = document.querySelector("h1#counter").innerText;
        let ul = document.getElementsByTagName("ul")[0];
        

        if (ul.childNodes.length == 0) {
            let li = document.createElement("li");
            li.id = `${counterNumber}`;
            li.innerHTML = "1";
            ul.appendChild(li);
        }

        else if (document.getElementById(`${counterNumber}`)) {
            let liForCounterNumber = document.getElementById(`${counterNumber}`);
            let likeCount = parseInt(liForCounterNumber.innerText, 10);
            liForCounterNumber.innerHTML = `${likeCount + 1}`;
        }

        else {
            let li = document.createElement("li");
            li.id = `${counterNumber}`;
            li.innerHTML = "1";
            ul.appendChild(li);
        }
    };

    up.addEventListener("click", counterUp);
    down.addEventListener("click", counterDown);
    likeButton.addEventListener("click", like);
});