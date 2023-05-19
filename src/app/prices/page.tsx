export default function Prices() {
  return (
    <section className="flex md:p-20 ">
      <div className="flex flex-col md:pl-44 items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Prices</h1>
        <p className="text-gray-600 mb-8">
          Choose the pricing plan that suits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-2/3 ">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mi eu sem commodo, id euismod dolor eleifend.
            </p>
            <p className="text-2xl font-bold">$49/month</p>
            <a
              href="#"
              className="text-white bg-green-500 hover:bg-green-600 hover:text-white py-2 px-4 rounded mt-4 inline-block"
            >
              Get Started
            </a>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Advanced Plan</h3>
            <p className="text-gray-300 mb-4">
              Sed malesuada, magna non faucibus posuere, diam ante sollicitudin
              dui, in gravida mauris purus sit amet velit.
            </p>
            <p className="text-2xl font-bold">$99/month</p>
            <a
              href="#"
              className="text-white bg-green-500 hover:bg-green-600 hover:text-white py-2 px-4 rounded mt-4 inline-block"
            >
              Get Started
            </a>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Enterprise Plan</h3>
            <p className="text-gray-300 mb-4">
              Curabitur ultrices vestibulum massa. Ut in nibh eget ligula
              fringilla placerat vel et mi. Integer mattis velit ut aliquet
              pulvinar.
            </p>
            <p className="text-xl text-gray-300">Price: Custom</p>
            <a
              href="#"
              className="text-white bg-green-500 hover:bg-green-600 hover:text-white py-2 px-4 rounded mt-4 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
