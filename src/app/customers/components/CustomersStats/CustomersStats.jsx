import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function CustomersStats({ CustomersData }) {
  if (!CustomersData) return null;

  const mainStats = [
    { title: "تعداد کل مشتریان", value: CustomersData.total_customers },
    { title: "مشتریان حقیقی", value: CustomersData.individual_customers },
    { title: "مشتریان حقوقی", value: CustomersData.company_customers },
    {
      title: "مشتریان جدید (ماه گذشته)",
      value: CustomersData.customers_last_month,
    },
  ];

  return (
    <div className="space-y-4 my-6">
      {/* کارت آمار اصلی */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {mainStats.map((item, index) => (
          <Card key={`main-${index}`}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* کارت توزیع جغرافیایی */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>توزیع مشتری‌ها بر اساس استان و شهر</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ستون استان‌ها */}
            <div>
              <h4 className="font-semibold mb-2">استان‌ها</h4>
              <ul className="list-disc list-inside space-y-1 max-h-64 overflow-y-auto">
                {Object.entries(CustomersData.by_province || {}).map(
                  ([province, count]) => (
                    <li key={province}>
                      {province}: {count}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ستون شهرها */}
            <div>
              <h4 className="font-semibold mb-2">شهرها</h4>
              <ul className="list-disc list-inside space-y-1 max-h-64 overflow-y-auto">
                {Object.entries(CustomersData.by_city || {}).map(
                  ([city, count]) => (
                    <li key={city}>
                      {city}: {count}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomersStats;
