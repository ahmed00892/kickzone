import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function AddStadium() {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  // ✅ Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Stadium name is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .min(10, "Minimum price is $10"),
    type: Yup.string().required("Please select a stadium type"),
  });

  // ✅ Handle Image Upload
  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue("image", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // ✅ Handle Submit
  const handleSubmit = (values) => {
    console.log("Submitted Stadium:", values);
    navigate("/stadiums");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 transition-all">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🏟️ Add New Stadium
        </h1>

        <Formik
          initialValues={{
            name: "",
            location: "",
            description: "",
            price: "",
            type: "",
            image: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-5">
              {/* Stadium Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Stadium Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter stadium name"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Location
                </label>
                <Field
                  name="location"
                  type="text"
                  placeholder="Enter location"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Write short description..."
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green h-28 resize-none"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Price per hour ($)
                </label>
                <Field
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Stadium Type
                </label>
                <Field
                  as="select"
                  name="type"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                >
                  <option value="">Select type</option>
                  <option value="11vs11">11 vs 11</option>
                  <option value="5vs5">5 vs 5</option>
                </Field>
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Upload Stadium Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setFieldValue)}
                  className="w-full text-gray-700 border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />

                {/* ✅ Image Preview */}
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-4 w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-green text-white font-semibold py-3 rounded-xl 
                shadow-md hover:bg-brand-green/90 hover:shadow-lg hover:-translate-y-0.5 
                active:scale-95 transition-all duration-200"
              >
                {isSubmitting ? "Adding..." : "Add Stadium"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
