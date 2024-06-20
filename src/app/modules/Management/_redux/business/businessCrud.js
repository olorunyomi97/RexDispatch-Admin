import axios from "axios";

export const BUSINESS_URL = `${process.env.REACT_APP_BASE_URL}`;
export const ALL_BUSINESS = "/get_all_business";
export const CREATE_BUSINESS = "/create";
export const UPDATE_BUSINESS = "/edit_business/";
export const DELETE_BUSINESS = "/delete_business/";

// CREATE =>  POST: add a new business to the server
export function createBusiness(business) {
  return axios.post(BUSINESS_URL + CREATE_BUSINESS, business);
}

// READ
export function getAllBusiness() {
  return axios.get(BUSINESS_URL + ALL_BUSINESS);
}

export function getBusinessById(businessId) {
  return axios.get(`${BUSINESS_URL}/get_business/${businessId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
// export function findAdmins(queryParams) {
//   return axios.post(`${BUSINESS_URL}find`, { queryParams });
// }

// UPDATE => PUT: update the business on the server
export function updateBusiness(business) {
  return axios.post(`${BUSINESS_URL + UPDATE_BUSINESS}${business.id}`, {
    business,
  });
}

// UPDATE Status
export function updateStatusForBusiness(ids) {
  return axios.put(`${BUSINESS_URL}/toggle_business/${ids}`);
}

// DELETE => delete the business from the server
export function deleteBusiness(businessId) {
  return axios.get(`${BUSINESS_URL + DELETE_BUSINESS}${businessId}`);
}

// // DELETE Business by ids
// export function deleteBusiness(ids) {
//   return axios.post(`${BUSINESS_URL}/deleteBusiness`, { ids });
// }
