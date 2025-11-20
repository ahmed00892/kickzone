import { Card, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext.jsx";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();
  const { isLoggedIn } = useAuth(); // ✅ get login status
  console.log("Cart - isLoggedIn:", isLoggedIn);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleProceedPayment = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    alert("✅ Payment successful! Stadium reserved!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg pb-12">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Typography
          variant="h3"
          className="mb-8 font-bbh-sans-bartle text-brand-blue dark:text-dark-accent"
        >
          🛒 Your Cart
        </Typography>

        {cart.length === 0 ? (
          <Card className="p-6 text-center bg-light-surface dark:bg-dark-surface">
            <Typography
              variant="h6"
              color="gray"
              className="dark:text-dark-text"
            >
              Your cart is empty.
            </Typography>
          </Card>
        ) : (
          <div className="space-y-6">
            {cart.map((item, i) => (
              <Card
                key={i}
                className="
                  p-4 flex items-center justify-between 
                  hover:shadow-lg transition-all duration-200
                  bg-light-surface dark:bg-dark-surface
                "
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl shadow-md"
                  />
                  <div>
                    <Typography className="dark:text-dark-text" variant="h6">
                      {item.name}
                    </Typography>
                    <Typography color="gray" className="dark:text-dark-text/70">
                      {item.date} – {item.hour}
                    </Typography>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Typography
                    variant="h6"
                    color="green"
                    className="dark:text-dark-accent"
                  >
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

            <Card className="p-6 text-right bg-light-surface dark:bg-dark-surface">
              <Typography variant="h5" className="mb-3 dark:text-dark-text">
                Total:{" "}
                <span className="text-green-600 dark:text-dark-accent">
                  ${total}.00
                </span>
              </Typography>

              {!isLoggedIn && (
                <Typography
                  color="gray"
                  variant="small"
                  className="mb-2 dark:text-dark-text/70"
                >
                  Log in to reserve a stadium
                </Typography>
              )}

              <button
                onClick={handleProceedPayment}
                className="
                  mt-6 w-full py-3 rounded-lg 
                  bg-green-500 dark:bg-dark-accent 
                  text-white hover:bg-green-600 dark:hover:bg-dark-accent/90 
                  transition
                "
              >
                Proceed to Payment
              </button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
