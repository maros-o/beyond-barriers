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

const App = () => (
  <>
    <header className="flex justify-between items-center md:ps-10 md:pe-20 py-2 bg-myblack border-b-[6px] border-[#242424]/60 sticky top-0">
      <div className="flex items-center w-1/2 w-100">
        <img
          src={`${assets_url}/LogoNoTextTransparent.svg`}
          alt="logo"
          className="md:max-w-[100px] max-w-[140px] w-100 opacity-90"
        />
        <div className="md:text-[50px] text-[40px] text-myred font-bold md:tracking-[-4px] banner">
          <span className="text-white">BEYOND</span> BARRIERS
        </div>
      </div>
      <nav className="gap-12 items-center justify-center hidden md:flex">
        <NavLink title="o nás" offset={-100} />
        <NavLink title="príběhy" offset={-100} />
        <NavLink title="partneři" offset={-100} />
        <NavLink title="kontakty" offset={-50} />
        <Link
          className="bg-myred/60 flex items-center justify-center py-4 px-5 text-xl tr=ansition-all duration-200 font-semibold hover:text-white select-none"
          spy={true}
          smooth={true}
          to={"MERCH"}
        >
          MERCH
        </Link>
      </nav>
    </header>
    <main className="flex flex-col flex-grow text-white select-none pointer-events-none">
      <section
        className="flex-col-cc bg-gradient-to-b bg-myblack border-myblack z-[-2] py-20 pb-[200px]"
        id={"o nás"}
      >
        <div className="relative">
          <h1 className="section-title">KDO JSME</h1>
          <div className="titlebg w-[193px] left-[-20px]"></div>
        </div>
        <p className="sm:max-w-[1200px] w-100 text-lg bg-mygrey/60 px-8 py-6 tracking-wider">
          Vítejte u Beyond Barriers – esportového týmu, kde vášeň pro videohry
          spojuje jedinečné jednotlivce s tělesným postižením. Jsme odhodláni
          překonávat jakékoli fyzické překážky a dokazovat, že ve světě esportu
          neexistují hranice. Společně formujeme komunitu, která inspiruje k
          posouvání vlastních limitů a ukazuje, že vášeň a spolupráce jsou
          klíčové pro úspěch, ať už jsme kdekoli na světě. Jsme Beyond Barriers
          – tým, který nezná omezení a věří, že esport je pro každého.
        </p>
      </section>
      <section
        className="flex-col-cc bg-gradient-to-b from-myblack via-black/20 to-myblack p-20 border-b-2 border-myblack z-[-2] pb-[200px]"
        id={"MERCH"}
      >
        <div className="relative">
          <h1 className="section-title">NÁŠ MERCH</h1>
          <div className="titlebg w-[296px] left-[165px]"></div>
        </div>
        <ul className="flex-wrap-cc gap-20 mt-4">
          <Merch price={299} src={"merchMugGray"} title={"Hrníček"} />
          <Merch price={499} src={"teamJersey"} title={"Týmový dres"} />
          <Merch
            price={1799}
            src={"merchControllerGray2"}
            title={"Xbox Ovladač"}
          />
          <Merch price={899} src={"merchMouse"} title={"Myš Logitech G500"} />
        </ul>
      </section>
      <section
        className="flex-col-cc bg-gradient-to-b from-myblack via-black/20 to-myblack p-20 border-b-2 border-myblack z-[-2]"
        id={"partneři"}
      >
        <div className="relative">
          <h1 className="section-title">PARTNEŘI</h1>
          <div className="titlebg w-[212px] left-[-20px]"></div>
        </div>
        <ul className="flex-wrap-cc gap-10">
          <Partner src={"rockstar"} />
          <Partner src={"kaufland"} />
          <Partner src={"syner"} />
          <Partner src={"steelseries"} />
        </ul>
      </section>
      <section
        className="flex-col-cc bg-myblack p-20 py-[150px] z-[-2]"
        id={"kontakty"}
      >
        <div className="relative">
          <h1 className="section-title">SLEDUJ NÁS</h1>
          <div className="titlebg w-[185px] left-[300px]"></div>
        </div>
        <ul className="flex-wrap-cc gap-20 opacity-90 pt-6 pb-20 z-10">
          <Social Icon={FaInstagram} title={"@beyond_barriers"} />
          <Social Icon={FaFacebook} title={"BeyondBarriersCZ"} />
          <Social Icon={FaTwitter} title={"@BeyondBarriers"} />
          <Social Icon={FaTwitch} title={"beyond_barriers"} />
          <Social Icon={FaYoutube} title={"Beyond Barriers"} />
        </ul>
      </section>
    </main>
    <footer className="flex w-full py-2 h-[122px] bg-myblack border-t-[6px] border-[#242424]/60">
      <div className="flex items-center justify-center text-center w-full text-lg text-white/80">
        Copyright © 2023
        <span className="mx-[6px] font-semibold"> Beyond Barriers </span> all
        rights reserved.
      </div>
    </footer>
  </>
);

const Social = ({ Icon, title }) => (
  <li className="social">
    <Icon size={40} />
    <div className="font-bold text-xl hover:underline">{title}</div>
  </li>
);

const Merch = ({ src, title, price }) => (
  <li className="flex-col-cc">
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
  </li>
);

const NavLink = ({ title, offset }) => (
  <Link
    className="text-xl hover:underline transition-all duration-200 font-semibold select-none uppercase"
    spy={true}
    smooth={true}
    to={title}
    offset={offset}
  >
    {title}
  </Link>
);

const Partner = ({ src }) => (
  <li className="flex items-center justify-center w-[400px] h-[180px] bg-[#121212c0] px-10 opacity-90">
    <img
      src={`${assets_url}/${src}.svg`}
      alt={src}
      className="h-[40px] text-white"
      loading="lazy"
    />
  </li>
);

export default App;
