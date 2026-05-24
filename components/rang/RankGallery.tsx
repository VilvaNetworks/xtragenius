"use client";

import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

const students = [
  { id: 1, name: "SANTHOSH", rank: 1, mark: "100", prize: "5000", image: "/images/rank/img1.jpg" },
  { id: 2, name: "DARIKAA", rank: 2, mark: "100", prize: "1000", image: "/images/rank/img2.jpg" },
  { id: 3, name: "VARUNESH", rank: 3, mark: "100", prize: "1000", image: "/images/rank/img3.jpg" },
  { id: 4, name: "VANSHIKA KURA", rank: 4, mark: "100", prize: "1000", image: "/images/rank/img4.jpg" },
  { id: 5, name: "ARAVIND", rank: 5, mark: "98.5", prize: "500", image: "/images/rank/img5.jpg" },
  { id: 6, name: "YAASH AGARWAL", rank: 6, mark: "98.5", prize: "500", image: "/images/rank/img6.jpg" },
  { id: 7, name: "YADHESH", rank: 7, mark: "98.5", prize: "500", image: "/images/rank/img7.jpg" },
  { id: 8, name: "MAHALAKSHMI", rank: 8, mark: "98.5", prize: "500", image: "/images/rank/img8.jpg" },
  { id: 9, name: "JAGADEESHWARAN", rank: 9, mark: "98.5", prize: "500", image: "/images/rank/img9.jpg" },
  { id: 10, name: "VARSHA GANDHAR", rank: 10, mark: "98.5", prize: "500", image: "/images/rank/img10.jpg" },
  { id: 11, name: "ROSHINI", rank: 11, mark: "98.5", prize: "500", image: "/images/rank/img11.jpg" },
  { id: 12, name: "RINESH", rank: 12, mark: "97", prize: "500", image: "/images/rank/img12.jpg" },
  { id: 13, name: "VISHWA", rank: 13, mark: "97", prize: "500", image: "/images/rank/img13.jpg" },
  { id: 14, name: "POOJA", rank: 14, mark: "97", prize: "500", image: "/images/rank/img14.jpg" },
];

const StudentCard = ({ student }: { student: typeof students[0] }) => {
  return (
    <div className="relative group w-full overflow-hidden cursor-pointer bg-gray-100 aspect-[4/5] shadow-sm">
      <Image
        src={student.image}
        alt={student.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
        <h5 className="text-[18px] font-bold mb-2 uppercase tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {student.name}
        </h5>
        <div className="text-[14px] flex flex-col items-center gap-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          <div>
            Rank: <span className="font-bold">{student.rank}</span> &nbsp;&nbsp; Mark: <span className="font-bold">{student.mark}</span>
          </div>
          <div>
            Prize : <span className="font-bold">{student.prize}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RankGallery() {
  const rank1 = students.slice(0, 1);
  const ranks2to4 = students.slice(1, 4);
  const ranks5to9 = students.slice(4, 9);
  const ranks10to14 = students.slice(9, 14);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-4">

        <AnimateOnScroll delay={100}>
          <div className="mb-8">
            <span className="inline-block bg-[#ff6600] text-white text-[14px] font-bold px-4 py-1">
              LEVEL 1
            </span>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-6 md:gap-8">
          {/* Row 1: Rank 1 (Centered, slightly larger) */}
          <div className="flex justify-center">
            <AnimateOnScroll delay={200} className="w-full max-w-[280px] sm:max-w-[320px]">
              <StudentCard student={rank1[0]} />
            </AnimateOnScroll>
          </div>

          {/* Row 2: Ranks 2-4 (3 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-[900px] mx-auto w-full">
            {ranks2to4.map((student, index) => (
              <AnimateOnScroll delay={300 + index * 100} key={student.id}>
                <StudentCard student={student} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Row 3: Ranks 5-9 (5 columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6 w-full">
            {ranks5to9.map((student, index) => (
              <AnimateOnScroll delay={200 + index * 50} key={student.id}>
                <StudentCard student={student} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Row 4: Ranks 10-14 (5 columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6 w-full">
            {ranks10to14.map((student, index) => (
              <AnimateOnScroll delay={200 + index * 50} key={student.id}>
                <StudentCard student={student} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
