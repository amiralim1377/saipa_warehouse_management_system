import { useOrder } from "../../context/OrderContext";

function SelectedProducts() {
  const { order } = useOrder();
  return (
    <>
      <h3 className="font-semibold">محصولات انتخاب شده:</h3>
      <ul>
        {order.items.map((i) => (
          <li key={i.part_id} className="flex justify-between py-1">
            {i.part_name} x{i.quantity}
            <button
              className="text-destructive"
              onClick={() => removeItem(i.part_id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SelectedProducts;
