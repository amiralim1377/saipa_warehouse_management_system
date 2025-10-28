function WarehousesStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-sm">
        <p className="text-sm">تعداد انبارها</p>
        <h3 className="text-2xl font-bold">5</h3>
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-sm">
        <p className="text-sm">تعداد کل قطعات</p>
        <h3 className="text-2xl font-bold">1,200</h3>
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-sm">
        <p className="text-sm">میانگین موجودی هر انبار</p>
        <h3 className="text-2xl font-bold">240</h3>
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-sm">
        <p className="text-sm">انبارهای دارای موجودی کم</p>
        <h3 className="text-2xl font-bold">2</h3>
      </div>
    </div>
  );
}

export default WarehousesStats;
