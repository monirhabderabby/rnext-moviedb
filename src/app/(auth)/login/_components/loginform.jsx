"use client";

import { loginUser } from "@/actions/auth";
import { useAuth } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Define validation schema using Zod
const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useRouter();
  const { setAuth } = useAuth();

  const onSubmit = async (data) => {
    try {
      const loginPromise = loginUser(data);

      toast.promise(loginPromise, {
        loading: "Logging in...",
        success: (user) => {
          console.log(user);
          if (!user) {
            toast.error("Failed to loggin in 🥺");
          } else {
            setAuth(JSON.parse(user));
            navigate.push("/");
            return "Logged in successfully 🎉";
          }
        },
        error: (error) => {
          return error?.message || "Something went wrong";
        },
      });
      // Handle login API call or logic here
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form
      id="loginForm"
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          type="email"
          placeholder="Email or phone number"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
