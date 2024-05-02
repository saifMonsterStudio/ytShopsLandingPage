import { useForm } from "react-hook-form";
import brandIcon from "../../public/brandIcon.svg"
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic"
import { successAlert } from "../components/successAlert"
import { errorAlert } from "./errorAlert";

const LandingPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        const email = data?.waitingListEmails;

        axiosPublic.post('/82244417f956ac7c599f191593f7e441a4fafa20a4158fd52e154f1dc4c8ed92/send', { email })
            .then((res) => {
                if (res?.data?.data?.id) {
                    successAlert("Thank you for your email.")
                }
                else {
                    errorAlert('Your Email is already in our Waitlist');
                }
            })

    };

    return (
        <div className="flex flex-col  justify-between">
            <div className="w-screen flex flex-col items-center mt-40 space-y-3 md:space-y-5 flex-grow h-[calc(100vh-19rem)]">
                <img src={brandIcon} alt="YT Shops Brand Logo" className="w-12 md:w-16 lg:w-20" />
                <h1 className="text-3xl md:text-5xl font-semibold">YT Shops</h1>
                <p className="text-xs md:text-sm">The First & Global Marketplace For Content Creators.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row items-center justify-center">
                    <input
                        {...register("waitingListEmails", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        type="text"
                        name="waitingListEmails"
                        placeholder="Enter Your Email"
                        className="bg-gray-100 w-[250px] md:w-[300px] h-10 pl-5 rounded-l-lg rounded-r-none focus:outline-none text-xs md:text-sm focus:shadow-xl"
                    />
                    <input type="submit" className="bg-[#ff0000] text-white text-sm h-10 px-5 rounded-r-lg rounded-l-none hover:cursor-pointer hover-visible:outline-none hover:bg-[#C21807] hover:shadow-2xl transition-colors duration-300" value="Join The Waitlist" />
                </form>
                {errors.waitingListEmails && <span className="text-red-500 text-sm">{errors.waitingListEmails.message}</span>}
                <div className="flex-grow"></div>
            </div>

            <div className="flex flex-col md:flex-row md:w-[700px] lg:w-[1240px] mx-auto justify-between space-y-5">
                <div className="flex flex-row items-center justify-center md:justify-start gap-2 lg:gap-5">
                    <a
                        className="hover:brightness-75"
                        href="https://twitter.com/ytshops"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsTwitterX
                            className="text-3xl"
                            href="https://twitter.com/ytshops"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </a>
                    <a
                        className="hover:brightness-75"
                        href="https://www.youtube.com/@YTShopsHQ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="text-3xl" />
                    </a>
                    <a
                        className="hover:brightness-75"
                        href="https://discord.gg/gQTnzGweWv"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaDiscord className="text-3xl" />
                    </a>

                </div>
                <div className=" text-center text-sm lg:text-base">
                    <p className="text-xs">
                        Copyright © 2024 YT Shops, Build By OctopusX LLC. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
