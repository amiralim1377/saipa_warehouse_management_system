import { getCompanySuppliers } from "../../services/getCompanySuppliers";
import { getIndividualSuppliers } from "../../services/getIndividualSuppliers";

import ReusableTable from "../ReusableTable/ReusableTable";

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
      <ReusableTable suppliers={companyData} label="لیست تأمین‌کنندگان حقوقی" />
      <ReusableTable
        suppliers={individualData}
        label="لیست تأمین‌کنندگان حقیقی"
      />
    </div>
  );
}

export default SuppliersByType;
