import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";

const assets_url =
  "https://raw.githubusercontent.com/maros-o/beyond-barriers/main/public";

const App = () => (
  <>
    <header className="flex justify-between items-center h-[122px] md:ps-10 md:pe-20 py-2 bg-myblack border-b-[6px] border-[#242424]/60 sticky top-0">
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
        <NavLink title="o nás" offset={-122} />
        <NavLink title="hráči" offset={-122} />
        <NavLink title="partneři" offset={-122} />
        <NavLink title="kontakty" offset={-122} />
        <Link
          className="bg-myred/60 flex items-center justify-center py-4 px-5 text-xl tr=ansition-all duration-200 font-semibold hover:text-white select-none"
          spy={true}
          smooth={true}
          to={"MERCH"}
          offset={-122}
        >
          MERCH
        </Link>
      </nav>
    </header>
    <main className="flex flex-col flex-grow text-white select-none pointer-events-none">
      <section
        className="bg-gradient-to-b bg-myblack border-myblack backdrop-filter backdrop-blur"
        id={"o nás"}
        style={{
          backgroundImage: `url(${assets_url}/bannerVig.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          justifyContent: "space-between",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div className="relative">
          <h1 className="section-title">KDO JSME</h1>
          <div className="titlebg w-[193px] left-[-20px]"></div>
        </div>
        <article className="sm:max-w-[1060px] w-full text-lg bg-mygrey/70 px-8 py-6 tracking-wider">
          Vítejte u <span className="font-bold">Beyond Barriers</span> –
          esportového týmu spojujícího vášeň pro videohry a jedinečné
          jednotlivce s tělesným postižením. Hledáme nové hráče do našeho týmu
          pro hry jako <span className="font-semibold">FIFA</span>,{" "}
          <span className="font-semibold">CSGO</span>,
          <span className="font-semibold"> League of Legends</span> a{" "}
          <span className="font-semibold">PUBG</span>. Nezáleží na úrovni
          zkušeností – věříme, že esport je pro každého. Připojte se k nám a
          buďte součástí komunity, která dokazuje, že vášeň a spolupráce jsou
          klíčové pro úspěch ve světě esportu.{" "}
          <span className="font-bold">Beyond Barriers</span> - společně
          překračujeme hranice!
        </article>
      </section>
      <section
        className="bg-gradient-to-b from-myblack via-black/20 to-myblack"
        id={"MERCH"}
        style={{
          marginTop: "10px",
        }}
      >
        <div className="relative">
          <h1 className="section-title">NÁŠ MERCH</h1>
          <div className="titlebg w-[296px] left-[165px]"></div>
        </div>
        <ul className="flex-wrap-cc gap-20 mt-4">
          <Merch price={399} src={"merchMugGray"} title={"Hrníček"} />
          <Merch price={699} src={"teamJersey"} title={"Týmový dres"} />
          <Merch
            price={1799}
            src={"merchControllerGray2"}
            title={"Xbox Ovladač"}
          />
          <Merch price={899} src={"merchMouse"} title={"Myš Logitech"} />
        </ul>
        <div className="mt-[60px] bg-myred/60 flex items-center justify-center py-4 px-5 text-xl tr=ansition-all duration-200 font-semibold hover:text-white select-none">
          PŘEJÍT DO ESHOPU
        </div>
      </section>
      <section
        className="bg-gradient-to-b from-myblack via-black/20 to-myblack"
        id={"hráči"}
      >
        <div className="relative">
          <h1 className="section-title">NAŠI HRÁČI</h1>
          <div className="titlebg w-[212px] left-[-20px]"></div>
        </div>
        <div className="flex items-center justify-center gap-10 mt-4 w-full">
          <IoIosArrowBack size={60} className="text-white/60" />
          <div
            className="max-w-[1000px] flex sm:flex-row flex-col"
            style={{
              boxShadow: "0px 0px 4px 4px #00000020",
            }}
          >
            <div className="flex flex-col bg-black/20 p-5">
              <img
                src={`${assets_url}/katka.jpg`}
                alt="logo"
                className="max-w-[380px] w-100 opacity-90 object-cover border-[6px] border-myred/60"
              />
              <div className="text-xl text-center tracking-wider mt-4">
                Kateřina <span className="font-bold">"Katniss"</span> Novotná
              </div>
            </div>
            <article className="px-8 py-6 tracking-wider bg-mygrey/80 flex flex-col gap-5">
              <p>
                <span className="font-bold">Katka</span>, nesmírně odvážná a
                inspirativní mladá žena, se stala paraplegičkou v pouhých pěti
                letech poté, co uklouzla na bazénové dlažbě a poranila si sedmý
                krční obratel.
              </p>
              <p>
                Toto nečekané zranění znemožnilo pohyb jejích dolních končetin a
                omezilo pohyblivost prstů na rukou, však Katka se odmítla nechat
                tímto hendikepem ovlivnit.
              </p>
              <p>
                Navzdory výzvám, kterým čelí, je Katka nejen výjimečným členem
                našeho týmu, ale také brilantní hráčkou ve hře{" "}
                <span className="font-bold">FIFA</span>.
              </p>
              <p>
                Její odhodlání a síla ducha nezná hranice, a to se projevuje
                nejen ve Esportu, ale i ve všedním životě.
              </p>
              <p>
                Katka je živým důkazem toho, že i přes životní výzvy můžeme
                dosáhnout vynikajících výsledků a naplnit svůj život radostí a
                smyslem.
              </p>
            </article>
          </div>
          <IoIosArrowForward size={60} className="text-white/60" />
        </div>
      </section>
      <section
        className="bg-gradient-to-b from-myblack via-black/20 to-myblack"
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
      <section className="bg-myblack" id={"kontakty"}>
        <div className="relative">
          <h1 className="section-title">SLEDUJ NÁS</h1>
          <div className="titlebg w-[185px] left-[300px]"></div>
        </div>
        <ul className="flex-wrap-cc gap-20 opacity-90 pt-6">
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
