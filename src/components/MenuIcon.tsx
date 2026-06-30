import './MenuIcon.css'

export default function MenuIcon({stroke}: {stroke: string}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="menuicon menuicon-mobile"
      >
	<path d="M80 160h352M80 256h352M80 352h352" fill="none" stroke={stroke} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px"/>
      </svg>
    </>
  );
}
