import emailjs from "@emailjs/browser";
import { Popover, Transition } from "@headlessui/react";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { GoTriangleDown } from "@react-icons/all-files/go/GoTriangleDown";
import { GrLinkedinOption } from "@react-icons/all-files/gr/GrLinkedinOption";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { motion } from "framer-motion";
import { SiWakatime } from "react-icons/si";
import { useRef, useState } from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import { FaStackOverflow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

export default function ContactMe() {
  const d = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formRef = useRef();
  const [loader, setLoader] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [formData, setFormData] = useState({
    form_name: "",
    message: "",
    email: "",
  });
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(`def running() -> None:
  message: list = [
    name: str =  "John Doe",
    email: str = "johndoe@gmail.com",
    message: str = "Hey!",
    date = "${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}"
  ]

running()`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset setelah 3 detik
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
        .send(
            process.env.REACT_APP_EMAIL_SERVICE,
            process.env.REACT_APP_EMAIL_TEMPLATE,
            {
              from_name: formData.form_name,
              message: formData.message,
              email: formData.email,
            },
            process.env.REACT_APP_EMAIL_JS_USER_ID
        )
        .then(() => {
          setLoader(false);
          setShowNotif(true);
          setTimeout(() => setShowNotif(false), 3000);
          formRef.current.reset();
        });
  };

  return (
      <motion.div
          className="w-full h-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
      >
        <div className="grid grid-cols-12 md:h-full">
          <div className="lg:col-span-2 md:col-span-4 col-span-full">
            <div className="border-r  border-[#101419] text-white gap-2.5 relative overflow-hidden h-full">
              <Contacts />
            </div>
          </div>
          <div className="lg:col-span-10 md:col-span-8 col-span-full ">
            <div className="w-full h-[95%]">
              <div className="grid grid-cols-12 border-b border-t md:border-t-0 border-[#101419]">
                <div className="lg:col-span-2 md:col-span-4 col-span-5 text-white border-r border-[#101419] py-2.5 relative px-4">
                  <button className="absolute top-1/2 -translate-y-1/2 right-4">
                    <AiOutlineClose />
                  </button>
                  <p className="truncate pr-5">contact-me</p>
                </div>
              </div>

              <div className="flex items-center justify-items-center overflow-hidden h-full">
                <div className="lg:w-1/2 w-full flex items-center justify-center lg:border-r border-[#1E2D3D] overflow-y-auto scrollbar-thin h-full">
                  <form
                      onSubmit={sendEmail}
                      ref={formRef}
                      className="text-[#607B96] md:w-[80%] w-[90%] flex flex-col gap-6 relative"
                  >
                    <div className="flex flex-col gap-2.5">
                      <label htmlFor="user_name">_name:</label>
                      <input
                          name="user_name"
                          type="text"
                          placeholder="John Doe"
                          className="bg-[#011221] rounded-lg border-[#1E2D3D] focus:ring-[#607B96] focus:border-[#607B96]/30 text-white placeholder:text-[#465E77]"
                          autoComplete="off"
                          required
                          onChange={(e) => {
                            setFormData({ ...formData, form_name: e.target.value });
                          }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user_email">_email:</label>
                      <input
                          name="user_email"
                          type="email"
                          placeholder="johndoe@gmail.com"
                          className="bg-[#011221] rounded-lg border-[#1E2D3D]  focus:ring-[#607B96] focus:border-[#607B96]/30 text-white placeholder:text-[#465E77]"
                          autoComplete="off"
                          required
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                          }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message">_message:</label>
                      <textarea
                          name="message"
                          rows="4"
                          className="bg-[#011221] rounded-lg border-[#1E2D3D]  focus:ring-[#607B96] focus:border-[#607B96]/30 text-white placeholder:text-[#465E77]"
                          placeholder="Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks!"
                          autoComplete="off"
                          required
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                          }}
                      />
                    </div>
                    <button
                        className={`text-white py-[10px] px-[14px] rounded-lg bg-[#1C2B3A] w-max  hover:shadow-sm hover:shadow-[#607B96] transition-all flex items-end gap-2`}
                        type="submit"
                        value="send"
                    >
                      <span>submit-message</span>
                      <div
                          className={`flex gap-1 mb-1 ${
                              loader ? "block" : "hidden"
                          }`}
                      >
                        <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                        <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                        <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                      </div>
                    </button>
                    {showNotif ? (
                        <p className="animate-pulse absolute -bottom-10">
                          Your email have been sent!
                        </p>
                    ) : null}
                  </form>
                </div>
                <div className="hidden lg:block w-1/2 h-full">
                  <div className="flex items-center justify-start overflow-hidden h-full">
                    <CopyBlock
                        language={`python`}
                        text={`def running() -> None:
  message: list = [
    name: str =  "John Doe",
    email: str = "johndoe@gmail.com",
    message: str = "Hey!",
    date = "${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}"
  ]

running()`}
                        showLineNumbers={true}
                        theme={atomOneDark}
                        wrapLines={true}
                        codeBlock
                        copied={isCopied}
                        onCopy={handleCopy}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  );
}

function Contacts() {
  const [isOpen, setIsOpen] = useState(true);
  function openPopover() {
    setIsOpen(!isOpen);
  }

  return (
      <Popover>
        <>
          <Popover.Button
              className={`
                ${isOpen ? "text-white " : "text-white/50 border-b-0"}
               flex items-center gap-2.5  border-b border-[#101419] py-2.5 px-4 w-full`}
              onClick={openPopover}
          >
            <GoTriangleDown
                className={`${isOpen ? "" : "-rotate-90"} transition-all`}
            />
            <span>Find me</span>
          </Popover.Button>

          <Transition
              show={isOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-linear duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="p-4 w-full flex flex-col gap-1.5">
              <a
                  href="https://www.linkedin.com/in/alhikam/"
                  className="text-[#607B96] hover:text-white inline-flex items-center gap-2.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
              >
                <GrLinkedinOption/>
                <span>LinkedIn</span>
              </a>
              <a
                  href="mailto:alhikam@gmail.com"
                  className="text-[#607B96] hover:text-white inline-flex items-center gap-2.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
              >
                <MdEmail/>
                <span>Email</span>
              </a>
              <a
                  href="https://wakatime.com/@Alhikam"
                  className="text-[#607B96] hover:text-white inline-flex items-center gap-2.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
              >
                <SiWakatime/>
                <span>Wakatime</span>
              </a>
              <a
                  href="https://stackoverflow.com/users/24223659/alhikam-dirga"
                  className="text-[#607B96] hover:text-white inline-flex items-center gap-2.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
              >
                <FaStackOverflow/>
                <span>StackOverflow</span>
              </a>
              <a
                  href="https://github.com/AlhikamWarsawa"
                  className="text-[#607B96] hover:text-white inline-flex items-center gap-2.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
              >
                <FaGithub/>
                <span>Github</span>
              </a>
              <a
                  href="https://medium.com/@alhikam200"
                  className="text-[#607B96] hover:text-white inline-flex items-center gap-2.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
              >
                <FaMedium/>
                <span>Medium</span>
              </a>
              <a
                  href="https://developers.google.com/profile/u/aldra"
                  className="text-[#607B96] hover:text-white inline-flex items-center gap-2.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
              >
                <FaGoogle/>
                <span>Google_Developers</span>
              </a>
              <a
                  href="https://www.cloudskillsboost.google/public_profiles/b5eb9fdc-0089-48bc-ab33-a83e6272f3f2"
                  className="text-[#607B96] hover:text-white inline-flex items-center gap-2.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
              >
                <SiGooglecloud/>
                <span>GCSB</span>
              </a>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
  );
}