import { PropsWithChildren } from "react";
import Image from "next/image";

export default function Login(props: PropsWithChildren) {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 lg:w-1/3 mx-auto">
        <p className="text-center mb-8">
          <Image
            width="109"
            height="109"
            className="w-1/4 mx-auto"
            alt="Aquia Signature Generator logo"
            src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/top-logo.png"
          />
        </p>
        <p className="text-center text-2xl font-semibold font-poppins text-gray-700 mb-6">
          <span className="block">Aquia Signature</span>
          <span className="block">Generator</span>
        </p>
        <p className="text-center">
          <a href="/login">
            <img src="/google_btn.png" className="w-1/2 mx-auto" />
          </a>
        </p>
        {props.children}
      </div>
    </div>
  );
}
