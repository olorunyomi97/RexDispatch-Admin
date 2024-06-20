export const AdminStatusCssClasses = ["danger", "success", ""];
export const AdminStatusTitles = ["Inactive", "Active", ""];
export const AdminTypeCssClasses = ["success", "primary", "warning"];
export const AdminTypeTitles = [
  "Super Administrator",
  "Administrator",
  "Auditor",
];
export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 },
];
export const initialFilter = {
  filter: "",
  sortOrder: "desc", // asc||desc
  sortField: "id",
  pageNumber: 1,
  pageSize: 10,
};
