/* eslint-disable react-hooks/exhaustive-deps */
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
      <motion.div
          className="w-full h-full bg-radial bg-no-repeat bg-right"
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: -50, opacity: 0}}
      >
        <div className="flex items-center justify-center h-full max-w-7xl mx-auto">
          <div className="lg:w-1/2 w-full mx-10 lg:ml-10 flex flex-col justify-between h-[80%] lg:h-auto">
            <div className="mb-20">
              <p className="text-white text-lg">Hello, i am</p>
              <h1 className="text-white lg:text-6xl md:text-5xl text-5xl">
                Alhikam Dirga Ramadhan
              </h1>

              <h2 className=" text-[#E99287] lg:text-3xl md:text-2xl text-xl flex items-center gap-3">
                <span className="animate-pulse">&#62;</span>
                <Typewriter
                    options={{
                      loop: true,
                      wrapperClassName:
                          " text-[#E99287] lg:text-2xl md:text-2xl text-xl gap-3",
                      cursorClassName:
                          " text-[#E99287] lg:text-2xl md:text-2xl text-xl gap-3",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                          .typeString(`Ngoding serasa main puzzle, tapi kalau salah, mesin langsung ngambek.`)
                          .pauseFor(1000)
                          .deleteAll()

                          .typeString(`Si perfeksionis yang suka kontrol, bahkan pixel pun nggak bisa lolos.`)
                          .pauseFor(500)
                          .deleteAll()

                          .typeString(`Sok tegas soal keamanan, tapi diam-diam suka bikin programmer tenang.`)
                          .pauseFor(500)
                          .deleteAll()

                          .typeString(`Kode sesantai ngobrol, hasilnya kayak nyewa pekerja outsourcing.`)
                          .pauseFor(500)
                          .deleteAll()

                          .typeString(`Si lincah yang bisa di mana saja, tapi sering bikin bug jadi bagian keluarga.`)
                          .pauseFor(500)
                          .deleteAll()

                          .typeString(`Si veteran web yang masih eksis, walau kadang kode-nya kayak teka-teki silang.`)
                          .pauseFor(500)
                          .start();
                    }}
                />
              </h2>
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-[#607B96]">
                # you can also see it on my Github page
              </p>
              <p>
                <span className="text-[#4D5BCE]">github_link</span>{" "}
                <span className="text-white">:</span>{" "}
                <span className="text-[#E99287]">str</span>{" "}
                <span className="text-white">=</span>{" "}
                <a
                    href="https://github.com/AlhikamWarsawa"
                    className="text-[#E99287]"
                    target="_blank"
                    rel="noreferrer"
                >
                  "https://github.com/AlhikamWarsawa"
                </a>
              </p>
              <div className="mt-4">
                <iframe src="https://github.com/sponsors/AlhikamWarsawa/card"
                        title="Sponsor AlhikamWarsawa"
                        height="225" width="600" style={{border: 0}}>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  );
}