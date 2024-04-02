import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";

export default function DesktopblogPage() {
  return (
    <>
      <Helmet>
        <title>myproject</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div>
          <div>
            <div className="flex justify-center p-[33px] sm:p-5 bg-white-A700">
              <Img src="images/img_1592026327216.svg" alt="image" className="h-[62px]" />
            </div>
            <div className="border-black-900_14 border-b border-solid bg-white-A700">
              <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1178px]">
                <div className="flex md:flex-col justify-between items-start w-[77%] md:w-full gap-5">
                  <div className="flex items-end mt-[5px] pt-2 gap-4 px-2">
                    <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[16px] w-[16px] mt-2" />
                    <Img src="images/img_info.svg" alt="info_one" className="h-[16px] w-[16px]" />
                    <Img src="images/img_link.svg" alt="link_one" className="h-[16px] w-[16px]" />
                    <Img src="images/img_trash.svg" alt="trash_one" className="h-[16px] w-[16px]" />
                  </div>
                  <ul className="flex sm:flex-col justify-center items-start w-[68%] md:w-full gap-[47px]">
                    <li>
                      <a href="#">
                        <div className="flex flex-col w-[9%] sm:w-full mt-[17px] gap-[15px]">
                          <Text size="md" as="p" className="!text-red-A400 !font-medium">
                            Home
                          </Text>
                          <div className="h-[2px] w-[47px] bg-red-A400" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="Fashion" target="_blank" rel="noreferrer" className="mt-4">
                        <Text size="md" as="p" className="!text-gray-800 !font-medium">
                          Fashion
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Technology" target="_blank" rel="noreferrer">
                        <Text size="md" as="p" className="!text-gray-800 !font-medium">
                          Technology
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-800 !font-medium">
                          Life Style
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Environment" target="_blank" rel="noreferrer" className="mt-4">
                        <Text size="md" as="p" className="!text-gray-800 !font-medium">
                          Environment
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <Img src="images/img_search.svg" alt="search_one" className="h-[17px] w-[17px] md:w-full mt-[19px]" />
              </div>
            </div>
          </div>
          <div className="px-14 py-[107px] md:p-5">
            <div className="flex flex-col w-full mb-[3px] pb-[31px] gap-[55px] mx-auto sm:gap-[27px] sm:pb-5 max-w-[1185px]">
              <div className="flex md:flex-col gap-[15px]">
                <div className="md:self-stretch h-[585px] md:w-full md:h-auto bg-gradient flex-1 relative rounded md:flex-none">
                  <Img
                    src="images/img_pexels_tim_douglas_65_jpg.png"
                    alt="pexelstim_one"
                    className="h-[585px] w-full object-cover"
                  />
                  <div className="flex flex-col items-start justify-center w-full bottom-[0.55px] right-0 left-0 p-6 m-auto sm:p-5 absolute">
                    <div className="flex mt-1 bg-red-A400 rounded-sm">
                      <Text as="p" className="tracking-[1.00px]">
                        Fashion
                      </Text>
                    </div>
                    <Text size="2xl" as="p" className="mt-[22px] !font-robotoslab">
                      The Hidden Mystery Behind Fashion
                    </Text>
                    <div className="flex self-stretch mt-1.5 gap-[13px]">
                      <div className="flex items-start gap-2.5">
                        <Img src="images/img_lock.svg" alt="lock_one" className="h-[12px]" />
                        <Text as="p">Rishi</Text>
                      </div>
                      <div className="flex items-start flex-1">
                        <div className="h-[2px] w-[2px] mb-[7px] bg-white-A700 rounded-[1px]" />
                        <Img
                          src="images/img_calendar.svg"
                          alt="calendar_one"
                          className="h-[12px] w-[11px] mt-0.5 ml-3.5"
                        />
                        <Text as="p" className="ml-[5px]">
                          Feb 4, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[39%] md:w-full gap-[15px]">
                  <div className="h-[285px] md:w-full md:h-auto bg-gradient flex-1 relative rounded md:flex-none">
                    <Img
                      src="images/img_pexels_christin.png"
                      alt="technology_one"
                      className="h-[285px] w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-center w-full bottom-[0.81px] right-0 left-0 p-6 m-auto sm:p-5 absolute">
                      <Text
                        as="p"
                        className="flex justify-center items-center h-[19px] mt-[5px] px-1 py-px tracking-[1.00px] bg-red-A400 rounded-sm"
                      >
                        Technology
                      </Text>
                      <Text size="xl" as="p" className="w-[98%] md:w-full mt-[19px] !font-robotoslab leading-[31px]">
                        Prioritizing Your Trend To Get Your Business
                      </Text>
                      <div className="flex self-stretch mt-2.5 gap-[13px]">
                        <div className="flex items-start gap-2.5">
                          <Img src="images/img_lock.svg" alt="rishi_one" className="h-[12px]" />
                          <Text as="p">Rishi</Text>
                        </div>
                        <div className="flex items-start flex-1">
                          <div className="h-[2px] w-[2px] mb-[7px] bg-white-A700 rounded-[1px]" />
                          <Img
                            src="images/img_calendar.svg"
                            alt="feb_62022_one"
                            className="h-[12px] w-[11px] mt-0.5 ml-3.5"
                          />
                          <Text as="p" className="ml-[5px]">
                            Feb 6, 2022
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[285px] md:w-full md:h-auto bg-gradient flex-1 relative rounded md:flex-none">
                    <Img
                      src="images/img_pexels_antoni_s.png"
                      alt="pexelsantonis"
                      className="h-[285px] w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-center w-full bottom-[0.91px] right-0 left-0 p-6 m-auto sm:p-5 absolute">
                      <div className="flex mt-1 bg-red-A400 rounded-sm">
                        <Text as="p" className="tracking-[1.00px]">
                          Fashion
                        </Text>
                      </div>
                      <Text size="xl" as="p" className="mt-[21px] !font-robotoslab">
                        Everything I Learned About Beauty
                      </Text>
                      <div className="flex self-stretch mt-2 gap-[13px]">
                        <div className="flex items-start gap-2.5">
                          <Img src="images/img_lock.svg" alt="lock_one" className="h-[12px]" />
                          <Text as="p">Rishi</Text>
                        </div>
                        <div className="flex items-start flex-1">
                          <div className="h-[2px] w-[2px] mb-[7px] bg-white-A700 rounded-[1px]" />
                          <Img
                            src="images/img_calendar.svg"
                            alt="calendar_one"
                            className="h-[12px] w-[11px] mt-0.5 ml-3.5"
                          />
                          <Text as="p" className="ml-[5px]">
                            Feb 4, 2022
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col items-start gap-[21px]">
                <div className="flex flex-col md:self-stretch pb-2.5 gap-5 flex-1">
                  <div className="flex justify-between items-start gap-5">
                    <Heading size="md" as="h1" className="mt-[5px] !text-gray-900_03">
                      Hot Topics
                    </Heading>
                    <div className="flex justify-center w-[12%] gap-[5px]">
                      <div className="flex flex-col items-start justify-center w-full p-[7px] opacity-0.4 bg-gray-900_7e rounded-sm">
                        <Text size="lg" as="p" className="h-px ml-1.5 md:ml-0">
                          Previous
                        </Text>
                        <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="self-center h-[14px]" />
                      </div>
                      <div className="flex flex-col items-start justify-center w-full p-[7px] bg-gray-900_03 rounded-sm">
                        <Text size="lg" as="p" className="h-px ml-1.5 md:ml-0">
                          Next
                        </Text>
                        <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="self-center h-[14px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col items-start pl-[15px] gap-[15px]">
                    <div className="w-full rounded">
                      <div className="h-[450px] md:h-auto relative rounded">
                        <Img
                          src="images/img_alexander_mils.png"
                          alt="alexandermils"
                          className="h-[450px] w-full object-cover rounded"
                        />
                        <div className="w-full h-max pt-[251px] left-0 bottom-0 right-0 top-0 m-auto md:pt-5 bg-gradient2 absolute rounded">
                          <div className="flex flex-col items-center justify-center gap-[5px] p-[25px] sm:p-5">
                            <Text
                              size="xl"
                              as="p"
                              className="w-[96%] md:w-full mt-1 !font-robotoslab capitalize leading-[31px]"
                            >
                              Why should you be eating Organic ?
                            </Text>
                            <div className="flex self-stretch gap-2 py-[5px]">
                              <div className="flex items-start gap-2.5 py-px">
                                <Img src="images/img_lock_gray_500.svg" alt="lock_three" className="h-[12px]" />
                                <Text as="p" className="!text-gray-500 !font-medium">
                                  Rishi
                                </Text>
                              </div>
                              <div className="flex items-center flex-1">
                                <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                                <Img
                                  src="images/img_calendar_gray_500.svg"
                                  alt="calendar_three"
                                  className="h-[12px] w-[11px] ml-[9px]"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-500">
                                  Feb 7, 2022
                                </Text>
                              </div>
                              <div className="flex justify-center items-start flex-1">
                                <div className="h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                                <Img
                                  src="images/img_bookmark.svg"
                                  alt="bookmark_one"
                                  className="h-[12px] w-[12px] ml-[9px]"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-500">
                                  8 min read
                                </Text>
                              </div>
                            </div>
                            <Text size="s" as="p" className="w-[95%] md:w-full leading-5">
                              Most of us have, at some point, considered what we would do if we could…
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-[29px] px-3.5">
                      <div className="flex flex-col justify-center gap-[5px] flex-1">
                        <Text
                          size="lg"
                          as="p"
                          className="mt-[3px] !text-gray-900_01 !font-robotoslab capitalize leading-[23px]"
                        >
                          Which camera is better: the Pixel 6 vs S21 Ultra?
                        </Text>
                        <div className="flex gap-2 py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock_gray_500.svg" alt="rishi_one" className="h-[12px]" />
                            <Text as="p" className="!text-gray-500 !font-medium">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                            <Img
                              src="images/img_calendar_gray_500.svg"
                              alt="feb_72022_one"
                              className="h-[12px] w-[11px] ml-[9px]"
                            />
                            <Text as="p" className="ml-[5px] !text-gray-500">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start pt-1.5 gap-[3px] flex-1">
                        <Text size="lg" as="p" className="!text-gray-900_01 !font-robotoslab capitalize">
                          Truth About Beauty In 3 Little Words
                        </Text>
                        <div className="flex self-stretch gap-2 py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock_gray_500.svg" alt="lock_one" className="h-[12px]" />
                            <Text as="p" className="!text-gray-500 !font-medium">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                            <Img
                              src="images/img_calendar_gray_500.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] ml-[9px]"
                            />
                            <Text as="p" className="ml-[5px] !text-gray-500">
                              Feb 8, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] flex-1">
                        <Text size="lg" as="p" className="!text-gray-900_01 !font-robotoslab capitalize leading-[23px]">
                          This is the sixth warmest year on record for the planet.
                        </Text>
                        <div className="flex gap-2 py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock_gray_500.svg" alt="lock_one" className="h-[12px]" />
                            <Text as="p" className="!text-gray-500 !font-medium">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                            <Img
                              src="images/img_calendar_gray_500.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] ml-[9px]"
                            />
                            <Text as="p" className="ml-[5px] !text-gray-500">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center gap-[5px] flex-1">
                        <Text
                          size="lg"
                          as="p"
                          className="w-[91%] md:w-full mt-[3px] !text-gray-900_01 !font-robotoslab capitalize leading-[23px]"
                        >
                          The source of Horizon bottled water is the subject of a fierce feud.
                        </Text>
                        <div className="flex gap-2 py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock_gray_500.svg" alt="lock_one" className="h-[12px]" />
                            <Text as="p" className="!text-gray-500 !font-medium">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                            <Img
                              src="images/img_calendar_gray_500.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] ml-[9px]"
                            />
                            <Text as="p" className="ml-[5px] !text-gray-500">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[32%] md:w-full gap-[30px]">
                  <div className="flex sm:flex-col items-center gap-[11px]">
                    <Heading size="md" as="h2" className="!text-gray-900">
                      Fashion
                    </Heading>
                    <div className="self-end sm:self-stretch h-[2px] mb-3.5 bg-gray-300 flex-1" />
                  </div>
                  <div className="flex flex-col gap-10">
                    <div className="h-[250px] md:w-full md:h-auto flex-1 relative rounded md:flex-none">
                      <Img
                        src="images/img_pexels_anna_shv.png"
                        alt="image"
                        className="h-[250px] w-full object-cover rounded"
                      />
                      <div className="w-full h-max pt-4 pr-4 left-0 bottom-0 right-0 top-0 m-auto bg-gradient1 absolute rounded">
                        <div className="flex flex-col items-center mt-[114px] gap-[3px] p-6 sm:p-5">
                          <Text size="lg" as="p" className="!font-robotoslab capitalize">
                            Truth About Beauty In 3 Little Words
                          </Text>
                          <div className="flex self-stretch justify-center mb-2.5 pr-[5px] gap-[13px] py-[5px]">
                            <div className="flex items-start gap-2.5 py-px">
                              <Img src="images/img_lock.svg" alt="rishi_one" className="h-[12px]" />
                              <Text as="p" className="!font-medium">
                                Rishi
                              </Text>
                            </div>
                            <div className="flex justify-center items-center flex-1">
                              <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                              <Img
                                src="images/img_calendar.svg"
                                alt="feb_82022_one"
                                className="h-[12px] w-[11px] ml-3.5"
                              />
                              <Text as="p" className="ml-[5px]">
                                Feb 8, 2022
                              </Text>
                            </div>
                            <div className="flex justify-center items-start flex-1">
                              <div className="h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                              <Img
                                src="images/img_bookmark_white_a700.svg"
                                alt="8_min_read_one"
                                className="h-[12px] w-[12px] ml-3.5"
                              />
                              <Text as="p" className="ml-[5px]">
                                8 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center gap-6 flex-1">
                      <div className="w-[28%] sm:w-full rounded">
                        <Img
                          src="images/img_sigmund_4ugmm3w.png"
                          alt="sigmund4ugmm3w"
                          className="h-[100px] w-full md:h-auto object-cover rounded"
                        />
                      </div>
                      <div className="flex flex-col sm:self-stretch pb-2.5 gap-[5px] flex-1">
                        <Text
                          size="md"
                          as="p"
                          className="w-[87%] md:w-full !text-gray-900_02 !font-robotoslab capitalize leading-7"
                        >
                          Facts Everyone Should Know About Design
                        </Text>
                        <div className="flex gap-[13px] py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock_gray_500.svg" alt="lock_one" className="h-[12px]" />
                            <Text as="p" className="!text-gray-500 !font-medium">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                            <Img
                              src="images/img_calendar_gray_500.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] ml-3.5"
                            />
                            <Text as="p" className="ml-[5px] !text-gray-500">
                              Feb 4, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center gap-5">
                    <Heading size="md" as="h3" className="self-end mb-[5px] !text-gray-900_02">
                      Hot Topics
                    </Heading>
                    <div className="flex justify-center w-[8%] py-2">
                      <div className="flex w-full gap-[5px]">
                        <div className="flex flex-col items-start justify-center w-full p-2 opacity-0.4 border-gray-400_7e border border-solid bg-white-A700_7e rounded-sm">
                          <Text size="lg" as="p" className="h-px ml-1.5 md:ml-0 !text-gray-900_04">
                            Previous
                          </Text>
                          <Img
                            src="images/img_arrow_left_gray_900_04.svg"
                            alt="arrowleft_three"
                            className="self-center h-[14px]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full p-2 border-gray-400 border border-solid bg-white-A700 rounded-sm">
                          <Text size="lg" as="p" className="h-px ml-1.5 md:ml-0 !text-gray-900_04">
                            Next
                          </Text>
                          <Img
                            src="images/img_arrow_right_gray_900_04.svg"
                            alt="arrowright"
                            className="self-center h-[14px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-[30px]">
                    <div className="h-[270px] w-[270px] md:h-auto relative rounded">
                      <Img
                        src="images/img_jason_zhao_eeu3.png"
                        alt="environment_one"
                        className="h-[270px] w-full object-cover rounded"
                      />
                      <div className="flex flex-col items-start justify-center w-full gap-[17px] bottom-[0.81px] right-0 left-0 p-4 m-auto absolute">
                        <div className="flex mt-1 bg-red-A400 rounded-sm">
                          <Text as="p" className="!font-medium">
                            Environment
                          </Text>
                        </div>
                        <Text size="lg" as="p" className="!font-robotoslab leading-[23px]">
                          Elephants in a Sri Lankan dump are dying from eating plastic rubbish.
                        </Text>
                        <div className="flex self-stretch gap-[13px] py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock.svg" alt="rishi_one" className="h-[12px]" />
                            <Text as="p" className="!text-white-A700_e5">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-white-A700_e5 rounded-[1px]" />
                            <Img
                              src="images/img_calendar.svg"
                              alt="feb_82022_one"
                              className="h-[12px] w-[11px] ml-3.5"
                            />
                            <Text as="p" className="ml-[5px] !text-white-A700_e5">
                              Feb 8, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[270px] w-[270px] md:h-auto relative rounded">
                      <Img
                        src="images/img_pexels_artem_po.png"
                        alt="pexelsartempo"
                        className="h-[270px] w-full object-cover rounded"
                      />
                      <div className="flex flex-col items-start justify-center w-full gap-[17px] bottom-[0.81px] right-0 left-0 p-4 m-auto absolute">
                        <div className="flex mt-1 bg-red-A400 rounded-sm">
                          <Text as="p" className="!font-medium">
                            Environment
                          </Text>
                        </div>
                        <Text size="lg" as="p" className="w-[94%] md:w-full !font-robotoslab leading-[23px]">
                          Rucor is supposedly going to stop creating… well, everything.
                        </Text>
                        <div className="flex self-stretch gap-[13px] py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock.svg" alt="lock_one" className="h-[12px]" />
                            <Text as="p" className="!text-white-A700_e5">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-white-A700_e5 rounded-[1px]" />
                            <Img
                              src="images/img_calendar.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] ml-3.5"
                            />
                            <Text as="p" className="ml-[5px] !text-white-A700_e5">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[270px] w-[270px] md:h-auto relative rounded">
                      <Img
                        src="images/img_pexels_simon_be.png"
                        alt="pexelssimonbe"
                        className="h-[270px] w-full object-cover rounded"
                      />
                      <div className="flex flex-col items-start justify-center w-full gap-[17px] bottom-[0.81px] right-0 left-0 p-4 m-auto absolute">
                        <div className="flex mt-1 bg-red-A400 rounded-sm">
                          <Text as="p" className="!font-medium">
                            Environment
                          </Text>
                        </div>
                        <Text size="lg" as="p" className="w-[91%] md:w-full !font-robotoslab leading-[23px]">
                          This is the sixth warmest year on record for the planet.
                        </Text>
                        <div className="flex self-stretch gap-[13px] py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock.svg" alt="lock_one" className="h-[12px]" />
                            <Text as="p" className="!text-white-A700_e5">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-white-A700_e5 rounded-[1px]" />
                            <Img
                              src="images/img_calendar.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] ml-3.5"
                            />
                            <Text as="p" className="ml-[5px] !text-white-A700_e5">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[270px] w-[270px] md:h-auto relative rounded">
                      <Img
                        src="images/img_lukas_lehotsky.png"
                        alt="lukaslehotsky"
                        className="h-[270px] w-full object-cover rounded"
                      />
                      <div className="flex flex-col items-start justify-center w-full gap-[17px] bottom-[0.81px] right-0 left-0 p-4 m-auto absolute">
                        <div className="flex mt-1 bg-red-A400 rounded-sm">
                          <Text as="p" className="!font-medium">
                            Environment
                          </Text>
                        </div>
                        <Text size="lg" as="p" className="w-[93%] md:w-full !font-robotoslab leading-[23px]">
                          Many nation are pursuing nuclear power as a means of reducing emissions.
                        </Text>
                        <div className="flex self-stretch gap-[13px] py-[5px]">
                          <div className="flex items-start gap-2.5 py-px">
                            <Img src="images/img_lock.svg" alt="lock_one" className="h-[12px]" />
                            <Text as="p" className="!text-white-A700_e5">
                              Rishi
                            </Text>
                          </div>
                          <div className="flex items-center flex-1">
                            <div className="self-end h-[2px] w-[2px] mb-[7px] bg-white-A700_e5 rounded-[1px]" />
                            <Img
                              src="images/img_calendar.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] ml-3.5"
                            />
                            <Text as="p" className="ml-[5px] !text-white-A700_e5">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col mt-[50px] pb-[50px] gap-9 md:pb-5">
                  <div className="flex flex-col w-full gap-[30px]">
                    <div className="flex items-center gap-[11px]">
                      <Heading size="md" as="h4">
                        Fashion
                      </Heading>
                      <div className="self-end h-[2px] mb-3.5 bg-gray-300 flex-1" />
                    </div>
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex items-center gap-6">
                        <div className="w-[29%] rounded-sm">
                          <Img
                            src="images/img_pexels_anna_shv_100x100.png"
                            alt="fashion_two"
                            className="h-[100px] w-full md:h-auto object-cover rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h5" className="w-[93%] md:w-full capitalize leading-6">
                            Truth About Beauty In 3 Little Words
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="feb_82022_one"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 8, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-[29%] rounded-sm">
                          <Img
                            src="images/img_pexels_tim_doug.png"
                            alt="image"
                            className="h-[100px] w-full md:h-auto object-cover rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[89%] md:w-full capitalize leading-6">
                            The Hidden Mystery Behind Fashion
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="feb_42022_one"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 4, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-[29%] rounded-sm">
                          <Img
                            src="images/img_freestocks_vfs2.png"
                            alt="image_one"
                            className="h-[100px] w-full md:h-auto object-cover rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[89%] md:w-full capitalize leading-6">
                            How To Become Better With Magazine In 10 Minutes
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="feb_42022_three"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 4, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-[29%] rounded-sm">
                          <Img
                            src="images/img_sigmund_4ugmm3w_100x100.png"
                            alt="image_two"
                            className="h-[100px] w-full md:h-auto object-cover rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[93%] md:w-full capitalize leading-6">
                            Facts Everyone Should Know About Design
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="feb_42022_five"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 4, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-5">
                    <div className="flex items-center gap-[11px]">
                      <Heading size="md" as="h4">
                        Lifestyle
                      </Heading>
                      <div className="h-[2px] bg-gray-300 flex-1" />
                    </div>
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex items-center gap-6">
                        <Img
                          src="images/img_alexander_mils_100x100.png"
                          alt="alexandermils"
                          className="w-[100px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[85%] md:w-full capitalize leading-6">
                            Why should you be eating Organic ?
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Img
                          src="images/img_steven_lewis_r4.png"
                          alt="stevenlewisrfou"
                          className="w-[100px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-2">
                          <Heading as="h6" className="capitalize">
                            Solo Travel Around the World
                          </Heading>
                          <div className="flex items-center gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="calendar_three"
                              className="h-[12px] w-[11px]"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Img
                          src="images/img_raamin_ka_sdfle.png"
                          alt="raaminkasdfle"
                          className="w-[100px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[86%] md:w-full capitalize leading-6">
                            How to Acquire a Job as a Costume Designer in Hollywood.
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="calendar_five"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 8, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Img
                          src="images/img_pexels_leah_kel.png"
                          alt="pexelsleahkel"
                          className="w-[100px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[95%] md:w-full capitalize leading-6">
                            Best Way to have Fun During Roadtrip
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="calendar_seven"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-5">
                    <div className="flex items-center gap-[11px]">
                      <Heading size="md" as="h4">
                        Tech
                      </Heading>
                      <div className="self-end h-[2px] mb-3.5 bg-gray-300 flex-1" />
                    </div>
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex items-center gap-6">
                        <Img
                          src="images/img_tech_daily_cxkl.png"
                          alt="techdailycxkl"
                          className="w-[100px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[90%] md:w-full capitalize leading-6">
                            Which camera is better: the Pixel 6 vs S21 Ultra?
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="calendar_one"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Img
                          src="images/img_pexels_christin_100x100.png"
                          alt="pexelschristin"
                          className="w-[100px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[95%] md:w-full capitalize leading-6">
                            Prioritizing Your Trend To Get Your Business
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="calendar_three"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 6, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Img
                          src="images/img_nordwood_themes.png"
                          alt="nordwoodthemes"
                          className="w-[100px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[93%] md:w-full capitalize leading-6">
                            Intelligent Strategies For The Entrepreneurially Challenged
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="calendar_five"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Img
                          src="images/img_slejven_djurako.png"
                          alt="slejvendjurako"
                          className="w-[100px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Heading as="h6" className="w-[94%] md:w-full capitalize leading-6">
                            Intel looks to Ohio for a pair of chip factories
                          </Heading>
                          <div className="flex items-start gap-[5px]">
                            <Img
                              src="images/img_calendar_gray_700.svg"
                              alt="calendar_seven"
                              className="h-[12px] w-[11px] mt-0.5"
                            />
                            <Text as="p" className="!text-gray-700 capitalize">
                              Feb 7, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[178px] md:h-auto mt-[31px] p-[18px] bg-[url(/public/images/img_div.png)] bg-cover bg-no-repeat">
                  <div className="flex sm:flex-col items-center mb-[31px] gap-9">
                    <div className="flex flex-col items-start gap-4">
                      <Heading size="md" as="h4" className="mt-[31px] !font-semibold">
                        Checkout my recommended gadgets
                      </Heading>
                      <Text size="lg" as="p" className="!text-gray-800">
                        Subscribe and get 15% OFF.
                      </Text>
                    </div>
                    <Button shape="round" className="self-end mb-[19px] sm:px-5 min-w-[133px]">
                      learn More
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex flex-col items-center w-[62%] md:w-full gap-[70px] md:gap-[52px] sm:gap-[35px]">
                    <div className="flex flex-col self-stretch gap-5">
                      <div>
                        <div className="flex md:flex-col items-center gap-[11px]">
                          <Heading size="md" as="h4">
                            Don’t Miss
                          </Heading>
                          <div className="self-end md:self-stretch h-[2px] mb-[13px] bg-gray-300 flex-1" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px]">
                        <div className="flex md:flex-col items-center gap-[30px] flex-1">
                          <Img
                            src="images/img_pexels_anna_shv_250x250.png"
                            alt="rishi_one"
                            className="w-[250px] md:w-full object-cover"
                          />
                          <div className="flex flex-col items-start md:self-stretch pt-1.5 flex-1">
                            <Text size="xl" as="p" className="!text-gray-900_01 !font-robotoslab">
                              Truth About Beauty In 3 Little Words
                            </Text>
                            <div className="flex self-stretch mt-2 gap-2">
                              <div className="flex self-start items-start pr-px gap-2.5">
                                <Img src="images/img_lock_gray_700.svg" alt="rishi_three" className="h-[12px]" />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Rishi
                                </Text>
                              </div>
                              <div className="flex items-start w-[22%]">
                                <div className="h-[2px] w-[2px] mb-[7px] bg-gray-700 rounded-[1px]" />
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="feb_82022_one"
                                  className="h-[12px] w-[11px] mt-0.5 ml-[9px]"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-700 capitalize">
                                  Feb 8, 2022
                                </Text>
                              </div>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="w-[93%] md:w-full mt-[22px] !text-gray-800 leading-[30px]"
                            >
                              Most of us have, at some point, considered what we would do if we could travel back in
                              time. Maybe…
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col items-center gap-[30px] flex-1">
                          <Img
                            src="images/img_christian_wiedi.png"
                            alt="christianwiedi"
                            className="w-[250px] md:w-full object-cover"
                          />
                          <div className="flex flex-col md:self-stretch flex-1">
                            <Text
                              size="xl"
                              as="p"
                              className="w-[96%] md:w-full !text-gray-900_01 !font-robotoslab leading-10"
                            >
                              Associated with online buying, which is an issue.
                            </Text>
                            <div className="flex mt-1.5 gap-2">
                              <div className="flex self-start items-start pr-px gap-2.5">
                                <Img src="images/img_lock_gray_700.svg" alt="lock_one" className="h-[12px]" />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Rishi
                                </Text>
                              </div>
                              <div className="flex items-start w-[22%]">
                                <div className="h-[2px] w-[2px] mb-[7px] bg-gray-700 rounded-[1px]" />
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] mt-0.5 ml-[9px]"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-700 capitalize">
                                  Feb 8, 2022
                                </Text>
                              </div>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="w-[93%] md:w-full mt-[22px] !text-gray-800 leading-[30px]"
                            >
                              Most of us have, at some point, considered what we would do if we could travel back in
                              time. Maybe…
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col items-center gap-[30px] flex-1">
                          <Img
                            src="images/img_raamin_ka_sdfle_250x250.png"
                            alt="raaminkasdfle"
                            className="w-[250px] md:w-full object-cover"
                          />
                          <div className="flex flex-col md:self-stretch flex-1">
                            <Text
                              size="xl"
                              as="p"
                              className="w-[89%] md:w-full !text-gray-900_01 !font-robotoslab leading-10"
                            >
                              How to Acquire a Job as a Costume Designer in Hollywood.
                            </Text>
                            <div className="flex mt-1.5 gap-2">
                              <div className="flex self-start items-start pr-px gap-2.5">
                                <Img src="images/img_lock_gray_700.svg" alt="lock_one" className="h-[12px]" />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Rishi
                                </Text>
                              </div>
                              <div className="flex items-start w-[22%]">
                                <div className="h-[2px] w-[2px] mb-[7px] bg-gray-700 rounded-[1px]" />
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] mt-0.5 ml-[9px]"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-700 capitalize">
                                  Feb 8, 2022
                                </Text>
                              </div>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="w-[93%] md:w-full mt-[22px] !text-gray-800 leading-[30px]"
                            >
                              Most of us have, at some point, considered what we would do if we could travel back in
                              time. Maybe…
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col items-center gap-[30px] flex-1">
                          <Img
                            src="images/img_jason_zhao_eeu3_250x250.png"
                            alt="jasonzhaoeeuthr"
                            className="w-[250px] md:w-full object-cover"
                          />
                          <div className="flex flex-col md:self-stretch flex-1">
                            <Text
                              size="xl"
                              as="p"
                              className="w-[91%] md:w-full !text-gray-900_01 !font-robotoslab leading-10"
                            >
                              Elephants in a Sri Lankan dump are dying from eating plastic rubbish.
                            </Text>
                            <div className="flex mt-1.5 gap-2">
                              <div className="flex self-start items-start pr-px gap-2.5">
                                <Img src="images/img_lock_gray_700.svg" alt="lock_one" className="h-[12px]" />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Rishi
                                </Text>
                              </div>
                              <div className="flex items-start w-[22%]">
                                <div className="h-[2px] w-[2px] mb-[7px] bg-gray-700 rounded-[1px]" />
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] mt-0.5 ml-[9px]"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-700 capitalize">
                                  Feb 8, 2022
                                </Text>
                              </div>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="w-[93%] md:w-full mt-[22px] !text-gray-800 leading-[30px]"
                            >
                              Most of us have, at some point, considered what we would do if we could travel back in
                              time. Maybe…
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col items-center gap-[30px] flex-1">
                          <Img
                            src="images/img_pexels_artem_po_250x250.png"
                            alt="pexelsartempo"
                            className="w-[250px] md:w-full object-cover"
                          />
                          <div className="flex flex-col md:self-stretch flex-1">
                            <Text
                              size="xl"
                              as="p"
                              className="w-[85%] md:w-full !text-gray-900_01 !font-robotoslab leading-10"
                            >
                              Rucor is supposedly going to stop creating… well, everything.
                            </Text>
                            <div className="flex mt-1.5 gap-2">
                              <div className="flex self-start items-start pr-px gap-2.5">
                                <Img src="images/img_lock_gray_700.svg" alt="lock_one" className="h-[12px]" />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Rishi
                                </Text>
                              </div>
                              <div className="flex items-start w-[21%]">
                                <div className="h-[2px] w-[2px] mb-[7px] bg-gray-700 rounded-[1px]" />
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] mt-0.5 ml-[9px]"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-700 capitalize">
                                  Feb 7, 2022
                                </Text>
                              </div>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="w-[93%] md:w-full mt-[22px] !text-gray-800 leading-[30px]"
                            >
                              Most of us have, at some point, considered what we would do if we could travel back in
                              time. Maybe…
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" shape="round" className="sm:px-5 font-medium min-w-[218px]">
                      Load More
                    </Button>
                  </div>
                  <div className="flex flex-col w-[32%] md:w-full gap-[50px] py-[31px] sm:py-5">
                    <div className="flex flex-col mt-[18px] gap-[30px]">
                      <div className="flex sm:flex-col items-center gap-[11px]">
                        <Heading size="md" as="h4" className="!text-gray-900">
                          Tech
                        </Heading>
                        <div className="self-end sm:self-stretch h-[2px] mb-3.5 bg-gray-300 flex-1" />
                      </div>
                      <div className="flex flex-col gap-10">
                        <div className="h-[250px] md:w-full md:h-auto flex-1 relative rounded md:flex-none">
                          <Img
                            src="images/img_tech_daily_cxkl_250x378.png"
                            alt="image"
                            className="h-[250px] w-full object-cover rounded"
                          />
                          <div className="w-full h-max pt-[107px] left-0 bottom-0 right-0 top-0 m-auto md:pt-5 bg-gradient1 absolute rounded">
                            <div className="flex flex-col gap-[5px] p-6 sm:p-5">
                              <Text
                                size="lg"
                                as="p"
                                className="w-[92%] md:w-full !font-robotoslab capitalize leading-[23px]"
                              >
                                Which camera is better: the Pixel 6 vs S21 Ultra?
                              </Text>
                              <div className="flex mb-[11px] gap-[13px] py-[5px]">
                                <div className="flex items-start gap-2.5 py-px">
                                  <Img src="images/img_lock.svg" alt="rishi_one" className="h-[12px]" />
                                  <Text as="p" className="!font-medium">
                                    Rishi
                                  </Text>
                                </div>
                                <div className="flex items-center flex-1">
                                  <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                                  <Img
                                    src="images/img_calendar.svg"
                                    alt="feb_72022_one"
                                    className="h-[12px] w-[11px] ml-3.5"
                                  />
                                  <Text as="p" className="ml-[5px]">
                                    Feb 7, 2022
                                  </Text>
                                </div>
                                <div className="flex justify-center items-start flex-1">
                                  <div className="h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                                  <Img
                                    src="images/img_bookmark_white_a700.svg"
                                    alt="8_min_read_one"
                                    className="h-[12px] w-[12px] ml-3.5"
                                  />
                                  <Text as="p" className="ml-[5px]">
                                    8 min read
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col items-center gap-6 flex-1">
                          <div className="w-[28%] sm:w-full rounded">
                            <Img
                              src="images/img_pexels_christin_1.png"
                              alt="pexelschristin"
                              className="h-[100px] w-full md:h-auto object-cover rounded"
                            />
                          </div>
                          <div className="flex flex-col sm:self-stretch pb-2.5 gap-[5px] flex-1">
                            <Text
                              size="md"
                              as="p"
                              className="w-[89%] md:w-full !text-gray-900_02 !font-robotoslab capitalize leading-7"
                            >
                              Prioritizing Your Trend To Get Your Business
                            </Text>
                            <div className="flex gap-[13px] py-[5px]">
                              <div className="flex items-start gap-2.5 py-px">
                                <Img src="images/img_lock_gray_500.svg" alt="lock_one" className="h-[12px]" />
                                <Text as="p" className="!text-gray-500 !font-medium">
                                  Rishi
                                </Text>
                              </div>
                              <div className="flex items-center flex-1">
                                <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                                <Img
                                  src="images/img_calendar_gray_500.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] ml-3.5"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-500">
                                  Feb 6, 2022
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col items-center gap-6 flex-1">
                          <div className="w-[28%] sm:w-full rounded">
                            <Img
                              src="images/img_nordwood_themes_100x100.png"
                              alt="nordwoodthemes"
                              className="h-[100px] w-full md:h-auto object-cover rounded"
                            />
                          </div>
                          <div className="flex flex-col sm:self-stretch pb-2.5 gap-[5px] flex-1">
                            <Text
                              size="md"
                              as="p"
                              className="w-[88%] md:w-full !text-gray-900_02 !font-robotoslab capitalize leading-7"
                            >
                              Intelligent Strategies For The Entrepreneurially Challenged
                            </Text>
                            <div className="flex gap-[13px] py-[5px]">
                              <div className="flex items-start gap-2.5 py-px">
                                <Img src="images/img_lock_gray_500.svg" alt="lock_one" className="h-[12px]" />
                                <Text as="p" className="!text-gray-500 !font-medium">
                                  Rishi
                                </Text>
                              </div>
                              <div className="flex items-center flex-1">
                                <div className="self-end h-[2px] w-[2px] mb-[7px] bg-gray-500 rounded-[1px]" />
                                <Img
                                  src="images/img_calendar_gray_500.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] ml-3.5"
                                />
                                <Text as="p" className="ml-[5px] !text-gray-500">
                                  Feb 7, 2022
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col pb-[50px] gap-[49px] md:pb-5">
                      <div className="flex flex-col gap-[19px]">
                        <div className="flex sm:flex-col items-end gap-[11px]">
                          <Heading size="s" as="h5">
                            Popular Categories
                          </Heading>
                          <div className="h-[2px] w-full mb-3 bg-gray-300" />
                        </div>
                        <div className="flex flex-col gap-5">
                          <div className="flex justify-between items-center gap-5 flex-wrap">
                            <Text size="md" as="p" className="!text-gray-900_01">
                              Environment
                            </Text>
                            <Text size="s" as="p" className="self-start !text-gray-900_01 text-center">
                              5
                            </Text>
                          </div>
                          <div className="flex justify-between items-center gap-5 flex-wrap">
                            <Text size="md" as="p" className="!text-gray-900_01">
                              Fashion
                            </Text>
                            <Text size="s" as="p" className="self-start !text-gray-900_01 text-center">
                              5
                            </Text>
                          </div>
                          <div className="flex justify-between items-center gap-5 flex-wrap">
                            <Text size="md" as="p" className="self-end !text-gray-900_01">
                              Life Style
                            </Text>
                            <Text size="s" as="p" className="self-start !text-gray-900_01 text-center">
                              5
                            </Text>
                          </div>
                          <div className="flex justify-between gap-5 flex-wrap">
                            <Text size="md" as="p" className="self-end !text-gray-900_01">
                              Technology
                            </Text>
                            <Text size="s" as="p" className="self-start !text-gray-900_01 text-center">
                              5
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px]">
                        <div className="flex sm:flex-col items-center gap-[11px]">
                          <Heading size="md" as="h4">
                            Recent
                          </Heading>
                          <div className="sm:self-stretch h-[2px] bg-gray-300 flex-1" />
                        </div>
                        <div className="flex flex-col gap-[30px]">
                          <div className="flex items-center gap-6 flex-1">
                            <div className="w-[28%] rounded-sm">
                              <Img
                                src="images/img_pexels_anna_shv_100x100.png"
                                alt="image"
                                className="h-[100px] w-full md:h-auto object-cover rounded-sm"
                              />
                            </div>
                            <div className="flex flex-col items-start gap-[7px] flex-1">
                              <Heading as="h6" className="w-[89%] md:w-full capitalize leading-6">
                                Truth About Beauty In 3 Little Words
                              </Heading>
                              <div className="flex items-start gap-[5px]">
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="feb_82022_one"
                                  className="h-[12px] w-[11px] mt-0.5"
                                />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Feb 8, 2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 flex-1">
                            <div className="w-[28%] rounded-sm">
                              <Img
                                src="images/img_christian_wiedi_100x100.png"
                                alt="christianwiedi"
                                className="h-[100px] w-full md:h-auto object-cover rounded-sm"
                              />
                            </div>
                            <div className="flex flex-col items-start gap-[7px] flex-1">
                              <Heading as="h6" className="w-[95%] md:w-full capitalize leading-6">
                                Associated with online buying, which is an issue.
                              </Heading>
                              <div className="flex items-start gap-[5px]">
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] mt-0.5"
                                />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Feb 8, 2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center gap-6 flex-1">
                            <div className="w-[28%] sm:w-full rounded-sm">
                              <Img
                                src="images/img_raamin_ka_sdfle_100x100.png"
                                alt="raaminkasdfle"
                                className="h-[100px] w-full md:h-auto object-cover rounded-sm"
                              />
                            </div>
                            <div className="flex flex-col items-start sm:self-stretch gap-[7px] flex-1">
                              <Heading as="h6" className="w-[98%] md:w-full capitalize leading-6">
                                How to Acquire a Job as a Costume Designer in Hollywood.
                              </Heading>
                              <div className="flex items-start gap-[5px]">
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] mt-0.5"
                                />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Feb 8, 2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center gap-6 flex-1">
                            <div className="w-[28%] sm:w-full rounded-sm">
                              <Img
                                src="images/img_jason_zhao_eeu3_100x100.png"
                                alt="jasonzhaoeeuthr"
                                className="h-[100px] w-full md:h-auto object-cover rounded-sm"
                              />
                            </div>
                            <div className="flex flex-col items-start sm:self-stretch gap-[7px] flex-1">
                              <Heading as="h6" className="w-[98%] md:w-full capitalize leading-6">
                                Elephants in a Sri Lankan dump are dying from eating plastic rubbish.
                              </Heading>
                              <div className="flex items-start gap-[5px]">
                                <Img
                                  src="images/img_calendar_gray_700.svg"
                                  alt="calendar_one"
                                  className="h-[12px] w-[11px] mt-0.5"
                                />
                                <Text as="p" className="!text-gray-700 capitalize">
                                  Feb 8, 2022
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700">
            <div className="flex justify-center p-10 sm:p-5 bg-black-900">
              <Img src="images/img_logo_png.png" alt="logopng_one" className="w-[12%] mt-[23px] object-cover" />
            </div>
            <div className="flex flex-col items-center mt-[-3px] relative">
              <div className="flex justify-between items-center w-[30%] md:w-full gap-5 md:p-5 z-[1] flex-wrap">
                <a href="Home" target="_blank" rel="noreferrer">
                  <Text size="md" as="p" className="!text-red-A400 tracking-[0.30px]">
                    Home
                  </Text>
                </a>
                <a href="Fashion" target="_blank" rel="noreferrer">
                  <Text size="md" as="p" className="tracking-[0.30px]">
                    Fashion
                  </Text>
                </a>
                <a href="Technology" target="_blank" rel="noreferrer" className="self-end">
                  <Text size="md" as="p" className="tracking-[0.30px]">
                    Technology
                  </Text>
                </a>
                <a href="#" className="self-end">
                  <Text size="md" as="p" className="tracking-[0.30px]">
                    Life Style
                  </Text>
                </a>
                <a href="Environment" target="_blank" rel="noreferrer">
                  <Text size="md" as="p" className="tracking-[0.30px]">
                    Environment
                  </Text>
                </a>
              </div>
              <div className="self-stretch mt-[-20px] relative bg-black-900">
                <div className="flex self-start justify-center p-[30px] sm:p-5">
                  <div className="flex justify-between items-end w-[10%] md:w-full mt-[22px] pt-4 gap-5 px-4">
                    <Img
                      src="images/img_facebook_white_a700.svg"
                      alt="facebook_three"
                      className="h-[16px] w-[16px] mt-4"
                    />
                    <Img src="images/img_info_white_a700.svg" alt="info_three" className="h-[16px] w-[16px]" />
                    <Img src="images/img_link_white_a700.svg" alt="link_three" className="h-[16px] w-[16px]" />
                    <Img src="images/img_trash_white_a700.svg" alt="trash_three" className="h-[16px] w-[16px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center p-[25px] sm:p-5 border-white-A700_14 border-t border-solid bg-black-900">
              <div className="flex">
                <div className="flex">
                  <Text size="s" as="p" className="self-end !text-white-A700_cc text-center">
                    <span className="text-white-A700_cc">Copyright © 2023 Magazine - Powered by&nbsp;</span>
                    <span className="text-white-A700">Rishi Theme</span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
