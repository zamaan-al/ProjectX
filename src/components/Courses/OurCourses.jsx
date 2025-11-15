import React from "react";

const OurCourses = () => {
    return (
        <section className="bg-black py-16 relative overflow-hidden">
            {/* Overlay Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    // Overlay goes from exact black at top to #1C8CC4 at the bottom
                    background: "linear-gradient(to bottom, #000000 0%, #0b77ac 100%)",
                    zIndex: 0,
                }}
            ></div>
            {/* Section Heading */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <img
                 className="mt-10 md:mt-16 w-[200px] md:w-[250px] lg:w-[400px] mx-auto"
                    src="/Our Courses.png"
                />
            </div>

            {/* Level Card 1*/}
            <div className="mt-40 w-full relative z-10">
                <div
                    className="relative rounded-none overflow-hidden shadow-lg w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("/courses1.webp")`,
                        minHeight: "450px",
                        opacity: 0.7,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Centered Content */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="border-2 border-dashed border-blue-400 rounded-xl p-6 sm:p-10 text-white">
                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
                                Level 1 | Junior Innovator
                            </h2>
                            {/* Course Description */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/product-description.png"
                                        alt="Course Description"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">
                                            Course Description
                                        </h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">
                                            "Junior Innovator explores electronics fundamentals—Volts, ICs,
                                            resistors, capacitors, breadboard wiring, multi meter usage,
                                            LDRs, DC current, series, parallel wiring, and circuit symbols,
                                            fostering hands-on learning."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Modules */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/study-program.png"
                                        alt="Modules"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Modules</h3>
                                        <ul className="list-none text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li>Electronics Excellence Program-1</li>
                                            <li>Electronics Excellence Program-2</li>
                                            <li>Electronics Excellence Program-3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Duration */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/history (2).png"
                                        alt="Duration"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Duration</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">3 Months</p>
                                    </div>
                                </div>
                            </div>
                            {/* Benefits */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/benefit.png"
                                        alt="Benefits"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Benefits</h3>
                                        <ol className="list-decimal list-inside text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li>Practice on 40 projects</li>
                                            <li>Electronics fundamentals comprehension</li>
                                            <li>Understanding of volts, resistors, capacitors</li>
                                            <li>Proficiency in breadboard wiring & project testing</li>
                                            <li>Skillful use of multi meter</li>
                                            <li>Knowledge of circuit symbols and configurations</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            {/* Eligibility */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/criteria.png"
                                        alt="Eligibility"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Eligibility</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">4th standard onwards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Level Card 2*/}
            <div className="mt-50 w-full relative z-10">
                <div
                    className="relative rounded-none overflow-hidden shadow-lg w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("/level2.png")`,
                        minHeight: "450px",
                        opacity: 0.7,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Centered Content */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="border-2 border-dashed border-blue-400 rounded-xl p-6 sm:p-10 text-white">
                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
                                Level 2  |  Young Innovator
                            </h2>
                            {/* Course Description */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/product-description.png"
                                        alt="Course Description"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">
                                            Course Description
                                        </h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">
                                            "Young Innovator delves into advanced electronics: soldering,  disordering,
                                            PCB designing, etching, binary &   gate, rectifiers,  and transformers, fostering
                                            expertise in digital and analog  electronics."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Modules */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/study-program.png"
                                        alt="Modules"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Modules</h3>
                                        <ul className="list-none text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li> Electronics Advanced Program-1</li>
                                            <li> Electronics Advanced Program-2</li>
                                            <li> Electronics Advanced Program-3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Duration */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/history (2).png"
                                        alt="Duration"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Duration</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">3 Months</p>
                                    </div>
                                </div>
                            </div>
                            {/* Benefits */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/benefit.png"
                                        alt="Benefits"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Benefits</h3>
                                        <ol className="list-decimal list-inside text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li>Advanced soldering and  de soldering techniques </li>
                                            <li> PCB (Printed Circuit Board) designing and etching skills </li>
                                            <li> Understanding of binary logic and logic gates </li>
                                            <li> Knowledge of rectifiers and transformers </li>
                                            <li>Expertise in both digital and analog electronics</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            {/* Eligibility */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/criteria.png"
                                        alt="Eligibility"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Eligibility</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">Completion of Level 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Level Card 3*/}
            <div className="mt-50 w-full relative z-10">
                <div
                    className="relative rounded-none overflow-hidden shadow-lg w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("/level3.png")`,
                        minHeight: "450px",
                        opacity: 0.7,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Centered Content */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="border-2 border-dashed border-blue-400 rounded-xl p-6 sm:p-10 text-white">
                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
                                Level 3  |  Master Innovator
                            </h2>
                            {/* Course Description */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/product-description.png"
                                        alt="Course Description"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">
                                            Course Description
                                        </h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">
                                            "Master  •Master Innovator Innovator  delves  into  AC components,  micro controllers,
                                            coding, and home appliance repair,  cultivating expertise in advanced electronics, coding,
                                            and  practical problem-solving skills."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Modules */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/study-program.png"
                                        alt="Modules"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Modules</h3>
                                        <ul className="list-none text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li> Electronics Master Program-1</li>
                                            <li>Electronics Master Program-2</li>
                                            <li>Electronics Master Program-3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Duration */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/history (2).png"
                                        alt="Duration"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Duration</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">3 Months</p>
                                    </div>
                                </div>
                            </div>
                            {/* Benefits */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/benefit.png"
                                        alt="Benefits"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Benefits</h3>
                                        <ol className="list-decimal list-inside text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li> AC electronics expertise</li>
                                            <li> Micro controller programming proficiency</li>
                                            <li> Advanced electronics knowledge</li>
                                            <li> Home appliance repair skills</li>
                                            <li>Coding proficiency</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            {/* Eligibility */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/criteria.png"
                                        alt="Eligibility"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Eligibility</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">Completion of Level 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Level Card 4*/}
            <div className="mt-50 w-full relative z-10">
                <div
                    className="relative rounded-none overflow-hidden shadow-lg w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("/level4.png")`,
                        minHeight: "450px",
                        opacity: 0.7,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Centered Content */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="border-2 border-dashed border-blue-400 rounded-xl p-6 sm:p-10 text-white">
                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
                                Level 4  |  Product Developer
                            </h2>
                            {/* Course Description */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/product-description.png"
                                        alt="Course Description"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">
                                            Course Description
                                        </h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">
                                            "Product Developer course focuses on Cricut designing,  embedded systems, problem identification,
                                            ideation, design,  and prototype making, fostering skills crucial for innovative  product development."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Modules */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/study-program.png"
                                        alt="Modules"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Modules</h3>
                                        <ul className="list-none text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li> Product Development Program-1</li>
                                            <li> Product Development Program-2</li>
                                            <li> Product Development Program-3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Duration */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/history (2).png"
                                        alt="Duration"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Duration</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">3 Months</p>
                                    </div>
                                </div>
                            </div>
                            {/* Benefits */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/benefit.png"
                                        alt="Benefits"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Benefits</h3>
                                        <ol className="list-decimal list-inside text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li>Proficiency in Circuit designing</li>
                                            <li>Expertise in embedded systems</li>
                                            <li>Problem identification skills</li>
                                            <li>Ideation and design abilities</li>
                                            <li>Prototype development proficiency</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            {/* Eligibility */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/criteria.png"
                                        alt="Eligibility"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Eligibility</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">Completion of level 3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Level Card 5*/}
            <div className="mt-50 w-full relative z-10">
                <div
                    className="relative rounded-none overflow-hidden shadow-lg w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("/level5.png")`,
                        minHeight: "450px",
                        opacity: 0.7,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Centered Content */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="border-2 border-dashed border-blue-400 rounded-xl p-6 sm:p-10 text-white">
                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
                                Level 5  |  Startup Founder
                            </h2>
                            {/* Course Description */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/product-description.png"
                                        alt="Course Description"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">
                                            Course Description
                                        </h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">
                                            "Tech Startup Founder course explores entrepreneurship,  ideation, market analysis,
                                            product development, funding  strategies, and leadership skills, equipping aspiring  innovators for successful tech ventures."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Modules */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/study-program.png"
                                        alt="Modules"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Modules</h3>
                                        <ul className="list-none text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                            <li> Startup Founder Program-1</li>
                                            <li> Startup Founder Program-2</li>
                                            <li> Startup Founder Program-3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Duration */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/history (2).png"
                                        alt="Duration"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Duration</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">3 Months</p>
                                    </div>
                                </div>
                            </div>
                            {/* Benefits */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/benefit.png"
                                        alt="Benefits"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Benefits</h3>
                                        <ol className="list-decimal list-inside text-sm text-gray-200 sm:text-base mt-2 max-w-3xl space-y-1">
                                           <li> Entrepreneurial mindset and skills</li>
                                           <li> Ideation and creativity</li>
                                           <li> Market analysis proficiency</li>
                                           <li> Product development expertise</li>
                                           <li> Leadership and management capabilities</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            {/* Eligibility */}
                            <div className="mb-6">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/criteria.png"
                                        alt="Eligibility"
                                        className="w-7 h-7 opacity-70"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-lg sm:text-xl">Eligibility</h3>
                                        <p className="text-sm text-gray-200 sm:text-base mt-2 max-w-3xl">Complete the level 4 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCourses;