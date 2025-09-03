
const LINKS = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#", active: true },
  { name: "Properties", href: "#" },
  { name: "Services", href: "#" },
]

const Header = () => {
  return (
    <header className="h-25 flex items-center mx-auto bg-gray-1">
      {/* logo block */}
      <nav className="flex items-center justify-center w-full px-[162px] max-w-[1920px] mx-auto gap-10">

        <figure>
          <img src="/images/Logo.png" alt="Logo image" />
        </figure>

        <ul className="flex-1 text-nowrap flex items-center justify-center [&*>li]:px-6 [&*>li]:py-[14px] font-medium text-lg leading-[150%]">
          {LINKS.map(({ name, href, active }) => (
            <li
              key={name}
              className={`rounded-[10px] ${active ? "bg-background border border-stroke" : ""}`}
            >
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>

        <a className="bg-background text-nowrap border border-stroke rounded-[10px] px-6 py-4" href="#">Contact Us</a>
      </nav>

    </header>
  )
};
export default Header