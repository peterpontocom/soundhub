export function Menuitemns(pros: icon, nome) {
  return (
    <li style={style.li}>
      <a href="#" className="d-flex align-items-center gap-3 text-dark-white menuItemLink" style={style.a}>
        <span>{pros.icon}</span>
        <span className="mt-1">{pros.nome}</span>
      </a>
    </li>
  )
}

const style = {
  li: {
    listStyle: "none",
  },
  a: {
    padding: '1rem 2rem',
  },
}
