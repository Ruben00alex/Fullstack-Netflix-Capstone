const Footer = () => {

    return (
        //we need to place the footer on the bottom of the page,but we don't want to see it until we scroll down, so we use the sticky class
        <footer className="w-full h-16 bg-slate-900 mt-auto flex flex-col justify-center items-center">
            <p className="text-white text-center ">Site built by Alex</p>
            <a lassName="text-white text-center " href="https://github.com/Ruben00alex"> Github</a>
        </footer>
    )
}

export default Footer
