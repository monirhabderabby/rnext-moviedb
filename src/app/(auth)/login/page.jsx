import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="bg-moviedb-black min-h-screen flex items-center justify-center">
      <div class="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
        <div class="text-center mb-6">
          <h1 class="text-white text-3xl font-bold mb-4">Sign In</h1>

          <form id="loginForm" class="space-y-4">
            <input
              type="email"
              placeholder="Email or phone number"
              class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              required
            />
            <input
              type="password"
              placeholder="Password"
              class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              required
            />
            <button
              type="submit"
              class="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
            >
              Sign In
            </button>
          </form>

          <div class="mt-4 flex justify-between text-moviedb-gray text-sm">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              Remember me
            </label>
            <a href="#" class="hover:underline">
              Need help?
            </a>
          </div>

          <div class="mt-6 text-moviedb-gray">
            New to moviedb?
            <Link href="/register" class="text-white hover:underline">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
