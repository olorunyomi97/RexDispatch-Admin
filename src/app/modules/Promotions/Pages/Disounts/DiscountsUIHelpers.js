export const DiscountStatusCssClasses = [
  "danger",
  "success",
  "secondary",
  "info",
];
export const DiscountStatusTitles = [
  "Expired",
  "In Progress",
  "Disabled",
  "Pending",
];
export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 },
];
export const initialFilter = {
  filter: {
    discount_code: "",
    amount: "",
    start_date: "",
    end_date: "",
  },
  sortOrder: "asc", // asc||desc
  sortField: "id",
  pageNumber: 1,
  pageSize: 10,
};
