import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SuppliersStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
      {/* تعداد کل تأمین‌کنندگان */}
      <Card>
        <CardHeader>
          <CardTitle>تعداد تأمین‌کنندگان</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">120</p>
        </CardContent>
      </Card>

      {/* تأمین‌کنندگان فعال */}
      <Card>
        <CardHeader>
          <CardTitle>تأمین‌کنندگان فعال</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">95</p>
        </CardContent>
      </Card>

      {/* تأمین‌کنندگان جدید */}
      <Card>
        <CardHeader>
          <CardTitle>تأمین‌کنندگان جدید (ماه جاری)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">12</p>
        </CardContent>
      </Card>

      {/* مجموع تراکنش‌ها */}
      <Card>
        <CardHeader>
          <CardTitle>مجموع تراکنش‌ها</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">780</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default SuppliersStats;
