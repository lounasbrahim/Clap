const SvgIcon = ({ fill, fillOpacity }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_147_283)">
        <rect width="40" height="40" rx="20" fill={fill} fill-opacity="1" />
      </g>
      <path
        d="M17 10L25.7836 19.7501C25.8519 19.8213 25.9064 19.9072 25.9436 20.0027C25.9808 20.0981 26 20.201 26 20.305C26 20.409 25.9808 20.5119 25.9436 20.6073C25.9064 20.7028 25.8519 20.7887 25.7836 20.8599L17 30.61"
        stroke="#AEAEAE"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_147_283"
          x="-4"
          y="-4"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_147_283"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_147_283"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default SvgIcon
