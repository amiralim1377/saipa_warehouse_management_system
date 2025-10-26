import CorporateSuppliers from "../CorporateSuppliers/CorporateSuppliers";
import IndividualSuppliers from "../IndividualSuppliers/IndividualSuppliers";

function SuppliersByType() {
  return (
    <div>
      <CorporateSuppliers />
      <IndividualSuppliers />
    </div>
  );
}

export default SuppliersByType;
