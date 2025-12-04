import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { useTheme } from "../context/ThemeContext"; // Import theme hook

export default function ContactUs() {
  const { theme } = useTheme(); // Get current theme
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Please write a message.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) return setErrors(validation);

    try {
      setSending(true);
      setStatus(null);
      await new Promise((res) => setTimeout(res, 1000));

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setStatus({
        type: "success",
        msg: "Your message has been sent successfully.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  // Define input styles based on theme
  const inputClassName =
    theme === "dark"
      ? "!border-gray-600 !bg-gray-800 !text-white focus:!border-dark-accent"
      : "";

  const labelClassName = theme === "dark" ? "!text-gray-300" : "";

  return (
    <Card className={theme === "dark" ? "bg-dark-surface" : ""}>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                className={inputClassName}
                labelProps={{
                  className: labelClassName,
                }}
                color={theme === "dark" ? "white" : "blue"}
              />
              {errors.firstName && (
                <p className="text-sm text-red-400 mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <Input
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className={inputClassName}
                labelProps={{
                  className: labelClassName,
                }}
                color={theme === "dark" ? "white" : "blue"}
              />
            </div>

            <div>
              <Input
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                className={inputClassName}
                labelProps={{
                  className: labelClassName,
                }}
                color={theme === "dark" ? "white" : "blue"}
              />
              {errors.email && (
                <p className="text-sm text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Input
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClassName}
                labelProps={{
                  className: labelClassName,
                }}
                color={theme === "dark" ? "white" : "blue"}
              />
            </div>
          </div>

          <div className="mt-4">
            <Textarea
              label="Message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              error={!!errors.message}
              className={inputClassName}
              labelProps={{
                className: labelClassName,
              }}
              color={theme === "dark" ? "white" : "blue"}
            />
            {errors.message && (
              <p className="text-sm text-red-400 mt-1">{errors.message}</p>
            )}
          </div>

          <div className="mt-6 text-right">
            <Button
              type="submit"
              disabled={sending}
              className={
                theme === "dark" ? "bg-dark-accent hover:bg-green-600" : ""
              }
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </div>

          {status && (
            <div
              className={`mt-4 p-3 rounded text-sm ${
                status.type === "success"
                  ? theme === "dark"
                    ? "bg-green-900 text-green-300"
                    : "bg-green-50 text-green-700"
                  : theme === "dark"
                  ? "bg-red-900 text-red-300"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {status.msg}
            </div>
          )}
        </form>
      </CardBody>
    </Card>
  );
}
