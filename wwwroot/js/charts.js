let reviews = [
    {
        "review_id": "1",
        "business_id": "1",
        "rating": "4",
        "Reviewed by ": "Jim"
    },
    {
        "review_id": "2",
        "business_id": "1",
        "rating": "5",
        "Reviewed by ": "Henry"
    },
    {
        "review_id": "1",
        "business_id": "9",
        "rating": "5",
        "Reviewed by ": "Ram"
    },
    {
        "review_id": "2",
        "business_id": "9",
        "rating": "5",
        "Reviewed by ": "Even"
    },
    {
        "review_id": "1",
        "business_id": "6",
        "rating": "5",
        "Reviewed by ": "Amy "
    },
    {
        "review_id": "2",
        "business_id": "6",
        "rating": "4",
        "Reviewed by ": "Sita"
    },
    {
        "review_id": "1",
        "business_id": "3",
        "rating": "5",
        "Reviewed by ": "Kin"
    },
    {
        "review_id": "2",
        "business_id": "3",
        "rating": "4",
        "Reviewed by ": "Jack"
    },
    {
        "review_id": "1",
        "business_id": "2",
        "rating": "4",
        "Reviewed by ": "Erik"
    },
    {
        "review_id": "2",
        "business_id": "2",
        "rating": "5",
        "Reviewed by ": "lisa"
    },
    {
        "review_id": "1",
        "business_id": "5",
        "rating": "4",
        "Reviewed by ": "Jack"
    },
    {
        "review_id": "2",
        "business_id": "5",
        "rating": "4",
        "Reviewed by ": "Chai"
    },
    {
        "review_id": "1",
        "business_id": "10",
        "rating": "4",
        "Reviewed by ": "Tray"
    },
    {
        "review_id": "2",
        "business_id": "10",
        "rating": "2",
        "Reviewed by ": "Lil"
    },
    {
        "review_id": "1",
        "business_id": "7",
        "rating": "4",
        "Reviewed by ": "Bald"
    },
    {
        "review_id": "2",
        "business_id": "7",
        "rating": "5",
        "Reviewed by ": "Elise"
    },
    {
        "review_id": "1",
        "business_id": "8",
        "rating": "4",
        "Reviewed by ": "Awild"
    },
    {
        "review_id": "2",
        "business_id": "8",
        "rating": "4",
        "Reviewed by ": "Jim"
    },
    {
        "review_id": "1",
        "business_id": "4",
        "rating": "5",
        "Reviewed by ": "Pro"
    },
    {
        "review_id": "2",
        "business_id": "4",
        "rating": "5",
        "Reviewed by ": "Phani"
    }];


// Average Rating for Each Place (Pie Chart)
function renderAverageRatingByPlace() {
    const ctx1 = document.getElementById('averageRatingByPlaceChart').getContext('2d');
    const averageRatings = places.map(place => {
        const placeReviews = reviews.filter(review => review.business_id === place.business_id);
        const totalRating = placeReviews.reduce((sum, review) => sum + parseInt(review.rating), 0);
        return placeReviews.length ? (totalRating / placeReviews.length).toFixed(1) : 0;
    });

    new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: places.map(place => place.name),
            datasets: [{
                label: 'Average Rating',
                data: averageRatings,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', // Light red
                    'rgba(54, 162, 235, 0.2)', // Light blue
                    'rgba(255, 206, 86, 0.2)', // Light yellow
                    'rgba(75, 192, 192, 0.2)', // Light teal
                    'rgba(153, 102, 255, 0.2)', // Light purple
                    'rgba(255, 159, 64, 0.2)',  // Light orange
                    'rgba(199, 199, 199, 0.2)', // Light grey
                    'rgba(83, 109, 254, 0.2)',  // Other light blue
                    'rgba(40, 167, 69, 0.2)',   // Light green
                    'rgba(255, 87, 34, 0.2)'    // Other light red
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', // Red
                    'rgba(54, 162, 235, 1)', // Blue
                    'rgba(255, 206, 86, 1)', // Yellow
                    'rgba(75, 192, 192, 1)', // Teal
                    'rgba(153, 102, 255, 1)', // Purple
                    'rgba(255, 159, 64, 1)',  // Orange
                    'rgba(199, 199, 199, 1)', // Grey
                    'rgba(83, 109, 254, 1)',  // Other blue
                    'rgba(40, 167, 69, 1)',   // Green
                    'rgba(255, 87, 34, 1)'    // Other red
                ],

                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

// Prices vs Places (Line Chart)
function renderPricesVsPlaces() {
    const ctx2 = document.getElementById('pricesVsPlacesChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: places.map(place => place.name),
            datasets: [{
                label: 'Prices per Person',
                data: places.map(place => parseFloat(place.Price.replace('/ person', '').trim())),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Top 5 Places by Rating (Horizontal Bar Chart)
function renderTopPlacesByRating() {
    const topPlaces = places.map(place => {
        const ratings = reviews.filter(review => review.business_id === place.business_id).map(review => parseInt(review.rating));
        const averageRating = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 0;
        return { name: place.name, averageRating: averageRating };
    }).sort((a, b) => b.averageRating - a.averageRating).slice(0, 5);

    const ctx3 = document.getElementById('topPlacesByRatingChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: topPlaces.map(place => place.name),
            datasets: [{
                label: 'Average Rating',
                data: topPlaces.map(place => place.averageRating),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 5
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'Top 5 Places by Rating'
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    renderAverageRatingByPlace();
    renderPricesVsPlaces();
    renderTopPlacesByRating();
});
