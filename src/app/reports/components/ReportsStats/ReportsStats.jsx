import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportsStats() {
  const stats = [
    { title: "کل سفارش‌ها", value: 120 },
    { title: "کل مشتریان", value: 45 },
    { title: "کالاهای کم موجودی", value: 7 },
    { title: "کل تأمین‌کنندگان", value: 10 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <Card key={idx} className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-sm">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
