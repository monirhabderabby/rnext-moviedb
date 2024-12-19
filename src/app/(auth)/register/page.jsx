"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Local Imports
import { registerUser } from "@/actions/auth";
import Link from "next/link";

const signUpSchema = z
  .object({
    first_name: z.string().nonempty("First Name is required"),
    last_name: z.string().nonempty("Last Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),
    terms: z.boolean().refine((val) => val, "You must agree to the terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const Page = () => {
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    const registration = registerUser(data);

    try {
      delete data.confirmPassword;
      delete data.terms;

      toast.promise(registration, {
        loading: "Loading...",
        success: (data) => {
          toast.success(`registration successfully 🎉`);

          navigate.replace("/login");
        },
        error: "Something went wrong!",
      });
      // Handle form submission, e.g., API call
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <section className="bg-moviedb-black min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-6">
            Create Your Account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              {...register("first_name")}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm">
                {errors.first_name.message}
              </p>
            )}

            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              {...register("last_name")}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm">{errors.last_name.message}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}

            <div className="text-left text-moviedb-gray text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  {...register("terms")}
                />
                I agree to the Terms of Service and Privacy Policy
              </label>
              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-moviedb-gray">
            Already have an account?
            <Link href="/login" className="text-white hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
