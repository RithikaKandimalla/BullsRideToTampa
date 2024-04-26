 
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
let places = [
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



// Function to create a business element with basic details
const createBusinessElement = (place) => {
    const businessElement = document.createElement('div');
    businessElement.classList.add('business-item');
    businessElement.setAttribute('data-business-id', place.business_id);

    const imageElement = document.createElement('img');
    imageElement.src = place.image;
    imageElement.alt = place.name + ' image';
    businessElement.appendChild(imageElement);

    // Create a paragraph element for the place's name
    const nameElement = document.createElement('div');
    nameElement.textContent = place.name;
    businessElement.appendChild(nameElement);

    // Create a paragraph element for the place's address
    const addressElement = document.createElement('div');
    addressElement.textContent = `Address: ${place.address}, ${place.city}, ${place.state} ${place.zipcode}`;
    businessElement.appendChild(addressElement);

    // Create a paragraph element for the place's phone
    const phoneElement = document.createElement('div');
    phoneElement.textContent = `Phone: ${place.phone}`;
    businessElement.appendChild(phoneElement);

    // Create a link element for the place's website
    const websiteElement = document.createElement('a');
    websiteElement.href = place.website;
    websiteElement.textContent = 'Website';
    businessElement.appendChild(websiteElement);

    // Add review form
    const addReviewButton = document.createElement('button');
    addReviewButton.textContent = 'Add Review';
    addReviewButton.addEventListener('click', () => openAddReviewModal(place.business_id));
    businessElement.appendChild(addReviewButton);

    // Render reviews for the place
    const reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('reviews-container');
    const placeReviews = reviews.filter(review => review.business_id === place.business_id);
    renderReviews(placeReviews, reviewsContainer, place.business_id);
    businessElement.appendChild(reviewsContainer);

    return businessElement;
};

// Function to render reviews
// Function to render reviews
const renderReviews = (reviews, container, businessId) => {
    container.innerHTML = '';

    if (reviews.length > 0) {
        const totalRating = reviews.reduce((acc, curr) => acc + parseInt(curr.rating), 0);
        const averageRating = totalRating / reviews.length;
        const averageRatingElement = document.createElement('div');
        averageRatingElement.textContent = `Average Rating: ${averageRating.toFixed(1)}`;
        container.appendChild(averageRatingElement);

        const reviewsList = document.createElement('ul');
        reviews.forEach(review => {
            const reviewItem = document.createElement('li');
            reviewItem.textContent = `Rating: ${review.rating} - Reviewed by: ${review['Reviewed by ']}`;

            // Add edit and delete buttons for each review
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => openEditReviewModal(review, businessId), { once: true });
            reviewItem.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteReview(review.review_id, businessId), { once: true });
            reviewItem.appendChild(deleteButton);

            reviewsList.appendChild(reviewItem);
        });
        container.appendChild(reviewsList);
    } else {
        const noReviewsElement = document.createElement('div');
        noReviewsElement.textContent = 'No reviews yet.';
        container.appendChild(noReviewsElement);
    }
};

// Function to open Add Review modal
const openAddReviewModal = (businessId) => {
    const modal = document.getElementById('add-review-modal');
    modal.style.display = 'block';

    const closeButton = modal.querySelector('.close');
    closeButton.onclick = () => modal.style.display = 'none';

    const addReviewForm = document.getElementById('add-review-form');
    addReviewForm.onsubmit = (event) => {
        event.preventDefault();
        const rating = addReviewForm.rating.value;
        const reviewer = addReviewForm.reviewer.value;
        if (rating && reviewer) {
            const newReview = {
                review_id: String(Date.now()), // Unique ID based on timestamp
                business_id: businessId,
                rating: rating,
                'Reviewed by ': reviewer
            };
            reviews.push(newReview);
            // Update reviews in data.json (simulate persistence)
            updateReviewsInJSONFile(reviews);
            // Close modal
            modal.style.display = 'none';
            // Refresh the reviews container
            const placeElement = document.querySelector(`.business-item[data-business-id="${businessId}"]`);
            const reviewsContainer = placeElement.querySelector('.reviews-container');
            const placeReviews = reviews.filter(review => review.business_id === businessId);
            renderReviews(placeReviews, reviewsContainer, businessId);
        } else {
            alert('Please provide both rating and reviewer name.');
        }
    };
};
// Function to open Edit Review modal
const openEditReviewModal = (review, businessId) => {
    const modal = document.getElementById('edit-review-modal');
    modal.style.display = 'block';

    const closeButton = modal.querySelector('.close');
    closeButton.onclick = () => modal.style.display = 'none';

    const editReviewForm = document.getElementById('edit-review-form');
    editReviewForm.rating.value = review.rating;
    editReviewForm.reviewer.value = review['Reviewed by '];

    editReviewForm.onsubmit = (event) => {
        event.preventDefault();
        const updatedRating = editReviewForm.rating.value;
        const updatedReviewer = editReviewForm.reviewer.value;
        if (updatedRating && updatedReviewer) {
            const updatedReview = {
                ...review,
                rating: updatedRating,
                'Reviewed by ': updatedReviewer
            };
            // Update the review in the reviews array
            const reviewIndex = reviews.findIndex(r => r.review_id === review.review_id);
            reviews[reviewIndex] = updatedReview;

            // Update reviews in data.json (simulate persistence)
            updateReviewsInJSONFile(reviews);

            // Close modal
            modal.style.display = 'none';

            // Re-render the reviews container
            const placeElement = document.querySelector(`.business-item[data-business-id="${businessId}"]`);
            const reviewsContainer = placeElement.querySelector('.reviews-container');
            const placeReviews = reviews.filter(review => review.business_id === businessId);
            renderReviews(placeReviews, reviewsContainer, businessId);
        } else {
            alert('Please provide both rating and reviewer name.');
        }
    };
};

// Function to delete a review
const deleteReview = (reviewId, businessId) => {
    if (confirm('Are you sure you want to delete this review?')) {
        // Remove the review from the reviews array
        reviews = reviews.filter(review => review.review_id !== reviewId);

        // Update reviews in data.json (simulate persistence)
        updateReviewsInJSONFile(reviews);

        // Re-render the reviews container
        const placeElement = document.querySelector(`.business-item[data-business-id="${businessId}"]`);
        const reviewsContainer = placeElement.querySelector('.reviews-container');
        const placeReviews = reviews.filter(review => review.business_id === businessId);
        renderReviews(placeReviews, reviewsContainer, businessId);
    }
};

// Function to update reviews in the data.json file (simulated persistence)
const updateReviewsInJSONFile = (reviews) => {
    // Simulate updating reviews in JSON data (you would replace this with actual API call or storage mechanism)
    fetch('update_reviews.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviews),
    })
        .then(response => {
            if (response.ok) {
                console.log('Reviews updated successfully');
                return response.json();
            }
            throw new Error('Failed to update reviews');
        })
        .catch(error => console.error('Error updating reviews:', error));
};
// Function to render the details of the selected place
// Function to render the details of the selected place
const renderPlacesList = (places, container) => {
    console.log('Rendering places list');
    places.forEach(place => {
        const businessElement = createBusinessElement(place);
        container.appendChild(businessElement);
    });
};
document.addEventListener('DOMContentLoaded', function () {
    const businessListContainer = document.getElementById('business-list');
    if (businessListContainer) {
        renderPlacesList(places, businessListContainer);
    } else {
        console.error('Business list container not found');
    }
});
