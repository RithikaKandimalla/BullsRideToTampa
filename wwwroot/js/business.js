﻿let places = [
    {
        "business_id": "1",
        "name": "Busch Gardens Tampa Bay",
        "address": "10165 McKinley Dr",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33612",
        "phone": " (813) 884-4386",
        "website": "https://buschgardens.com/",
        "type_id": "1",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRRxFzDwfNX-JyV5zlzvA9s00ejHsFslP9A&s",
        "timings": {
            "Weekdays": "10 am - 9 pm",
            "Weekends": "11 am - 8 pm"
        },
        "Price": "100 / person "
    },
    {
        "business_id": "2",
        "name": "Acropolis Greek Taverna - New Tampa",
        "address": "14947 Bruce B Downs Blvd",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33613",
        "phone": "(813) 971-1787",
        "website": "http://www.acropolistaverna.com/locations/new-tampa",
        "type_id": "2",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVF3YNHnZ1hrmIjnx1nQQVdjB2RENlTtl3A&s",
        "timings": {
            "Weekdays": "11 am - 11 pm",
            "Weekends": "11 am - 8 pm"
        },
        "Price": "45 / person"
    },
    {
        "business_id": "3",
        "name": "Museum of Science & Industry",
        "address": "4801 E Fowler Ave",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33617",
        "phone": "(813) 987-6000",
        "website": "https://www.msichicago.org/",
        "type_id": "1",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YnoNpYKKd6ZV2FRD3hVZB4dQ7ZOaVvIvyg&s",
        "timings": {
            "Weekdays": "10 am - 5 pm",
            "Weekends": "11 am - 5 pm"
        },
        "Price": "25 / person"
    },
    {
        "business_id": "4",
        "name": "Tampa Premium Outlets",
        "address": "2300 Grand Cypress Dr",
        "city": "Lutz",
        "state": "Florida",
        "zipcode": "33559",
        "phone": "(813) 938-6272",
        "website": "https://www.premiumoutlets.com/outlet/tampa",
        "type_id": "3",
        "image": "https://tse4.mm.bing.net/th?id=OIP.ZJKHhk6A1q3yegfnV2B4SQHaE6&pid=Api&P=0&h=180",
        "timings": {
            "Weekdays": "10 am - 8 pm",
            "Weekends": "11 am - 5 pm"
        },
        "Price": "200* / person"
    },
    {
        "business_id": "5",
        "name": "North 30th Sports Pub & Grille USF",
        "address": "11402 N 30th St",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33612",
        "phone": "(813) 999-8280",
        "website": "http://north30thpub.com/",
        "type_id": "2",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6fMvfA6Jym9lGSOJ9AwQTCa2CyEzpn36XA&s",
        "timings": {
            "Weekdays": "11 am - 11 pm",
            "Weekends": "11 am - 8 pm"
        },
        "Price": "35 / person"
    },
    {
        "business_id": "6",
        "name": "Lettuce Lake Park",
        "address": "6920 E Fletcher Ave",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33637",
        "phone": "(813) 987-6204",
        "website": "https://hcfl.gov/locations/lettuce-lake-conservation-park",
        "type_id": "1",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyh-nt-BoNpteBtbMUsI7NyJS7wRK3gP1oQ&s",
        "timings": {
            "Weekdays": "8 am - 6 pm",
            "Weekends": "10 am - 6 pm"
        },
        "Price": "15 / person"
    },
    {
        "business_id": "7",
        "name": "University Mall",
        "address": "2200 E Fowler Ave",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33612",
        "phone": "(813) 971-3465",
        "website": "http://www.universitymalltampa.com/",
        "type_id": "3",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKETvO8OW0pxleyhKbZj9-PNnuBSK_wJ5sQ&s",
        "timings": {
            "Weekdays": "11 am - 8:30 pm",
            "Weekends": "11 am - 6 pm"
        },
        "Price": "30 / person"
    },
    {
        "business_id": "8",
        "name": "University Plaza",
        "address": "2816 E Fletcher Ave",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33613",
        "phone": " (813) 972-3396",
        "website": "https://www.sembler.com/properties/university-plaza/",
        "type_id": "3",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMPYTJGJ0-namK--WMXe18dmHEXcIOZyfaQ&s",
        "timings": {
            "Weekdays": "10 am - 5 pm",
            "Weekends": "11 am - 6 pm"
        },
        "Price": "20 / person"
    },
    {
        "business_id": "9",
        "name": "Nightly Spirits - Ghost Tours & Pub Crawls",
        "address": "1600 E 8th Ave",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33605",
        "phone": "(844) 678-8687",
        "website": "https://nightlyspirits.com/",
        "type_id": "1",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxKQECjUvICbJG_yeYBXLeZeLpqy-IOcOoQ&s",
        "timings": {
            "Weekdays": "10 am - 3 pm",
            "Weekends": "10 am - 3 pm"
        },
        "Price": "20 / person"
    },
    {
        "business_id": "10",
        "name": "Babushka's - Temple Terrace",
        "address": "12639 N 56th St",
        "city": "Tampa",
        "state": "Florida",
        "zipcode": "33617",
        "phone": "(813) 515-7415",
        "website": "https://www.babushkas.us/temple-terrace",
        "type_id": "2",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBhX8Wf0iULbpjqvEGYFV61x4QG2Qginn1Q&s",
        "timings": {
            "Weekdays": "11 am - 8 pm",
            "Weekends": "11 am - 6 pm"
        },
        "Price": "36 / person"
    }];

// Function to render business details table
// Corrected JavaScript function
const renderBusinessDetails = (places, container) => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Name</th><th>Timings Weekdays</th><th>Timings Weekends</th><th>Price</th>';
    table.appendChild(headerRow);

    places.forEach(place => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${place.name}</td>
            <td>${place.timings.Weekdays}</td>
            <td>${place.timings.Weekends}</td>
            <td>${place.Price}</td>
        `;
        table.appendChild(row);
    });

    container.appendChild(table);
};

document.addEventListener('DOMContentLoaded', function () {
    const businessDetailsContainer = document.getElementById('business-details');
    if (businessDetailsContainer) {
        renderBusinessDetails(places, businessDetailsContainer);
    } else {
        console.error('Business details container not found');
    }
});
