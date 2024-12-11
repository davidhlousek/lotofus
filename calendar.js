function redirectToManifesto() {
    window.location.href = "index.html"; // Replace with your Manifesto page URL
}

function redirectToJoinUs() {
    window.location.href = "join-us.html"; // Replace with your Join Us page URL
}

function redirectToArena() {
    window.location.href = "https://www.are.na/choco-star/lotus-9jmtwsari54"; // Link to Are.na
}

const eventDates = {
    "2024-12-18": "show_case_lotus_event",
};

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function loadCalendar(month, year) {
    const daysContainer = document.getElementById("days");
    const monthTitle = document.getElementById("monthTitle");
    const eventInfo = document.getElementById("eventInfo");

    const date = new Date(year, month, 1);
    const monthName = date.toLocaleString("default", { month: "long" });

    monthTitle.innerText = `${monthName} ${year}`;
    daysContainer.innerHTML = "";

    const firstDayIndex = date.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayIndex; i++) {
        const blankDay = document.createElement("div");
        daysContainer.appendChild(blankDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        dayDiv.innerText = day;

        if (eventDates[fullDate]) {
            dayDiv.classList.add("highlighted");
            dayDiv.addEventListener("click", () => {
                eventInfo.innerHTML = `<p>${fullDate}: ${eventDates[fullDate]}</p>`;
            });
        } else {
            dayDiv.addEventListener("click", () => {
                eventInfo.innerHTML = `<p>${fullDate}: No event</p>`;
            });
        }

        daysContainer.appendChild(dayDiv);
    }
}

function prevMonth() {
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
    loadCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
    loadCalendar(currentMonth, currentYear);
}

function importCalendar() {
    const event = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Lotus Calendar//EN
BEGIN:VEVENT
SUMMARY:show_case_lotus_event
DTSTART:20241218T120000Z
DTEND:20241218T140000Z
DESCRIPTION:Lotus Event on 18.12.2024
END:VEVENT
END:VCALENDAR
`;

    const blob = new Blob([event], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "lotus-calendar.ics";
    link.click();

    URL.revokeObjectURL(url);
}

document.addEventListener("DOMContentLoaded", () => {
    loadCalendar(currentMonth, currentYear);
});
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
