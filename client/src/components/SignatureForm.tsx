import Image from "next/image";

export default function SignatureForm() {
  const title = "Aquia Email Signature Generator";
  return (
    <div className="container mx-auto px-4 py-10 w-full md:w-1/3 lg:w-1/3">
      <div className="bg-white rounded shadow-md p-8">
        <p className="text-center mb-8">
          <Image
            width="135"
            height="135"
            className="w-1/4 mx-auto"
            alt="Aquia Signature Generator logo"
            src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/top-logo.png"
          />
        </p>
        <p className="text-center text-2xl font-semibold text-blue-950 mb-6">
          <span className="block">{title}</span>
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="first"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="First Name"
              name="first"
              id="first"
              // value="{{ session.get('given_name', '') }}"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="last"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Last Name"
              name="last"
              id="last"
              // value="{{ session.get('family_name', '') }}"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="position"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Position / Title:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Position / Title"
              name="position"
              id="position"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              name="email"
              id="email"
              maxLength={35}
              pattern=".+@aquia\.us"
              title="Must use @aquia.us email address"
              required
              // value="{{ session.get('email', '') }}"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Phone(Optional):
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone"
              name="phone"
              id="phone"
              maxLength={20}
              // value="{{ session.get('phone')|default('', true) }}"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              LinkedIn URL(Optional):
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="LinkedIn URL"
              name="linkedin"
              id="linkedin"
              pattern="https?://(www\.)?linkedin\.com/.*"
              size={100}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="github"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Github URL(Optional):
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Github URL"
              name="github"
              id="github"
              pattern="https://.*"
              size={100}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="twitter"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Twitter URL(Optional):
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Twitter URL"
              name="twitter"
              id="twitter"
              pattern="https://.*"
              size={100}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="facebook"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Facebook URL(Optional):
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Facebook URL"
              name="facebook"
              id="facebook"
              pattern="https://.*"
              size={100}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="instagram"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Instagram URL(Optional):
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Instagram URL"
              name="instagram"
              id="instagram"
              pattern="https://.*"
              size={100}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-blue-950 text-sm font-bold mb-2"
            >
              Upload headshot photo (.jpg, .png, and .gif formats only and 6MB
              maximum):
            </label>
            <input
              type="file"
              required
              name="file"
              accept="image/png, image/gif, image/jpeg"
              id="file"
            />
          </div>
          <div id="image-box">
            <Image src="" id="image" alt="" className="" />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              id="submit-crop-button"
              className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Crop and Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
