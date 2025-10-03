import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import NoZone from "../NoZone/NoZone";
import { ZoneItem } from "../ZoneItem/ZoneItem";

// داده‌ی تستی
const testZones = [
  {
    id: "zone-1",
    name: "زون A",
    createdAt: "1404/07/11",
    aisles: [
      {
        id: "aisle-1",
        name: "راهرو 1",
        racks: [
          {
            id: "rack-1",
            name: "قفسه 1",
            shelves: [
              { id: "shelf-1", name: "طبقه 1" },
              { id: "shelf-2", name: "طبقه 2" },
            ],
          },
          {
            id: "rack-2",
            name: "قفسه 2",
            shelves: [
              { id: "shelf-3", name: "طبقه 1" },
              { id: "shelf-4", name: "طبقه 2" },
            ],
          },
        ],
      },
      {
        id: "aisle-2",
        name: "راهرو 2",
        racks: [
          {
            id: "rack-3",
            name: "قفسه 1",
            shelves: [
              { id: "shelf-5", name: "طبقه 1" },
              { id: "shelf-6", name: "طبقه 2" },
            ],
          },
        ],
      },
    ],
  },
];

function ZonesManagement() {
  const zones = testZones; // 👈 فعلاً داده‌ی تستی

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>مدیریت زون‌ها</CardTitle>
            <CardDescription>
              سازمان‌دهی ساختار انبار با استفاده از زون‌ها، راهروها، قفسه‌ها و
              طبقات
            </CardDescription>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            افزودن زون
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {zones.length === 0 ? (
          <NoZone />
        ) : (
          zones.map((zone) => <ZoneItem key={zone.id} zone={zone} />)
        )}
      </CardContent>
    </Card>
  );
}

export default ZonesManagement;
