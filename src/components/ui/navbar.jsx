const Navbar = () => {
  return (
    <nav class="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div class="container mx-auto px-4 py-6 flex justify-between items-center">
        <div class="flex items-center">
          <a href="./index.html" class="text-red-600 text-4xl font-bold">
            MOVIE DB
          </a>
          <div class="ml-8 space-x-4">
            <a href="./index.html" class="text-white hover:text-gray-300">
              Home
            </a>
            <a href="./compare.html" class="text-white hover:text-gray-300">
              Compare Movies
            </a>

            <a href="./WatchList.html" class="text-white hover:text-gray-300">
              Watch Later
            </a>
          </div>
        </div>
        <div class="relative">
          <input
            type="text"
            id="searchInput"
            placeholder="Search movies..."
            class="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
          />
          <div
            id="searchResults"
            class="absolute w-full mt-2 bg-black bg-opacity-90 rounded-lg hidden"
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
