import {Popover, Transition} from "@headlessui/react";
import {AiOutlineClose} from "@react-icons/all-files/ai/AiOutlineClose";
import {GoTriangleDown} from "@react-icons/all-files/go/GoTriangleDown";
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight";
import {RiFolder3Fill} from "@react-icons/all-files/ri/RiFolder3Fill";
import {VscCollapseAll} from "@react-icons/all-files/vsc/VscCollapseAll";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {IoLogoPython} from "@react-icons/all-files/io5/IoLogoPython";
import {SiRust} from "react-icons/si";
import {SiC} from "react-icons/si";
import {FaPlay} from "react-icons/fa";
import { SiAssemblyscript } from "react-icons/si";

export default function AboutMe() {
  const [render, setRender] = useState("my-bio");

  function Render(value) {
    if (value === "/") {
      return <Root/>;
    } else if (value === "my-bio") {
      return <MyBio closeBio={setRender}/>;
    } else if (value === "hello-world") {
      return <HelloWorld closeHelloWorld={setRender}/>;
    } else if (value === "certifications") {
      return <Certification closeCertification={setRender}/>;
    }
  }

  return (
      <motion.div
          className="w-full h-full"
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: -50, opacity: 0}}
      >
        <div className="lg:grid grid-cols-12 h-full flex flex-col ">
          <div className="col-span-2 grid lg:grid-cols-6">
            <div
                className="col-span-6 lg:border-r lg:border-b-0 border-b border-[#101419] text-white gap-2.5 relative overflow-hidden">
              <PersonalInfo setRender={setRender} render={render}/>
            </div>
          </div>
          <AnimatePresence initial={false}>{Render(render)}</AnimatePresence>
        </div>
      </motion.div>
  );
}

function Root() {
  return (
      <motion.div
          className="w-full h-full flex items-center justify-center text-white col-span-10"
          initial={{x: -50, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 50, opacity: 0}}
      >
        Nothing here, click something
      </motion.div>
  );
}

function MyBio({closeBio}) {
  const [output, setOutput] = useState("");

  const runCode = () => {
    const profileOutput = `Hello, my name is Alhikam Dirga Ramadhan
Class: XI-RPL1
Hobby: Coding, Ngoding, Nunggu Weekend
Languages Known: Rust, C, Python, JavaScript, PHP, SQL
Currently Learning:
  - Languages: Python, Rust, C
  - Other: Calculus, Machine Learning
Volunteering since 2024, working as Technical Writer Write articles about web development on Medium. Focus on website development topics. Make simple tutorials for beginners and learn to optimize websites. Actively interact with the developer community and learn from their feedback.
`;

    setOutput(profileOutput);
  };

  return (
      <motion.div
          className="col-span-10 h-full flex justify-center overflow-hidden flex-col"
          initial={{x: -50, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 50, opacity: 0}}
      >
        <div className="w-full">
          <div className="grid grid-cols-12 border-b border-[#101419]">
            <div className="lg:col-span-2 md:col-span-6 col-span-12 text-white py-2.5 relative px-4">
              <button
                  className="absolute top-1/2 -translate-y-1/2 right-4"
                  onClick={() => {
                    closeBio("/");
                  }}
              >
                <AiOutlineClose/>
              </button>
              <p className="pr-5 truncate">personal.py</p>
            </div>
            <div className="lg:col-span-10 md:col-span-6 col-span-12 flex justify-end items-center pr-4">
              <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded flex items-center"
                  onClick={runCode}
              >
                <FaPlay className="mr-2"/> Run
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto scrollbar-thin h-full flex flex-col">
          <SyntaxHighlighter
              language="python"
              style={atomOneDark}
              showLineNumbers
              className="flex-grow"
          >
            {`class Profile:
    def __init__(self, name, class_name, hobby, languages, currently_learning):
        self.name = name
        self.class_name = class_name
        self.hobby = hobby
        self.languages = languages
        self.currently_learning = currently_learning


class Volunteering:
    def __init__(self, role: str) -> None:
        self.role = role

    def medium(self, start_year: int) -> str:
        return (f"Volunteering since {start_year}, working as {self.role} "
                "Write articles about web development on Medium. Focus on website development topics. "
                "Make simple tutorials for beginners and learn to optimize websites. "
                "Actively interact with the developer community and learn from their feedback.")


# Creating a profile instance
profile = Profile(
    name="Alhikam Dirga Ramadhan",
    class_name="XI-RPL1",
    hobby=["Coding", "Ngoding", "Nunggu Weekend"],
    languages=["Rust", "C", "Python", "JavaScript", "PHP", "SQL"],
    currently_learning={
        "Languages": ["Python", "Rust", "C"],
        "Other": ["Calculus", "Machine Learning"]
    },
)

# Volunteering experience
medium_volunteers = Volunteering("Technical Writer")

# Printing profile details
print(f"Hello, my name is {profile.name.capitalize()}")
print(f"Class: {profile.class_name}")
print("Hobby:", ", ".join(profile.hobby))
print("Languages Known:", ", ".join(profile.languages))
print("Currently Learning:")
print("  - Languages:", ", ".join(profile.currently_learning["Languages"]))
print("  - Other:", ", ".join(profile.currently_learning["Other"]))

# Volunteering details
print(medium_volunteers.medium(2024))
`}
          </SyntaxHighlighter>
          {output && (
              <div className="bg-gray-900 p-4 border-t border-[#101419]">
                <h3 className="text-white font-bold mb-2">Output:</h3>
                <pre className="text-white whitespace-pre-wrap">{output}</pre>
              </div>
          )}
        </div>
      </motion.div>
  );
}

