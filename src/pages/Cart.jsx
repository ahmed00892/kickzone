import { Card, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../hooks/useAuth";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();
  const { isLoggedIn } = useAuth(); // ✅ get login status
  console.log("Cart - isLoggedIn:", isLoggedIn);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Payment handler with redirect
  const handleProceedPayment = () => {
    if (!isLoggedIn) {
      // Redirect guest to login
      navigate("/login");
      return;
    }

    // Logged-in user can proceed
    alert("✅ Payment successful! Stadium reserved!");
    clearCart();
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Typography
        variant="h3"
        className="mb-8 font-bbh-sans-bartle text-brand-blue"
      >
        🛒 Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Card className="p-6 text-center">
          <Typography variant="h6" color="gray">
            Your cart is empty.
          </Typography>
        </Card>
      ) : (
        <div className="space-y-6">
          {cart.map((item, i) => (
            <Card
              key={i}
              className="p-4 flex items-center justify-between hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl shadow-md"
                />
                <div>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="gray">
                    {item.date} – {item.hour}
                  </Typography>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Typography variant="h6" color="green">
                  ${item.price}.00
                </Typography>
                <Button
                  color="red"
                  variant="outlined"
                  onClick={() => removeFromCart(item.stadiumId, item.hour)}
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))}

          <Card className="p-6 text-right bg-gray-50">
            <Typography variant="h5" className="mb-3">
              Total: <span className="text-green-600">${total}.00</span>
            </Typography>

            {!isLoggedIn && (
              <Typography color="gray" variant="small" className="mb-2">
                Log in to reserve a stadium
              </Typography>
            )}

            <button
              onClick={handleProceedPayment}
              className="mt-6 w-full py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              Proceed to Payment
            </button>
          </Card>
        </div>
      )}
    </div>
  );
}
