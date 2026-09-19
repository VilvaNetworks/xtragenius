import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function MDsMessage() {
  return (
    <>
      {/* Top Header Section with Curve */}
      <section className="bg-white relative pt-8 pb-16">
        <div className="mx-auto max-w-[1200px] px-4 text-center relative z-10">
          <AnimateOnScroll delay={0}>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#696969",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              Success story
            </h3>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#3F3A64",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              The biggest turning point in my life: <br />
              Wonderful choice.
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SVG Curve Divider */}
      <div className="w-full overflow-hidden leading-none -mt-16 bg-[#fcfcfc]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[60px] md:h-[120px]"
          style={{ fill: "white" }}
        >
          <path d="M0,0 Q600,120 1200,0 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Main Content Section */}
      <section className="bg-[#fcfcfc] pb-16 pt-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex flex-col gap-12 md:flex-row md:gap-16">
            
            {/* Image Column */}
            <AnimateOnScroll delay={100} className="w-full md:w-5/12">
              <div className="relative overflow-hidden rounded-[8px]">
                <img
                  src="/images/md-message.jpg"
                  alt="MD's Message"
                  className="w-full h-auto object-cover rounded-[8px]"
                />
              </div>
            </AnimateOnScroll>

            {/* Text Column */}
            <AnimateOnScroll delay={200} className="w-full md:w-7/12 pt-4">
              <div className="text-[#696969] space-y-6 text-[15px] leading-[1.8]">
                <p>
                  At Xtragenius, we put ourselves in every child&apos;s shoes to understand what they truly need to grow — and build a curriculum around that, rather than the other way around. Every abacus, Vedic Maths, Mind Dart and handwriting programme we run exists to help a child think faster, focus longer, and believe in what they&apos;re capable of.
                </p>
                <p>
                  Thank you for taking the time to visit our website. If you care about helping India&apos;s children unlock their mental potential, do read on. John F. Kennedy once said &quot;Children are the most valuable resource in this world and the best hope for the future,&quot; and at Xtragenius we hold the same belief — that empowering our children today is how we build a better tomorrow. As we like to say: we cannot build the future for our children, but we can build our children for the future.
                </p>
              </div>

              <div className="mt-10 pl-6">
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#3F3A64",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  What I&apos;ve learned watching thousands <br/> of children pass through our <mark className="bg-transparent text-[#ff6600] p-0 font-bold">programmes</mark> <br/> is that every child has a <mark className="bg-transparent text-[#ff6600] p-0 font-bold">genius</mark> <br/> waiting to be uncovered — our job <br/> is simply to give them the right <br/> tools, at the right time.
                </h3>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ / Info Section (2 Column Layout) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 space-y-16">
          
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Question */}
              <div className="w-full md:w-4/12 flex gap-4">
                <div className="text-[#ff6600] mt-1 text-[18px]">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <h3 className="text-[17px] font-bold text-[#3F3A64] leading-[1.6] m-0">
                  Why do parents choose Xtragenius for their child&apos;s mental development?
                </h3>
              </div>

              {/* Answer */}
              <div className="w-full md:w-8/12 pl-8 md:pl-0">
                <ul className="space-y-6">
                  <li className="flex gap-4 text-[#696969] text-[15px] leading-[1.7]">
                    <div className="text-[#ff6600] mt-1 shrink-0"><i className="fas fa-check"></i></div>
                    <div><strong>STRUCTURED LEARNING</strong> – A level-by-level curriculum in Abacus, Vedic Maths, Mind Dart and Handwriting, with certification at every level.</div>
                  </li>
                  <li className="flex gap-4 text-[#696969] text-[15px] leading-[1.7]">
                    <div className="text-[#ff6600] mt-1 shrink-0"><i className="fas fa-check"></i></div>
                    <div>Flexibility – Available both offline through our franchise network and online, so every child can learn in the way that suits them best.</div>
                  </li>
                  <li className="flex gap-4 text-[#696969] text-[15px] leading-[1.7]">
                    <div className="text-[#ff6600] mt-1 shrink-0"><i className="fas fa-check"></i></div>
                    <div>Proven Results – Regular national and international competitions give every child a stage to test and showcase their progress.</div>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="w-full h-px bg-[#eee] my-10"></div>

          <AnimateOnScroll delay={100}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Question */}
              <div className="w-full md:w-4/12 flex gap-4">
                <div className="text-[#ff6600] mt-1 text-[18px]">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <h3 className="text-[17px] font-bold text-[#3F3A64] leading-[1.6] m-0">
                  What makes Xtragenius different from other abacus programmes?
                </h3>
              </div>

              {/* Answer */}
              <div className="w-full md:w-8/12 pl-8 md:pl-0">
                <ul className="space-y-6">
                  <li className="flex gap-4 text-[#696969] text-[15px] leading-[1.7]">
                    <div className="text-[#ff6600] mt-1 shrink-0"><i className="fas fa-check"></i></div>
                    <div>A Community of Learners – Our students train alongside peers from franchise centres across the country and come together at our National Level Offline Competition every year, building confidence through shared achievement, not just classroom hours.</div>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="w-full h-px bg-[#eee] my-10"></div>

          <AnimateOnScroll delay={100}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Question */}
              <div className="w-full md:w-4/12 flex gap-4">
                <div className="text-[#ff6600] mt-1 text-[18px]">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <h3 className="text-[17px] font-bold text-[#3F3A64] leading-[1.6] m-0">
                  What opportunities open up for our franchise partners?
                </h3>
              </div>

              {/* Answer */}
              <div className="w-full md:w-8/12 pl-8 md:pl-0">
                <ul className="space-y-6">
                  <li className="flex gap-4 text-[#696969] text-[15px] leading-[1.7]">
                    <div className="text-[#ff6600] mt-1 shrink-0"><i className="fas fa-check"></i></div>
                    <div>An Entrepreneurial Opportunity – Run your own Xtragenius learning centre with our proven curriculum, training and ongoing support behind you.</div>
                  </li>
                  <li className="flex gap-4 text-[#696969] text-[15px] leading-[1.7]">
                    <div className="text-[#ff6600] mt-1 shrink-0"><i className="fas fa-check"></i></div>
                    <div>Quality of Instruction – Every franchise trainer is certified on the same curriculum, so every child gets the same standard of teaching.</div>
                  </li>
                  <li className="flex gap-4 text-[#696969] text-[15px] leading-[1.7]">
                    <div className="text-[#ff6600] mt-1 shrink-0"><i className="fas fa-check"></i></div>
                    <div>A Trusted Brand – Join a network built over decades of running national-level competitions and franchise centres across India.</div>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  );
}
