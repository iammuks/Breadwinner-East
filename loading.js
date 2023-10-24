window.addEventListener("load", function () {
    // Simulate loading delay (remove this in a real scenario)
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 1500); // Adjust the time as needed
});
