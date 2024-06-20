import axios from "axios";

export const PROMOTIONS_URL =
  "http://phplaravel-348716-1117663.cloudwaysapps.com/api/admin/";

// CREATE =>  POST: add a new promotion to the server
export function createPromotion(promotion) {
  // console.log(promotion);
  return axios.post(
    PROMOTIONS_URL + "promotions/create_new_promotions",
    promotion
  );
}

// READ
export function getAllPromotions() {
  return axios.get(PROMOTIONS_URL + "promotions/get_all_promotions");
}

export function getPromotionById(promotionId) {
  return axios.get(`${PROMOTIONS_URL}/${promotionId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findPromotions(queryParams) {
  return axios.post(`${PROMOTIONS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updatePromotion(promotion) {
  return axios.put(`${PROMOTIONS_URL}/${promotion.id}`, { promotion });
}

// UPDATE Status
export function updateStatusForPromotions(ids, status) {
  return axios.post(`${PROMOTIONS_URL}/updateStatusForPromotions`, {
    ids,
    status,
  });
}

// DELETE => delete the promotion from the server
export function deletePromotion(promotionId) {
  return axios.delete(`${PROMOTIONS_URL}/${promotionId}`);
}

// DELETE Promotions by ids
export function deletePromotions(ids) {
  return axios.post(`${PROMOTIONS_URL}/deletePromotions`, { ids });
}
