import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Typography } from "antd";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GripVertical } from "lucide-react";
import { removeFromCart, reorderCart } from "../slices/cartSlice";
import { RootState } from "../store/store";

const { Title } = Typography;

const ItemTypes = { CART_ITEM: "cartItem" };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DraggableCartItem = ({ item, index, moveItem }: any) => {
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.CART_ITEM,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: ItemTypes.CART_ITEM,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const dragDropRef = (node: HTMLDivElement | null) => {
    dragRef(node);
    dropRef(node);
  };

  return (
    <Card
      ref={dragDropRef}
      className={`mb-3 shadow-md ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <div className="flex items-center gap-4">
        {/* Ensure drag icon is always visible */}
        <div ref={dragRef} className="cursor-move text-gray-500 flex-shrink-0">
          <GripVertical size={18} />
        </div>

        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 object-contain flex-shrink-0"
        />

        <div className="flex-grow min-w-0">
          <Title level={5} className="truncate">
            {item.title}
          </Title>
          <p className="text-gray-600">${item.price}</p>
        </div>

        {/* Fix remove button going outside */}
        <Button
          danger
          className="flex-shrink-0"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </Button>
      </div>
    </Card>
  );
};

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [localCart, setLocalCart] = useState(cartItems);

  useEffect(() => {
    setLocalCart(cartItems);
  }, [cartItems]);

  const moveItem = (fromIndex: number, toIndex: number) => {
    const updatedCart = [...localCart];
    const [movedItem] = updatedCart.splice(fromIndex, 1);
    updatedCart.splice(toIndex, 0, movedItem);
    setLocalCart(updatedCart);

    dispatch(reorderCart(updatedCart));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 bg-gray-100 min-h-screen max-w-3xl mx-auto">
        <Title level={2} className="text-center pt-14">
          🛒 My Cart{" "}
        </Title>

        {localCart.length === 0 ? (
          <p className="text-center text-gray-500">No items in cart.</p>
        ) : (
          <div className="mt-6">
            {localCart.map((item, index) => (
              <DraggableCartItem
                key={item.id}
                item={item}
                index={index}
                moveItem={moveItem}
              />
            ))}
          </div>
        )}
      </div>
    </DndProvider>
  );
}
