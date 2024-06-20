import axios from "axios";

export const CUSTOMERS_URL = `${process.env.REACT_APP_BASE_URL}`;
const all_customers = "/get_all_customers";

// CREATE =>  POST: add a new customer to the server
export function createCustomer(customer) {
  return axios.post(CUSTOMERS_URL, { customer });
}

// READ
export function getAllCustomers() {
  return axios.get(CUSTOMERS_URL + all_customers);
}

export function getCustomerById(customerId) {
  return axios.get(`${CUSTOMERS_URL}/${customerId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findCustomers(queryParams) {
  console.log(queryParams);
  return axios.post(`${CUSTOMERS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the customer on the server
export function updateCustomer(customer) {
  return axios.put(`${CUSTOMERS_URL}/${customer.id}`, { customer });
}

// UPDATE Status
export function updateStatusForCustomers(ids) {
  return axios.put(`${CUSTOMERS_URL}/toggle_user/${ids}`);
}

// DELETE => delete the customer from the server
export function deleteCustomer(customerId) {
  return axios.delete(`${CUSTOMERS_URL}/${customerId}`);
}

// DELETE Customers by ids
export function deleteCustomers(ids) {
  return axios.post(`${CUSTOMERS_URL}/deleteCustomers`, { ids });
}
