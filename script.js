const API_TOKEN = 'WBD2mGwtx0qO3JWA0wBwHUbD6JkAc2dZePnu04aBBZE';
const BLOCK_ID = '32928673';

async function fetchBlockContent() {
    try {
        const response = await fetch(`https://api.are.na/v2/blocks/${BLOCK_ID}`, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch block content');

        const data = await response.json();
        document.getElementById('manifestText').innerText = data.content || '';
    } catch (error) {
        console.error('Error fetching block content:', error);
        alert('Failed to load content. Please try again later.');
    }
}

async function updateBlockContent() {
    const content = document.getElementById('manifestText').innerText;
    try {
        const response = await fetch(`https://api.are.na/v2/blocks/${BLOCK_ID}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        });
        if (!response.ok) throw new Error('Failed to update block content');
        alert('Content updated successfully!');
    } catch (error) {
        console.error('Error updating block content:', error);
        alert('Failed to update content. Please try again later.');
    }
}

function showInfo(context) {
    const infoTexts = {
        manifesto: "hi, this is our manifesto. feel free to add or delete anything you want. you can edit it by clicking on button and logging in your github account.",
        members: "hi, these are members of lotus. feel free to add yourself, even though you don't do anything yet. just your visit on this website counts. you can do that by clicking on button and logging in your github account.",
        calendar: "hi, this is our calendar. you can find all of our upcoming events marked here. by clicking on the export button you will download a calendar file which you can add to your google calendar or apple calendar so you don't have to look for info on any social sites bullshit."
    };

    const infoText = infoTexts[context];
    document.getElementById("infoText").innerText = infoText || "No information available.";
    document.getElementById("infoPopup").classList.remove("hidden");
    document.getElementById("infoPopup").style.display = "block";
}

function closeInfo() {
    document.getElementById("infoPopup").classList.add("hidden");
    document.getElementById("infoPopup").style.display = "none";
}

document.addEventListener('DOMContentLoaded', fetchBlockContent);