function Certification({closeCertification}) {
  const [output, setOutput] = useState("");

  const runCode = () => {
    const certOutput = `===========================================================
                  Licenses & Certifications                
===========================================================

1. Git: Pemula sampai Mahir
   Issued by       : Udemy
   Credential ID   : UC-1139d7a2-56fc-4394-8ac0-daa1b0eb72fe

2. Belajar Dasar AI
   Issued by       : Dicoding Indonesia
   Issued          : Jun 2024  |  Expires: Jun 2027
   Credential ID   : 4EXGQ7WEDZRL

3. Google Play Store Listing Certificate
   Issued by       : Google Play
   Issued          : Sep 2024  |  Expires: Sep 2027
   Credential ID   : 114714033

===========================================================
                    Certificate of Competency              
===========================================================

1. Membuat Landing Page Dengan HTML dan CSS
   Issued by       : PT. WAN Teknologi Internasional
   Issued          : Dec 2023
   Credential ID   : 030/WTI/SERTIKOM/23
   Nilai Akhir     : 99 (Kompeten)

2. Membuat Aplikasi Pemesanan Hotel Berbasis Web
   Issued by       : PT Dimensi Kreasi Nusantara
   Issued          : Jun 2024
   Credential ID   : 002/DKN-SERKOM/VI/2024
   Nilai Akhir     : 92 (Sangat Kompeten)

===========================================================`;

    setOutput(certOutput);
  };

  return (
      <motion.div
          className="col-span-10 h-full flex justify-center overflow-hidden flex-col"
          initial={{x: -50, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 50, opacity: 0}}
      >
        <div className="w-full">
          <div className="grid grid-cols-12 border-b border-[#101419]">
            <div className="lg:col-span-2 md:col-span-6 col-span-12 text-white border-r border-[#101419] py-2.5 relative px-4">
              <button
                  className="absolute top-1/2 -translate-y-1/2 right-4"
                  onClick={() => {
                    closeCertification("/");
                  }}
              >
                <AiOutlineClose/>
              </button>
              <p className="pr-5 truncate">certs.c</p>
            </div>
            <div className="lg:col-span-10 md:col-span-6 col-span-12 flex justify-end items-center pr-4">
              <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded flex items-center"
                  onClick={runCode}
              >
                <FaPlay className="mr-2"/> Run
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto scrollbar-thin h-full flex flex-col">
          <SyntaxHighlighter
              language="c"
              style={atomOneDark}
              showLineNumbers
              className="flex-grow"
          >
            {`#include <stdio.h>

int main() {
    printf("===========================================================\\n");
    printf("                  Licenses & Certifications                \\n");
    printf("===========================================================\\n\\n");

    /* 1. Git: Pemula sampai Mahir */
    printf("1. Git: Pemula sampai Mahir\\n");
    printf("   Issued by       : Udemy\\n");
    printf("   Credential ID   : UC-1139d7a2-56fc-4394-8ac0-daa1b0eb72fe\\n\\n");

    /* 2. Belajar Dasar AI */
    printf("2. Belajar Dasar AI\\n");
    printf("   Issued by       : Dicoding Indonesia\\n");
    printf("   Issued          : Jun 2024  |  Expires: Jun 2027\\n");
    printf("   Credential ID   : 4EXGQ7WEDZRL\\n\\n");

    /* 3. Google Play Store Listing Certificate */
    printf("3. Google Play Store Listing Certificate\\n");
    printf("   Issued by       : Google Play\\n");
    printf("   Issued          : Sep 2024  |  Expires: Sep 2027\\n");
    printf("   Credential ID   : 114714033\\n\\n");

    printf("===========================================================\\n");
    printf("                    Certificate of Competency              \\n");
    printf("===========================================================\\n\\n");

    /* 1. Membuat Landing Page Dengan HTML dan CSS */
    printf("1. Membuat Landing Page Dengan HTML dan CSS\\n");
    printf("   Issued by       : PT. WAN Teknologi Internasional\\n");
    printf("   Issued          : Dec 2023\\n");
    printf("   Credential ID   : 030/WTI/SERTIKOM/23\\n");
    printf("   Nilai Akhir     : 99 (Kompeten)\\n\\n");

    /* 2. Membuat Aplikasi Pemesanan Hotel Berbasis Web */
    printf("2. Membuat Aplikasi Pemesanan Hotel Berbasis Web\\n");
    printf("   Issued by       : PT Dimensi Kreasi Nusantara\\n");
    printf("   Issued          : Jun 2024\\n");
    printf("   Credential ID   : 002/DKN-SERKOM/VI/2024\\n");
    printf("   Nilai Akhir     : 92 (Sangat Kompeten)\\n\\n");

    printf("===========================================================\\n");

    return 0;
}
`}
          </SyntaxHighlighter>
          {output && (
              <div className="bg-gray-900 p-4 border-t border-[#101419]">
                <h3 className="text-white font-bold mb-2">Output:</h3>
                <pre className="text-white whitespace-pre-wrap">{output}</pre>
              </div>
          )}
        </div>
      </motion.div>
  );
}

