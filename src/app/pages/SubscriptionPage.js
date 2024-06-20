import React from "react";
import SubComponent from "../modules/subscription/components/subcard";
import Subplans from "../modules/subscription/components/subplans";
import SubTable from "../modules/subscription/components/subtable"

export function SubscriptionPage() {
  return (
    <div>
      <SubComponent />
      <Subplans />
      <SubTable />
    </div>

  )
}
