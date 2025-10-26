import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SuppliersStats({ SuppliersStatsData }) {
  const stats = [
    {
      title: "تعداد کل تأمین‌کنندگان",
      value: SuppliersStatsData.total_suppliers,
    },
    {
      title: "تعداد تأمین‌کنندگان فعال",
      value: SuppliersStatsData.active_suppliers,
    },
    {
      title: "تعداد تأمین‌کنندگان جدید (ماه جاری)",
      value: SuppliersStatsData.new_suppliers_this_month,
    },
    {
      title: "تعداد تأمین‌کنندگان غیرفعال",
      value: SuppliersStatsData.inactive_suppliers,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
      {stats.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default SuppliersStats;
