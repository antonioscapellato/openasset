function PageNotFound() {
    return (
      <div class="flex items-center justify-center w-screen h-screen">
        <div class="px-4 lg:py-12">
          <div class="lg:gap-4 lg:flex">
            <div
              class="flex flex-col items-center justify-center md:py-24 lg:py-32 p-20"
            >
              <h1 class="font-bold text-violet-600 text-9xl">404</h1>
              <p
                class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
              >
                <span class="text-red-500">Oops!</span> Page not found
              </p>
              <p class="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <a
                href="/"
                class="px-8 py-4 text-lg font-semibold text-violet-800 bg-violet-100 rounded-md hover:bg-violet-800 hover:text-white hover:duration-300"
                >Go home</a
              >
            </div>
            <div class="mt-4 p-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
                alt="img"
                class="object-cover w-full h-full rounded-2xl shadow-xl "
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PageNotFound;