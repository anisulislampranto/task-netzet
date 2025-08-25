import Button from "@/components/ui/Button";
import Image from "next/image";

const features = [
  "Start growing your influence right away— no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers"
]

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-scroll md:overflow-hidden">
      <div className="flex flex-col justify-start items-start md:items-center w-full">

        <div className="w-full z-50 flex justify-center items-center min-h-[46px] p-[16px] md:py-[4px] md:px-[4px] bg-[linear-gradient(90deg,#fc004e_0%,_#10cbe0_100%)]">
          <div className="text-center">
            <span className="md:text-[22px] text-[18px] font-urbanist font-extrabold md:leading-[31px] text-[#00e7f9]">
              🚀 FRESH BEGINNINGS SALE
            </span>
            <span className="md:text-[22px] font-urbanist font-semibold md:leading-[31px] text-[#ffffff]">
              :
            </span>
            <span className="md:text-[22px] font-urbanist font-bold md:leading-[31px] text-[#ffffff]">
              {' '}Extra 25% OFF, Limited Spots - start your journey today!
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-[15px] md:mt-[35px] px-4 sm:px-[56px] z-50">
          <div className="flex justify-center items-center w-full md:max-w-[76%] md:justify-center md:items-start relative">
            <div className="flex justify-center items-center md:w-[16%]">
              <Image
                src="/images/img_group.svg"
                alt="Fametonic Logo"
                width={172}
                height={74}
                className="max-w-[120px] max-h-[52px] sm:max-w-[172px] sm:max-h-[74px]"
              />
            </div>
            <div className="absolute md:hidden right-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#fff]"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hidden md:flex justify-end items-center flex-1">
              <span className="text-[18px] font-urbanist font-semibold leading-[22px] text-center text-[#a9a9a9]">
                About us
              </span>
              <span className="text-[18px] font-urbanist font-semibold leading-[22px] text-center text-[#a9a9a9] ml-[44px]">
                Contact
              </span>
            </div>
            <div className="w-6 md:hidden"></div>
          </div>
        </div>

      </div>

      <div className="md:flex-row flex flex-col-reverse justify-center items-center px-[20px] md:px-[30px] mt-[-29px] md:-mr-[30px] md:h-auto h-full">
        <div className="flex flex-col gap-[26px] justify-center items-center  md:ml-[100px] max-w-[516px] z-10 relative md:-mr-[55px] ">
          <div className="flex flex-col gap-[8px] justify-start items-center w-full">
            <div className="flex flex-col justify-start items-center w-full md:px-0 px-2 md:pb-0 pb-4">
              <h1 className="text-[25px] md:text-[35px] font-urbanist font-bold leading-[30px] md:leading-[42px] text-center md:text-left text-[#ffffff] w-full">
                Want to Turn Social Media Into a Profitable Career?{' '}
              </h1>
              <h2 className="text-[25px] md:text-[35px] font-urbanist font-bold leading-[30px] md:leading-[42px] text-center md:text-left text-[#00e7f9] w-full drop-shadow-[0px_4px_4px_#fc004e]">
                Discover your way to success with Fametonic:
              </h2>
            </div>
            <div className="flex flex-col justify-start gap-[6px] items-center w-full">
              {features.map((feature, i) => <div key={i} className="flex items-center w-full">
                <div className="relative flex-shrink-0 w-[22px] h-[22px] min-w-[22px] min-h-[22px]">
                  <Image
                    fill
                    src="/images/spark.png"
                    alt="Fametonic Mobile App Interface"
                    className="object-cover rounded-md"
                    priority
                  />
                </div>
                <span className="text-[16px] font-figtree font-medium md:font-semibold leading-[24px] md:leading-[22px] text-left text-[#ffffff] ml-[10px]">
                  {feature}
                </span>
              </div>)}
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-col md:pb-0 pb-[40px] gap-[26px] w-full'>
            <div className="flex flex-col gap-[10px] justify-start items-start w-full md:max-w-[313px] ">
              <Button
                rightIcon={
                  <Image
                    src={'/images/img_vector.svg'}
                    alt=""
                    width={7}
                    height={15}
                    className="flex-shrink-0"
                  />
                }
                className="flex justify-center items-center bg-[#fc004e] text-[#ffffff] text-[20px] font-urbanist font-bold leading-[24px] shadow-[2px_2px_10px_#00e7f9] rounded-[10px] pt-[8px] pr-[40px] pb-[8px] pl-[34px] gap-[10px] w-full "
              >
                GET STARTED
              </Button>
              <span className="text-[12px] font-urbanist font-normal leading-[15px] text-center text-[#ffffff] w-full  ">
                1-minute quiz for personalized Insights
              </span>
            </div>
            <div className="flex flex-col gap-[10px] items-center justify-start  md:items-start w-full  md:pb-0">
              <p className="text-[12px] font-figtree font-medium leading-[16px] text-center  md:text-left text-[#ababab] max-w-[281px]  md:max-w-full pr-1">
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
              </p>
              <span className="text-[10px] font-figtree font-medium leading-[12px] text-center md:text-left text-[#ababab] w-full md:w-auto">
                Fametonic 2025 ©All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
        <div className="relative top-5 md:top-1 md:h-[679px] md:w-[666px] h-[330px] w-[300px]">
          <Image
            src="/images/mobile_mockup_3.png"
            alt="Fametonic Mobile App Interface"
            fill
            className="object-contain absolute rounded-md md:mt-[3px] "
            priority
          />
        </div>
      </div>
    </div>
  );
}
