/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
import { Popover } from "@headlessui/react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, handleDasScroll, isBlog }) => {
    const router = useRouter();
    return (
        <>
            <Popover className="block tablet:hidden mt-5">
                {({ open }) => (
                    <>
                        <div className="flex bg-black rounded-xl items-center justify-between p-2 laptop:p-0">
                            <h1
                                onClick={() => router.push("/")}
                                className="font-medium cursor-pointer p-2 laptop:p-0"
                            >
                                {data.name}.
                            </h1>
                            <Popover.Button>
                                {/* <img
                                    className="h-5 "
                                    src={`/images/${
                                        !open ? "menu.svg" : "cancel.svg"
                                    }`}
                                ></img> */}
                                {open ? (
                                    <IoMdClose  size={30} color="white" />
                                ) : (
                                    <MdMenu size={30} color="white" />
                                )}
                            </Popover.Button>
                        </div>
                        <Popover.Panel className="absolute mt-1 bg-black bg-opacity-90 z-10 w-auto right-4 p-4 shadow-md rounded-md">
                            {!isBlog ? (
                                <div className="grid grid-cols-1">
                                    <Button onClick={handleWorkScroll}>
                                        Projects
                                    </Button>
                                    <Button onClick={handleAboutScroll}>
                                        About
                                    </Button>
                                    <Button onClick={handleDasScroll}>
                                        DAS
                                    </Button>
                                    {data.showBlog && (
                                        <Button
                                            onClick={() => router.push("/blog")}
                                        >
                                            Blog
                                        </Button>
                                    )}
                                    <Button
                                        onClick={() =>
                                            window.open(
                                                "mailto:michaeltristanflores646@gmail.com"
                                            )
                                        }
                                    >
                                        Contact
                                    </Button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1">
                                    <Button
                                        onClick={() => router.push("/")}
                                        classes="first:ml-1"
                                    >
                                        Home
                                    </Button>
                                    {data.showBlog && (
                                        <Button
                                            onClick={() => router.push("/blog")}
                                        >
                                            Blog
                                        </Button>
                                    )}
                                    <Button
                                        onClick={() =>
                                            window.open(
                                                "mailto:michaeltristanflores646@gmail.com"
                                            )
                                        }
                                    >
                                        Contact
                                    </Button>
                                </div>
                            )}
                        </Popover.Panel>
                    </>
                )}
            </Popover>
            <div className=" mt-10 flex flex-row items-center justify-between bg-black rounded-xl hidden sticky top-0 z-10 tablet:flex">
                <h1
                    onClick={() => router.push("/")}
                    className="font-medium text-xl cursor-pointer mob:p-2 laptop:p-3"
                >
                    {data.name}.
                </h1>
                {!isBlog ? (
                    <div className="">
                        <div className="flex">
                            <Button onClick={handleWorkScroll}>Projects</Button>
                            <Button onClick={handleAboutScroll}>About</Button>
                            <Button onClick={handleDasScroll}>DAS</Button>
                            {data.showBlog && (
                                <Button onClick={() => router.push("/blog")}>
                                    Blog
                                </Button>
                            )}
                            <Button
                                onClick={() =>
                                    window.open("mailto:michaeltristanflores646@gmail.com")
                                }
                            >
                                Contact
                            </Button>
                        </div>
                        <div className="max-w-xl mx-auto rounded-full mb-1 py-1 px-2 bg-yellow-600 w-full">
                            <input type="range" min="1" max="4"   className="w-full"
                                onChange={(e) => {
                                    if (e.target.value === "1") {
                                        handleWorkScroll();
                                    } else if (e.target.value === "2") {
                                        handleAboutScroll();
                                    } else if (e.target.value === "3") {
                                        handleDasScroll();
                                    } else if (e.target.value === "4") {
                                        router.push("https://www.youtube.com/watch?v=k85mRPqvMbE");
                                    }
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex">
                        <Button onClick={() => router.push("/")}>Home</Button>
                        {data.showBlog && (
                            <Button onClick={() => router.push("/blog")}>
                                Blog
                            </Button>
                        )}
                        <Button
                            onClick={() =>
                                window.open("mailto:michaeltristanflores646@gmail.com")
                            }
                        >
                            Contact
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
