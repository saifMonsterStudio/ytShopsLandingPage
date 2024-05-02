import brandLogoalpha from "/BrandLogoalpha.svg";
const LandingPageNavabar = () => {

    return (
        <header className="max-w-[750px] lg:max-w-7xl mx-auto flex flex-row items-center justify-between text-black font-medium px-2">
            {/* brand logo */}
            <a
                href="/"
                className="flex items-center gap-2 flex-grow md:flex-grow-0 py-3 text-lg focus:outline-none"
            >
                <img
                    src={brandLogoalpha}
                    alt="brand logo"
                    className="w-48 md:w-64"
                />
            </a>
            <button className={`inline-flex items-center justify-center gap-2 text-sm tracking-wide text-white transition-colors duration-300 px-6 py-2 hover-visible:outline-none whitespace-nowrap bg-[#ff0000] hover:bg-[#C21807] hover:shadow-2xl rounded-md `}>Join The Waitlist</button>
        </header>
    );
};

export default LandingPageNavabar;
