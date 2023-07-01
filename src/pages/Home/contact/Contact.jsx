import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(name, email, message);
  };

  return (
    <div id="contact" className="pb-11 md:h-screen pt-20">
      <h1 className="text-center text-[#ccd6f6] text-4xl font-bold mb-12">
        Contact With Me
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-3 ">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="md:w-1/2"
        >
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto px-5 md:px-0"
          >
            <div className="mb-2">
              <label className="block mb-2 text-xl text-[#ccd6f6]">
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-xl text-[#ccd6f6]">
                Your Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300"
                required
              />
            </div>

            <div className="mb-2">
              <label className="block mb-2 text-xl text-[#ccd6f6]">
                Your Message:
              </label>
              <textarea
                name="message"
                placeholder="Enter Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="md:w-1/2 flex flex-col  justify-center px-5 md:px-0"
        >
          <h2 className="text-[#ccd6f6] text-2xl font-bold ">Email</h2>
          <p className="text-[#39f4ed] text-xl font-semibold ">
            mahadihasan8461@gmail.com (Recommended)
          </p>
          <h2 className="text-[#ccd6f6] text-2xl font-bold ">Mobile</h2>
          <p className="text-[#39f4ed] text-xl font-semibold ">
            +8801865-697584
          </p>
          <h2 className="text-[#ccd6f6] text-2xl font-bold ">Whats app</h2>
          <p className="text-[#39f4ed] text-xl font-semibold ">
            +8801865-697584 (Always Available)
          </p>
          <h2 className="text-[#ccd6f6] text-2xl font-bold ">Social</h2>
          <div className="flex gap-2">
            <Link className="text-[#39f4ed] text-xl font-semibold underline">
              Facebook
            </Link>
            <Link className="text-[#39f4ed] text-xl font-semibold underline">
              Linkedin
            </Link>
            <Link className="text-[#39f4ed] text-xl font-semibold underline">
              Twitter
            </Link>
          </div>
          <h2 className="text-[#ccd6f6] text-2xl font-bold ">Address</h2>
          <p className="text-[#39f4ed] text-xl font-semibold ">
            Gazipur, Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
