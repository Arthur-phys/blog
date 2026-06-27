export default function MenuIcon({size, padding, stroke}: {size: string, padding: string, stroke: string}) {
  return (
    <>
      <svg
        style={{padding: padding}}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="ionicon"
	      width={size}
        height={size}
      >
	<path d="M80 160h352M80 256h352M80 352h352" fill="none" stroke={stroke} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px"/>
      </svg>
    </>
  );
}
