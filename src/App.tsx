import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-scroll";

const assets_url =
  "https://raw.githubusercontent.com/maros-o/beyond-barriers/main/public";

function App() {
  return (
    <>
      <header className="flex justify-between items-center md:ps-10 md:pe-20 py-2 bg-myblack border-b-[6px] border-[#242424]/60 sticky top-0">
        <div className="flex items-center w-1/2 w-100">
          <img
            src={`${assets_url}/LogoNoTextTransparent.svg`}
            alt="logo"
            className="md:max-w-[100px] max-w-[140px] w-100 opacity-90"
          />
          <div className="md:text-[50px] text-[40px] text-myred font-bold md:tracking-[-4px] banner ">
            <span className="text-white">BEYOND</span> BARRIERS
          </div>
        </div>
        <nav className="gap-12 items-center justify-center hidden md:flex">
          <NavLink title="PARTNEŘI" offset={-100} />
          <NavLink title="KONTAKTY" offset={-50} />
          <NavLink title="O NÁS" offset={-100} />
          <Link
            className="bg-myred/60 flex items-center justify-center py-4 px-5 text-xl tr=ansition-all duration-200 font-semibold hover:text-white"
            spy={true}
            smooth={true}
            to={"MERCH"}
          >
            MERCH
          </Link>
        </nav>
      </header>
      <div className="flex flex-col flex-grow text-white">
        <div
          className="flex flex-col items-center justify-center bg-gradient-to-b from-myblack via-black/20 to-myblack p-20 border-b-2 border-myblack z-[-2]"
          id={"PARTNEŘI"}
        >
          <div className="relative">
            <div className="text-7xl text-center font-bold tracking-wide pb-10">
              PARTNEŘI
            </div>
            <div className="titlebg w-[212px] left-[-20px] hidden sm:flex"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <Partner src={"rockstar"} />
            <Partner src={"kaufland"} />
            <Partner src={"syner"} />
            <Partner src={"steelseries"} />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-myblack p-20 py-[150px] z-[-2]"
          id={"KONTAKTY"}
        >
          <div className="relative">
            <div className="text-7xl text-center font-bold tracking-wide pb-10">
              SLEDUJ NÁS
            </div>
            <div className="titlebg w-[185px] left-[300px] hidden sm:flex"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-20 opacity-90 pt-6 pb-20 z-10">
            <div className="soc">
              <FaInstagram size={40} />
              <div className="soc-title">@beyond_barriers</div>
            </div>
            <div className="soc">
              <FaFacebook size={40} />
              <div className="soc-title">BeyondBarriersCZ</div>
            </div>
            <div className="soc">
              <FaTwitter size={40} />
              <div className="soc-title">@BeyondBarriers</div>
            </div>
            <div className="soc">
              <FaTwitch size={40} />
              <div className="soc-title">beyond_barriers</div>
            </div>
            <div className="soc">
              <FaYoutube size={40} />
              <div className="soc-title">Beyond Barriers</div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-gradient-to-b bg-myblack border-myblack z-[-2] py-20 pb-[200px]"
          id={"O NÁS"}
        >
          <div className="relative">
            <div className="text-7xl text-center font-bold tracking-wide pb-10">
              KDO JSME
            </div>
            <div className="titlebg w-[193px] left-[-20px] hidden sm:flex"></div>
          </div>
          <div className="sm:max-w-[1200px] w-100 text-lg bg-mygrey/60 px-8 py-6 tracking-wider">
            Vítejte u Beyond Barriers – esportového týmu, kde vášeň pro videohry
            spojuje jedinečné jednotlivce s tělesným postižením. Jsme odhodláni
            překonávat jakékoli fyzické překážky a dokazovat, že ve světě
            esportu neexistují hranice. Společně formujeme komunitu, která
            inspiruje k posouvání vlastních limitů a ukazuje, že vášeň a
            spolupráce jsou klíčové pro úspěch, ať už jsme kdekoli na světě.
            Jsme Beyond Barriers – tým, který nezná omezení a věří, že esport je
            pro každého.
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-gradient-to-b from-myblack via-black/20 to-myblack p-20 border-b-2 border-myblack z-[-2] pb-[200px]"
          id={"MERCH"}
        >
          <div className="relative">
            <div className="text-7xl text-center font-bold tracking-wide pb-10">
              NÁŠ MERCH
            </div>
            <div className="titlebg w-[296px] left-[165px] hidden sm:flex"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-20 mt-4">
            <Merch price={299} src={"merchMug"} title={"Hrníček"} />
            <Merch price={499} src={"teamJersey"} title={"Týmový dres"} />
            <Merch price={899} src={"merchMouse"} title={"Myš Logitech G500"} />
            <Merch
              price={1799}
              src={"merchController"}
              title={"Xbox Ovladač"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const Merch = ({
  src,
  title,
  price,
}: {
  src: string;
  title: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={`${assets_url}/${src}.jpg`}
        alt={src}
        className="h-[240px] w-[200px] object-cover border-[6px] border-myred/60"
        loading="lazy"
      />
      <div className="text-2xl pt-4 tracking-wide font-semibold uppercase">
        {title}
      </div>
      <div className="text-2xl pt-1 tracking-widest font-semibold text-myred">
        {price} CZK
      </div>
    </div>
  );
};

const NavLink = ({ title, offset }: { title: string; offset?: number }) => {
  return (
    <Link
      className="text-xl hover:underline transition-all duration-200 font-semibold"
      spy={true}
      smooth={true}
      to={title}
      offset={offset}
    >
      {title}
    </Link>
  );
};

const Partner = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center justify-center w-[400px] h-[180px] bg-[#121212c0] px-10 opacity-90">
      <img
        src={`${assets_url}/${src}.svg`}
        alt={src}
        className="h-[40px] text-white"
        loading="lazy"
      />
    </div>
  );
};

export default App;
