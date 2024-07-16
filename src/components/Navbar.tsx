
export default function Navbar() {
  const links = ['УСЛУГИ', 'БЛОГ', 'ОТЗЫВЫ', 'О НАС', 'КОНТАКТЫ']
  
  return (
    <nav className="flex justify-center items-center">
      <ul className="flex justify-center space-x-24 bg-white bg-opacity-10 px-32 py-2 border-white border rounded-[34px]">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:underline text-xl">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}