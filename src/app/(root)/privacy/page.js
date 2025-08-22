import Image from "next/image";
import banner from "../../../../public/terms.png";

function PrivacyPolicy() {
  return (
    <main>
      <section
        aria-label="Privacy Policy banner"
        className="relative   w-full bg-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30 z-10 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl md:text-6xl font-bold mb-2">
            Privacy Policy
          </h2>
        </div>
        <Image src={banner} alt="Privacy Policy Banner" />
      </section>
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1F2E4A] mb-6 text-center">
          PRIVACY NOTICE
        </h1>

        <p className="text-gray-700 leading-relaxed text-justify space-y-4">
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by using our table of
          contents below to find the section you are looking for.
          <br />
          <br />
          <span className="font-semibold">
            What personal information do we process?
          </span>
          When you visit, use, or navigate our Services, we may process personal
          information depending on how you interact with{" "}
          <span className="italic">[Company Name]</span>
          and the Services, the choices you make, and the products and features
          you use.
          <br />
          <br />
          <span className="font-semibold">
            Do we process any sensitive personal information?
          </span>
          [We do not process sensitive personal information. / We may process
          sensitive personal information when necessary with your consent or as
          otherwise permitted by applicable law.]
          <br />
          <br />
          <span className="font-semibold">
            Do you receive any information from third parties?
          </span>
          We may receive information from public databases, marketing partners,
          social media platforms, and other outside sources.
          <br />
          <br />
          <span className="font-semibold">
            How do you process my information?
          </span>
          We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with law. We may also process your information for other
          purposes with your consent. We process your information only when we
          have a valid legal reason to do so.
          <br />
          <br />
          <span className="font-semibold">
            In what situations and with which types of parties do we share
            personal information?
          </span>
          We may share information in specific situations and with specific
          categories of third parties.
          <br />
          <br />
          <span className="font-semibold">
            How do we keep your information safe?
          </span>
          We have organizational and technical processes and procedures in place
          to protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information.
        </p>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
