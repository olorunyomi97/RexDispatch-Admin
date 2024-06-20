import axios from "axios";

export const DISCOUNTS_URL =
  "http://phplaravel-348716-1117663.cloudwaysapps.com/api/admin/discounts/";

// CREATE =>  POST: add a new discount to the server
export function createDiscount(discount) {
  return axios.post(DISCOUNTS_URL + "create_new_discount", discount);
}

// READ
export function getAllDiscounts() {
  return axios.get(DISCOUNTS_URL + "get_all_discounts");
}

export function getDiscountById(discountId) {
  return axios.get(`${DISCOUNTS_URL}/${discountId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
// export function findDiscounts(queryParams) {
//   return axios.post(`${DISCOUNTS_URL}/find`, { queryParams });
// }

// UPDATE => PUT: update the discount on the server
export function updateDiscount(discount) {
  return axios.put(`${DISCOUNTS_URL}/${discount.id}`, { discount });
}

// UPDATE Status
export function updateStatusForDiscounts(ids, status) {
  return axios.post(`${DISCOUNTS_URL}/updateStatusForDiscounts`, {
    ids,
    status,
  });
}

// DELETE => delete the discount from the server
export function deleteDiscount(discountId) {
  return axios.delete(`${DISCOUNTS_URL}/${discountId}`);
}

// DELETE Discounts by ids
export function deleteDiscounts(ids) {
  return axios.post(`${DISCOUNTS_URL}/deleteDiscounts`, { ids });
}
