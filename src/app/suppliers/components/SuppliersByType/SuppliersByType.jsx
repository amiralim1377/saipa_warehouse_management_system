import { getCompanySuppliers } from "../../services/getCompanySuppliers";
import { getIndividualSuppliers } from "../../services/getIndividualSuppliers";

import CorporateSuppliers from "../CorporateSuppliers/CorporateSuppliers";
import IndividualSuppliers from "../IndividualSuppliers/IndividualSuppliers";

async function SuppliersByType() {
  const {
    message: companyMessage,
    status: companyStatus,
    suppliers: companyData,
  } = await getCompanySuppliers();

  const {
    message: individualMessage,
    status: individualStatus,
    suppliers: individualData,
  } = await getIndividualSuppliers();

  return (
    <div>
      <CorporateSuppliers suppliers={companyData} />
      <IndividualSuppliers suppliers={individualData} />
    </div>
  );
}

export default SuppliersByType;
