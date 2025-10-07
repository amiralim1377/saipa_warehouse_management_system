import { useOrder } from "../../context/OrderContext";

function SelectedProducts() {
  const { order, removeItem } = useOrder();

  if (!order.items || order.items.length === 0) {
    return (
      <div className="p-4 my-4 rounded-lg border bg-card text-card-foreground border-border">
        <h3 className="font-semibold mb-2">محصولات انتخاب شده:</h3>
        <p className="text-sm text-muted-foreground">
          هیچ محصولی انتخاب نشده است.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg border shadow-sm bg-card text-card-foreground border-border">
      <h3 className="font-semibold text-lg mb-3 border-b pb-2 border-border">
        محصولات انتخاب شده
      </h3>
      <ul className="space-y-2 max-h-64 overflow-y-auto">
        {order.items.map((i, k) => (
          <li
            key={k + 1}
            className="flex justify-between items-center p-2 rounded-md shadow-sm transition bg-muted text-muted-foreground"
          >
            <div>
              <span className="font-medium">{i.part_name}</span>{" "}
              <span className="text-sm text-muted-foreground">
                x{i.quantity}
              </span>
            </div>
            <button
              className="font-bold px-2 py-1 rounded-md text-destructive transition"
              onClick={() => removeItem(i.part_id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-right text-sm text-muted-foreground">
        مجموع:{" "}
        {order.items
          .reduce((sum, i) => sum + i.quantity * i.unit_price, 0)
          .toLocaleString()}{" "}
        تومان
      </div>
    </div>
  );
}

export default SelectedProducts;
