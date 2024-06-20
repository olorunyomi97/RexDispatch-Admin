import axios from "axios";

export const ADMINS_URL = `${process.env.REACT_APP_BASE_URL}`;
export const ALL_ADMINS = "/get_all_admins";
export const CREATE_ADMIN = "/create_admin";
export const UPDATE_ADMIN = "/edit_admin/";
export const DELETE_ADMIN = "/delete/";

// CREATE =>  POST: add a new admin to the server
export function createAdmin(admin) {
  return axios.post(ADMINS_URL + CREATE_ADMIN, admin);
}

// READ
export function getAllAdmins() {
  return axios.get(ADMINS_URL + ALL_ADMINS);
}

export function getAdminById(adminId) {
  return axios.get(`${ADMINS_URL}/get_admin/${adminId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
// export function findAdmins(queryParams) {
//   return axios.post(`${ADMINS_URL}find`, { queryParams });
// }

// UPDATE => PUT: update the admin on the server
export function updateAdmin(admin) {
  return axios.post(`${ADMINS_URL + UPDATE_ADMIN}${admin.id}`, { admin });
}

// UPDATE Status
export function updateStatusForAdmins(ids) {
  return axios.patch(`${ADMINS_URL}/toggle_admin/${ids}`);
}

// DELETE => delete the admin from the server
export function deleteAdmin(adminId) {
  return axios.delete(`${ADMINS_URL + DELETE_ADMIN}${adminId}`);
}

// DELETE Admins by ids
export function deleteAdmins(ids) {
  return axios.post(`${ADMINS_URL}deleteAdmins`, { ids });
}
