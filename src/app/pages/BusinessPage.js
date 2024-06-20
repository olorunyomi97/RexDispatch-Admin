import React from "react";
import BusinessComponent from "../modules/Business/components/businesscomponent";
import DocumentCard from "../modules/Business/components/documentcard";
import DeliveriesCard from "../modules/Business/components/deliveriescard";

export function BusinessPage() {
  return (
    <div>
      <BusinessComponent />
      <DocumentCard />
      <DeliveriesCard/>
    </div>

  )
}
