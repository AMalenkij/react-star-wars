import ShadowFilter from '../../../constants/ShadowFilter'
import { COLOR_GOLD } from '../../../constants/settings'

export default function Logo({ color = COLOR_GOLD }) {
  return (
    <svg
      width={108}
      height={41}
      viewBox="0 0 108 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#shadow)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.353 13.027v6.235h21.884c2.544 0 5.794-1.96 5.794-5.203 0-1.304.598-2.155-1.241-3.88l-2.8-2.764c-1.603-1.247.192-1.247 1.54-1.247h9.24v13.094h7.327V6.168h9.876V.561h-31.98c-3.891 0-5.794 3.114-5.687 4.735.108 1.62.466 3.66 3.699 6.11 2.95 2.234-1.46 1.62-1.903 1.62H.352ZM68.176.56h-11.82l-6.628 18.701h7.375l1.197-2.619h7.78l1.156 2.619h7.224L68.176.562Zm-8.23 11.593 2.544-6.858 2.395 6.858h-4.939Zm37.858.873c-2.843 0-2.843-.873-2.843-.873 2.436 0 4.596-2.958 4.596-5.986 0-3.028-3.549-5.607-6.393-5.607H77.26v18.701h8.081v-6.235s3.441 3.367 5.237 4.739c1.796 1.371 1.945 1.496 4.382 1.496h12.686v-6.235h-9.842ZM90.47 8.663h-5.129V5.296h5.13c2.35 0 2.758 3.367 0 3.367ZM.353 21.63H8.62l2.095 6.235 1.945-6.235h8.68l2.244 6.235 2.245-6.235h7.182l-6.584 18.705h-6.584l-2.885-8.854-3.25 8.854H6.974L.353 21.63Zm49.625.108H38.157l-6.626 18.7h7.374l1.197-2.618h7.782l1.155 2.618h7.224l-6.285-18.7Zm-8.23 11.592 2.544-6.859 2.395 6.859h-4.938Zm56.205-6.088c-1.346 0-2.813.13-1.209 1.377l2.8 2.765c1.839 1.725 1.809 2.444 1.809 3.749 0 3.242-3.849 5.202-6.392 5.202l-17.681.099c-2.436 0-2.585-.124-4.382-1.496-1.795-1.371-5.237-4.739-5.237-4.739v6.235h-8.08v-18.7h15.904c2.843 0 6.393 2.58 6.393 5.607 0 3.028-2.16 5.986-4.597 5.986 0 0 1.071.897 2.867.897s8.71.006 8.71.006c.442 0 4.851.613 1.902-1.62-3.233-2.45-3.59-4.489-3.698-6.11-.108-1.621 1.574-4.87 5.463-4.87h15.123v5.612h-9.695ZM72.79 29.836h-5.13v-3.368h5.13c2.352 0 2.758 3.368 0 3.368Z"
          fill={color}
        />
      </g>
      <ShadowFilter />
    </svg>
  )
}