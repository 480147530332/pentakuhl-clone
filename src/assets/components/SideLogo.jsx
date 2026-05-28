import logo from "../../assets/images/phenta.png";

function SideLogo() {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[9999] flex items-center">

            {/* LEFT LINE */}
            <div ></div>

            {/* LOGO BOX */}
            <div >

                {/* LOGO IMAGE */}
                <img
                    src={logo}
                    alt="Penta Logo"
                    className="w-10 h-10 object-contain"
                />

               

            </div>

        </div>
    );
}

export default SideLogo;