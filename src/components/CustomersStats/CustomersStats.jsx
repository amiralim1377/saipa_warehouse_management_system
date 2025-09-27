import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function CustomersStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
      {/* تعداد کل مشتریان */}
      <Card>
        <CardHeader>
          <CardTitle>تعداد مشتریان</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">250</p>
        </CardContent>
      </Card>

      {/* مشتریان فعال */}
      <Card>
        <CardHeader>
          <CardTitle>مشتریان فعال</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">180</p>
        </CardContent>
      </Card>

      {/* مشتریان جدید */}
      <Card>
        <CardHeader>
          <CardTitle>مشتریان جدید (ماه جاری)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">25</p>
        </CardContent>
      </Card>

      {/* مجموع سفارش‌ها */}
      <Card>
        <CardHeader>
          <CardTitle>مجموع سفارش‌ها</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1,350</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomersStats;
