import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { AdminsFilter } from "./admin-filter/AdminFilter";
import { AdminsTable } from "./admin-table/AdminTable";
import { AdminsGrouping } from "./admin-grouping/AdminGrouping";
import { useAdminsUIContext } from "./AdminUIContext";

export function AdminsCard() {
  const adminsUIContext = useAdminsUIContext();
  const adminsUIProps = useMemo(() => {
    return {
      ids: adminsUIContext.ids,
      newAdminButtonClick: adminsUIContext.newAdminButtonClick,
    };
  }, [adminsUIContext]);

  return (
    <Card>
      <CardHeader title="Admins list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={adminsUIProps.newAdminButtonClick}
          >
            New Admin
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <AdminsFilter />
        {adminsUIProps.ids.length > 0 && <AdminsGrouping />}
        <AdminsTable />
      </CardBody>
    </Card>
  );
}
