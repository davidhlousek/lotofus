// Fetch the manifesto text from the GitHub repository
fetch('https://raw.githubusercontent.com/davidhlousek/lotus-website/main/manifest.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load the manifesto');
        }
        return response.text();
    })
    .then(text => {
        document.getElementById('manifestText').innerText = text;
    })
    .catch(error => {
        console.error('Error loading manifesto:', error);
        document.getElementById('manifestText').innerText = 'Failed to load manifesto.';
    });

// Redirect to the Calendar page (local HTML file)
function redirectToCalendar() {
    window.location.href = "calendar.html"; // Ensure this file exists in the same directory
}

// Redirect to the Join Us page (local HTML file)
function redirectToJoinUs() {
    window.location.href = "join-us.html"; // Ensure this file exists in the same directory
}

// Redirect to the Are.na website (external link)
function redirectToArena() {
    window.location.href = "https://www.are.na/choco-star/lotus-9jmtwsari54"; // Link to the Are.na site
}

// Redirect to the GitHub edit page
function redirectToGitHub() {
    window.location.href = "https://github.com/davidhlousek/lotus-website/edit/main/manifest.txt";
}
function showInfo(context) {
    const infoTexts = {
        manifesto: "hi, this is our manifesto. feel free to add or delete anything you want. you can edit it by clicking on button and logging in your github account.",
        members: "hi, these are members of lotus. feel free to add yourself, even though you don't do anything yet. just your visit on this website counts. you can do that by clicking on button and logging in your github account.",
        calendar: "hi, this is our calendar. you can find all of our upcoming events marked here. by clicking on the export button you will download a calendar file which you can add to your google calendar or apple calendar so you don't have to look for info on any social sites bullshit."
    };

    document.getElementById("infoText").innerText = infoTexts[context];
    document.getElementById("infoPopup").classList.remove("hidden");
    document.getElementById("infoPopup").style.display = "block";
}

function closeInfo() {
    document.getElementById("infoPopup").classList.add("hidden");
    document.getElementById("infoPopup").style.display = "none";
}
