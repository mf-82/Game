import sendRequest from './send-request';

const BASE_URL = '/api/adventures';

// Retrieve trips
export function getTrips(advId) {
  return sendRequest(`${BASE_URL}/${advId}/trips`);
}

// Add trip to database
export function addTrip(advId, tripData) {
  return sendRequest(`${BASE_URL}/${advId}/trips`, 'POST', tripData);
}

// get trip details
export function getOneTrip(advId, tripId) {
    return sendRequest(`${BASE_URL}/${advId}/trips/${tripId}`);
}

// get one trip info to edit
export function editTrip(advId, tripId) {
    return sendRequest(`${BASE_URL}/${advId}/trips/${tripId}/edit`);
}

// update trip with new info
export function updateTrip(advId, tripId, tripData) {
  return sendRequest(`${BASE_URL}/${advId}/trips/${tripId}`, 'PUT', tripData);
}

// delete trip
export function deleteTrip(advId, tripId) {
    return sendRequest(`${BASE_URL}/${advId}/trips/${tripId}`, 'DELETE');
}