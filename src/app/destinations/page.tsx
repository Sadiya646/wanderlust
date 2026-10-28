
type Destination = {
  _id: string;
  name: string;
  country: string;
  imageUrl: string;
  category: string;
};

const AllDestinationpage = async () => {
  const res = await fetch("http://localhost:8000/destinations");

  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }

  const data: Destination[] = await res.json();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="mb-7">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
          Explore All Destinations
        </h1>

        <p className="mt-2 text-base text-gray-500">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Filters */}
      <div className="mb-4 grid grid-cols-1 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm sm:grid-cols-3">
        {/* Category */}
        <button className="flex h-14 items-center justify-between border-b border-gray-300 px-5 text-left text-sm text-gray-600 transition hover:bg-gray-50 sm:border-b-0 sm:border-r">
          <span>CATEGORY</span>
          <span className="text-base text-gray-400">⌄</span>
        </button>

        {/* Price Range */}
        <button className="flex h-14 items-center justify-between border-b border-gray-300 px-5 text-left text-sm text-gray-600 transition hover:bg-gray-50 sm:border-b-0 sm:border-r">
          <span>PRICE RANGE</span>
          <span className="text-base text-gray-400">⌄</span>
        </button>

        {/* Sort By */}
        <button className="flex h-14 items-center justify-between px-5 text-left text-sm text-gray-600 transition hover:bg-gray-50">
          <span>SORT BY</span>
          <span className="text-base text-gray-400">⌄</span>
        </button>
      </div>

      {/* Result Count */}
      <p className="mb-6 text-sm text-gray-500">
        Showing {data.length} destinations
      </p>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((destination) => (
          <div
            key={destination._id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Rating */}
              <div className="absolute right-3 top-3 rounded-md bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm">
                4.5 ★
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              {/* Country */}
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <span>◎</span>
                <span>{destination.country}</span>
              </div>

              {/* Destination Name + Price */}
              <div className="mt-2 flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  {destination.name}
                </h2>

                <div className="whitespace-nowrap">
                  <span className="text-lg font-semibold text-gray-900">
                    $2700
                  </span>

                  <span className="ml-1 text-xs text-gray-500">
                    /Person
                  </span>
                </div>
              </div>

              {/* Duration */}
              <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-600">
                <span>▣</span>
                <span>7 Days/6 Nights</span>
              </div>

              {/* Book Now */}
              <button className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wide text-sky-600 transition-all duration-200 hover:gap-3 hover:text-sky-800">
                BOOK NOW
                <span className="text-base">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllDestinationpage;
