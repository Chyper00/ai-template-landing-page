export default function Blog() {
  return (
    <section className="p-4 md:p-20">
      <div className="flex flex-col justify-center md:pl-44">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p>Here you can find our latest articles and news.</p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Article 1: The Impact of AI on Healthcare
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dapibus mi eu sem commodo, id euismod dolor eleifend.
              </p>
              <a
                href="#"
                className="text-green-500 hover:text-green-600 hover:underline mt-4"
              >
                Read More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Article 2: Machine Learning in Finance
              </h3>
              <p className="text-gray-600">
                Sed malesuada, magna non faucibus posuere, diam ante
                sollicitudin dui, in gravida mauris purus sit amet velit.
              </p>
              <a
                href="#"
                className="text-green-500 hover:text-green-600 hover:underline mt-4"
              >
                Read More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Article 3: AI Applications in Retail
              </h3>
              <p className="text-gray-600">
                Curabitur ultrices vestibulum massa. Ut in nibh eget ligula
                fringilla placerat vel et mi. Integer mattis velit ut aliquet
                pulvinar.
              </p>
              <a
                href="#"
                className="text-green-500 hover:text-green-600 hover:underline mt-4"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
