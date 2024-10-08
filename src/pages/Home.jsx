import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
    return (
        <div>
            {/*Section1  */}
            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
        text-white justify-between'>

                <Link to={"/signup"}>
                    <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Join Us</p>
                            <FaArrowRight />
                        </div>
                    </div>

                </Link>

                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"} />
                </div>

                <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className='mx-3 my-12 shadow-blue-200 w-[950px] shadow-xl'>
                    <video
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                {/* Code Section 1 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HighlightText text={"coding potential"} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><link rel="stylesheet"href="styles.css">\n/head>\n`}
                        codeColor={"text-yellow-25"}
                    />
                </div>

                {/* Code Section 2 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HighlightText text={"coding potential"} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                        codeColor={"text-yellow-25"}
                    />
                </div>

                <ExploreMore />
            </div>

            {/*Section 2  */}
            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px]'>

                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white '>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3' >
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>

                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>

                    </div>


                </div>

                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                    <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                        <div className='text-4xl font-semibold w-[45%]'>
                            Get the Skills you need for a
                            <HighlightText text={"Job that is in demand"} />
                        </div>

                        <div className='flex flex-col gap-10 w-[40%] items-start'>
                            <div className='text-[16px]'>
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>

                    </div>



                    <TimelineSection />

                    <LearningLanguageSection />

                </div>



            </div>


            {/*Section 3 */}
            <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

                <InstructorSection />

                <h2 className='text-center text-4xl font-semibold mt-10'>Review from Other Learners</h2>
                {/* Review Slider here */}
                <ReviewSlider/>

            </div>


            {/*Footer */}
            <Footer />

        </div>
    )
}

export default Home



// import React from 'react';
// import {Link} from "react-router-dom"
// import { FaArrowRight } from "react-icons/fa";
// import HighlightText from "../components/core/HomePage/HighlightText"
// import CTAButton from "../components/core/HomePage/Button";
// import Banner from "../assets/Images/banner.mp4"
// import CodeBlocks from "../components/core/HomePage/CodeBlocks";
// import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
// import TimelineSection from '../components/core/HomePage/TimelineSection';
// import InstructorSection from "../components/core/HomePage/InstructorSection";
// import Footer from '../components/common/Footer';
// import ExploreMore from "../components/core/HomePage/ExploreMore"

// const Home = () => {
//     return (
//         <div>
//             {/* Navbar */}

//             {/* section 1 */}
//             <div className='relative mx-auto flex flex-col w-11/12 items-center
//             text-white justify-between'>
//                 <Link to={"/sigunp"}>

//                     <div className=' group p-1 mt-16 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
//                     transition-all duration-200 hover:scale-95 w-fit'>
//                         <div className=' flex flex-row items-center gap-2 rounded-full px-10 py-[5px] 
//                         transition-all duration-200 group-hover:bg-richblack-900 '>
//                             <p>Become an Instructor</p>
//                             <FaArrowRight />
//                         </div>
//                     </div>
//                 </Link>

//                 {/* heading */}
//                 <div className=' mt-6 text-center font-semibold text-4xl flex  '>
//                     Empower your Future with 
//                     <HighlightText text={" Coding Skills"} />
//                 </div>

//                 {/* subheading */}
//                 <div className=' mt-4 w-[90%] text-center text-lg font-semibold text-richblack-300 '>
//                     with our online coding courses, you can learn at your own pace, from anywhere in the world,
//                     and get access to <br /> a wealth of resources, including hands on projects, quizzes, 
//                     and personalized feedback from instructors.
//                 </div>
                
//                 {/* yellow button and  black button  */}
//                 <div className=' flex flex-row gap-7 mt-8'>
//                     <CTAButton active={true} linkto={"/signup"}>
//                         Learn More
//                     </CTAButton>
                    
//                     <CTAButton active={false} linkto={"/login"}>
//                         Book a Demo
//                     </CTAButton>
//                 </div>

//                 {/* video dikhani hai  */}
//                 <div className=' mx-3 my-12 shadow-[5px_-3px_30px_-2px] shadow-blue-100 max-w-3xl '>
//                     <video
//                     muted
//                     loop
//                     autoPlay>
//                         <source src={Banner} type="video/mp4" />
//                     </video>
//                 </div>

