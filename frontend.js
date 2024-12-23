
document.getElementById("clone-button").addEventListener("click", async () => {
    // Used a free proxy to prevent Browser from using SOP and blocking the data
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';

    const url = document.getElementById("url-input").value;

    const content = document.getElementById("content");

    try {
        if (url == "") {         //If url is empty then alert
            alert("Please enter a valid url");
        } else {

            const data = await fetch(corsProxy + url);
            const response = await data.text();

            if (response.ok) {
                alert("Ohh! Security it too much on this website");
                throw new Error("Failed to fetch data bruh!");
            } else {
                content.innerHTML = response;
            }
        }
    } catch (error) {
        content.innerHTML = "";
        console.error("Error generating the Page", error);
    }

});