function HelloWorld({closeHelloWorld}) {
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput("Selamat datang di portofolio saya! Di sini, Anda akan menemukan proyek, keterampilan, dan pencapaian saya. Terima kasih telah berkunjung, dan semoga menikmati!");
  };

  return (
      <motion.div
          className="col-span-10 h-full flex justify-center overflow-hidden flex-col"
          initial={{x: -50, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 50, opacity: 0}}
      >
        <div className="w-full">
          <div className="grid grid-cols-12 border-b border-[#101419]">
            <div
                className="lg:col-span-2 md:col-span-6 col-span-12 text-white border-r border-[#101419] py-2.5 relative px-4">
              <button
                  className="absolute top-1/2 -translate-y-1/2 right-4"
                  onClick={() => {
                    closeHelloWorld("/");
                  }}
              >
                <AiOutlineClose/>
              </button>
              <p className="pr-5 truncate">hello.asm</p>
            </div>
            <div className="lg:col-span-10 md:col-span-6 col-span-12 flex justify-end items-center pr-4">
              <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded flex items-center"
                  onClick={runCode}
              >
                <FaPlay className="mr-2"/> Run
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto scrollbar-thin h-full flex flex-col">
          <SyntaxHighlighter
              language="assembler"
              style={atomOneDark}
              showLineNumbers
              className="flex-grow"
          >
            {`section .data
    msg db "Selamat datang di portofolio saya! Di sini,", 0xA
        db "Anda akan menemukan proyek, keterampilan, dan pencapaian saya.", 0xA
        db "Terima kasih telah berkunjung,", 0xA
        db "dan semoga menikmati!", 0xA, 0

section .text
    global _start

_start:
    mov eax, 4           
    mov ebx, 1           
    mov ecx, msg         
    mov edx, 121         
    int 0x80             

    mov eax, 1           
    xor ebx, ebx         
    int 0x80             
`}
          </SyntaxHighlighter>
          {output && (
              <div className="bg-gray-900 p-4 border-t border-[#101419]">
                <h3 className="text-white font-bold mb-2">Output:</h3>
                <pre className="text-white whitespace-pre-wrap">{output}</pre>
              </div>
          )}
        </div>
      </motion.div>
  );
}

function PersonalInfo({setRender, render}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenBio, setIsOpenBio] = useState(true);

  function openPopover() {
    setIsOpen(!isOpen);
  }

  function CollapseAll() {
    setIsOpenBio(false);
  }

  function openPopoverBio() {
    setIsOpenBio(!isOpenBio);
  }

  return (
      <Popover>
        <>
          <div className="relative">
            <Popover.Button
                className={`
                ${isOpen ? "text-white" : "text-white/50"}
               flex items-center gap-2.5 border-b border-[#101419] py-2.5 px-4 w-full`}
                onClick={openPopover}
            >
              <GoTriangleDown
                  className={`${isOpen ? "" : "-rotate-90"} transition-all`}
              />
              <span className="text-left pr-5 truncate">personal info</span>
            </Popover.Button>
            <button
                onClick={CollapseAll}
                className="absolute top-1/2 -translate-y-1/2 right-2"
            >
              <VscCollapseAll/>
            </button>
          </div>

          <Transition
              show={isOpen}
              enter="transition ease-in duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-out duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className=" px-4 text-white py-4">
              <Popover.Group className={`flex flex-col gap-1.5`}>
                <Popover>
                  <>
                    <Popover.Button
                        className={`
                ${isOpenBio ? "text-white" : "text-white/50"}
               flex items-center gap-2.5  w-full transition-colors`}
                        onClick={openPopoverBio}
                    >
                      <HiChevronRight
                          className={`${isOpenBio ? "rotate-90" : ""
                          } transition-all`}
                      />
                      <RiFolder3Fill
                          className={`${isOpenBio ? "text-[#E99287]" : "text-[#b36d64]"
                          } transition-colors`}
                      />
                      <span className="pr-5 truncate">bio</span>
                    </Popover.Button>

                    <Transition
                        show={isOpenBio}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-linear duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                        className="flex flex-col"
                    >
                      <Popover.Panel
                          className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors ${render === "my-bio" ? "text-white" : "text-[#607B96]"
                          }`}
                          as="button"
                          onClick={() => setRender("my-bio")}
                      >
                        <IoLogoPython/>
                        <span className="truncate">personal.py</span>
                      </Popover.Panel>
                      <Popover.Panel
                          className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors ${render === "certifications" ? "text-white" : "text-[#607B96]"
                          }`}
                          as="button"
                          onClick={() => setRender("certifications")}
                      >
                        <SiC/>
                        <span className="truncate">certs.c</span>
                      </Popover.Panel>
                      <Popover.Panel
                          className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors ${render === "hello-world" ? "text-white" : "text-[#607B96]"
                          }`}
                          as="button"
                          onClick={() => setRender("hello-world")}
                      >
                        <SiAssemblyscript/>
                        <span className="truncate">hello.asm</span>
                      </Popover.Panel>
                    </Transition>
                  </>
                </Popover>
              </Popover.Group>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
  );
}