//                 {/* code section 1  */}

//                 <div>
//                     <CodeBlocks
//                         position= { " lg:flex-row "}
//                         heading = {
//                             <div className='text-4xl font-semibold'>
//                                 Unlock Your
//                                 <HighlightText text={"coding potential"} />
//                                 with our online courses
//                             </div>
//                         }
//                         subheading = {
//                             " Our Online Courses are avail and available at the following locations and available at the following locations and available."
//                         }
//                         ctabtn1={
//                             {
//                                 btnText : "try it yourself",
//                                 linkto : "/signup",
//                                 active : true
//                             }
//                         }
//                         ctabtn2={
//                             {
//                                 btnText : "learn more",
//                                 linkto : "/login",
//                                 active : false
//                             }
//                         }
//                         codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n<body>\n<h1>Hello, World!</h1>\n<p>Welcome</p>\n<button onclick="alert('Thanks for visiting!')">Click Me</button>\n</body>\n</html>`}
//                         codeColor={" text-pink-100"}

//                     />
//                 </div>

//                 {/* code section 2  */}
                
//                 <div>
//                     <CodeBlocks
//                         position= { " lg:flex-row-reverse"}
//                         heading = {
//                             <div className='text-4xl font-semibold'>
//                                 Start
//                                 <HighlightText text={"coding in seconds"} />
                                
//                             </div>
//                         }
//                         subheading = {
//                             " Our Online Courses are avail and available at the following locations and available at the following locations and available."
//                         }
//                         ctabtn1={
//                             {
//                                 btnText : "try it yourself",
//                                 linkto : "/signup",
//                                 active : true
//                             }
//                         }
//                         ctabtn2={
//                             {
//                                 btnText : "learn more",
//                                 linkto : "/login",
//                                 active : false
//                             }
//                         }
//                         codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n<body>\n<h1>Hello, World!</h1>\n<p>Welcome</p>\n<button onclick="alert('Thanks for visiting!')">Click Me</button>\n</body>\n</html>`}
//                         codeColor={"text-blue-100"}

//                     />
//                 </div>

//                 <ExploreMore/>
                
//             </div>


//             {/* section 2 */}
//             <div className=' bg-pure-greys-25 text-richblack-700 '>
//                 <div className=' homepage_bg h-[300px]'>

//                     <div className=' w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
//                         <div className=' h-[150px] '></div>
//                         <div className=' flex flex-row gap-7 text-white'>
//                                 <CTAButton active={true} linkto={"/signup"} >
//                                     <div className=" flex flex-row gap-3 items-center">
//                                         Explore full catalog
//                                         <FaArrowRight />
//                                     </div>
//                                 </CTAButton>
//                                 <CTAButton active={false} linkto={"/login"} >
//                                     Learn More
//                                 </CTAButton>
//                         </div>

//                     </div>

//                 </div>

//                 <div className=' mx-auto w-[1000px] max-w-maxContent flex flex-col items-center justify-between gap-7 '>

//                     <div className=' flex flex-row gap-5 mb-10 mt-[90px]  '>
//                         <div className=' text-4xl font-semibold w-[45%] '>
//                             Get the skills you need for a 
//                             <HighlightText text={"job that is in demand."} />
//                         </div>

//                         <div className=' flex flex-col gap-10 w-[40%] items-start '>
//                         <div className='text-[16px] '>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, molestiae tempore. 
//                             At eius voluptate aperiam rem, tempora, ex facilis architecto velit cupiditate.
//                         </div>

//                         <CTAButton active={true} linkto={"/signup"}>
//                             Lear More
//                         </CTAButton>
//                         </div>
//                     </div>

//                     <TimelineSection/>

//                     <LearningLanguageSection/>

//                 </div>

//             </div>

//             {/* section 3 */}
//             <div className=' w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white '>
//                 <div >
//                     <InstructorSection/>

//                     <h2 className='text-center text-4xl font-semibold mt-10'>Review from other learners.</h2>

//                     {/* review slider */}

//                 </div>
//             </div>


//             {/* section 4 - Footer */}
//             <Footer/>
//         </div>
//     );
// };

// export default Home;
