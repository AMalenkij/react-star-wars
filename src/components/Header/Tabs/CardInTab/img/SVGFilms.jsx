export default function SVGComponentFilms({ color }) {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} className="transition-all duration-200">
        <path d="M445.117 24.7066C443.164 25.488 439.551 27.832 437.207 29.8826C434.863 31.9333 391.699 75.0973 341.308 125.684C290.82 176.368 249.12 217.773 248.632 217.773C248.047 217.773 205.565 175.781 154.296 124.415C79.2958 49.4146 60.0572 30.5666 56.1518 28.712C44.4332 23.1453 31.4452 27.6373 25.0972 39.552C22.3625 44.6306 22.2652 54.6893 24.8038 59.572C25.7798 61.428 68.9438 105.471 120.8 157.325L215.039 251.661L197.559 269.141C187.891 278.712 179.297 287.208 178.419 287.989C176.953 289.161 176.271 288.868 172.852 285.743C166.016 279.591 164.844 280.079 149.121 295.801L135.449 309.473L136.035 313.184L136.719 316.992L120.899 328.125C112.305 334.277 104.591 340.332 103.809 341.504C101.759 344.532 102.931 348.34 107.032 352.637L110.352 356.055L104.785 361.719L99.3158 367.285L93.7492 361.816L88.2798 356.445L83.0065 361.816L77.7332 367.187L82.8118 372.363C85.6438 375.195 87.8905 377.832 87.8905 378.124C87.8905 378.905 79.1012 387.889 71.5825 394.921L66.4065 399.609L62.9892 396.581C58.8878 393.065 55.3718 391.992 52.3452 393.359C51.0758 393.847 44.1425 402.636 36.9158 412.792C20.6078 435.448 19.2398 437.597 20.0212 440.624C20.8025 443.553 56.2518 479.003 59.3772 479.98C62.2092 480.859 64.2598 479.589 87.1118 463.281C97.2678 455.957 106.057 449.024 106.643 447.753C108.009 444.628 107.033 441.113 103.323 437.011L100.295 433.495L110.451 422.948C116.017 417.088 120.997 412.304 121.584 412.205C122.072 412.205 124.807 414.353 127.639 417.185L132.815 422.264L138.185 416.991L143.556 411.717L138.185 406.248L132.716 400.681L138.283 395.212L143.947 389.645L147.364 392.965C155.275 400.485 157.325 399.313 171.485 379.489L183.009 363.279L186.817 363.963L190.528 364.548L204.2 350.876C219.825 335.251 220.411 333.981 214.356 327.243C212.5 325.192 210.939 323.239 210.939 322.945C210.939 322.652 219.337 313.961 229.591 303.609L248.243 284.86L268.555 305.172C285.449 322.067 288.769 325.875 287.988 327.243C285.253 332.419 286.132 333.591 308.887 356.247C331.249 378.512 332.421 379.391 337.109 376.852C338.965 375.876 343.652 380.269 389.551 426.168C430.567 467.085 440.526 476.656 443.164 477.144C446.289 477.828 446.875 477.339 460.059 464.156C472.265 452.047 473.633 450.289 473.633 447.261C473.633 444.136 470.801 441.012 433.887 404.097L394.043 364.257L399.707 358.691L405.371 353.124L400 347.753L394.531 342.284L388.867 347.948L383.203 353.515L377.539 347.753C374.121 344.237 372.265 341.796 372.949 341.405C373.535 341.015 374.024 339.061 374.024 337.108C374.024 333.788 373.048 332.519 361.133 320.604C354.004 313.573 347.168 307.519 346.095 307.225C344.923 306.835 342.775 307.031 341.212 307.616C338.575 308.691 337.989 308.201 310.352 280.565C294.923 265.136 282.325 252.148 282.423 251.757C282.617 251.367 325.489 208.203 377.735 155.761C429.981 103.223 473.437 58.984 474.415 57.2266C476.661 53.028 476.661 40.7226 474.415 36.524C472.267 32.52 467.384 27.7346 463.575 25.684C459.473 23.6333 449.609 23.0453 445.117 24.7066ZM458.496 41.504C460.156 43.0666 460.937 44.9213 460.937 47.0706C460.937 50 453.417 57.8133 365.723 145.508L270.508 240.723L264.941 235.059L259.277 229.492L354.492 134.277C442.187 46.5826 450 39.0626 452.929 39.0626C455.077 39.0626 456.933 39.844 458.496 41.504ZM185.449 178.125L321.583 314.259L313.477 316.896L305.469 319.533L172.267 186.428C97.9492 112.109 38.9652 52.344 38.5745 51.0746C37.9892 48.6333 40.2345 43.4573 42.1878 42.676C42.8718 42.3826 44.7265 42.0906 46.3865 42.0906C49.0238 41.9933 63.6718 56.3479 185.449 178.125ZM218.261 292.968L199.219 312.012L193.652 306.348L187.988 300.781L207.031 281.739L226.073 262.696L231.64 268.263L237.304 273.927L218.261 292.969V292.968ZM182.617 317.871L198.731 333.984L193.36 339.355L187.989 344.725L171.681 328.417L155.275 312.011L160.353 306.932C163.185 304.1 165.724 301.756 166.017 301.756C166.311 301.756 173.732 308.983 182.619 317.869L182.617 317.871ZM348.731 330.468L355.176 336.717L344.141 347.752L333.008 358.885L321.289 347.167C314.941 340.819 309.864 335.351 310.156 334.96C310.741 334.375 339.844 324.413 341.308 324.316C341.893 324.219 345.215 327.051 348.729 330.468H348.731ZM151.856 331.053L154.688 334.081L143.751 345.019L132.813 355.956L127.833 350.976L122.853 345.996L135.451 337.109C142.287 332.129 148.244 328.125 148.536 328.125C148.828 328.125 150.293 329.492 151.856 331.055V331.053ZM169.336 348.533C171.093 350.389 171.777 351.853 171.289 352.732C170.899 353.416 166.797 359.177 162.207 365.525L154.004 377.147L149.024 372.167L144.044 367.187L154.787 356.444C160.647 350.584 165.724 345.701 166.017 345.701C166.408 345.701 167.872 346.971 169.336 348.533ZM366.698 370.117L361.328 375.488L355.761 369.921L350.097 364.257L355.468 358.887L360.741 353.516L366.405 359.083L372.069 364.747L366.698 370.117ZM127.733 383.496C124.901 386.328 122.167 388.672 121.679 388.672C120.409 388.672 111.327 379.785 111.327 378.516C111.327 377.931 113.573 375.196 116.405 372.364L121.484 367.188L127.148 372.755L132.812 378.321L127.733 383.496ZM388.671 381.348L393.944 386.719L388.671 392.089L383.397 397.46L377.733 391.893L372.069 386.327L377.245 381.151C379.98 378.319 382.519 375.975 382.812 375.975C383.105 375.975 385.741 378.416 388.672 381.345L388.671 381.348ZM105.468 395.02L110.839 400.391L99.8038 411.425L88.8665 422.363L83.2998 416.699L77.6358 411.132L88.3785 400.389C94.2385 394.529 99.3158 389.647 99.6092 389.647C99.9025 389.647 102.539 392.088 105.469 395.017L105.468 395.02ZM430.176 422.852L454.591 447.267L449.22 452.637L443.849 458.008L419.24 433.399L394.533 408.692L399.612 403.613C402.444 400.781 404.983 398.437 405.276 398.437C405.569 398.437 416.8 409.375 430.179 422.852H430.176ZM61.8172 417.773L66.4065 422.461L55.3718 433.399L44.3358 444.336L41.3078 441.211L38.1825 437.988L47.0692 425.488C51.9518 418.652 56.2492 413.085 56.6398 413.085C56.9332 413.085 59.2785 415.136 61.8172 417.773ZM86.7198 443.555C86.5252 443.945 80.9585 448.243 74.2198 453.027L62.0132 461.816L58.7905 458.691L55.6652 455.663L66.6025 444.628L77.5385 433.593L82.2265 438.183C84.8638 440.721 86.8158 443.163 86.7185 443.553L86.7198 443.555Z" />
        <path d="M242.188 132.812V179.687H257.814V85.9373H242.188V132.812ZM203.614 116.895C200.391 118.261 197.364 119.629 196.875 120.117C196.29 120.703 209.96 157.423 211.328 158.887C211.719 159.277 224.023 154.297 224.903 153.417C225.684 152.636 211.622 116.503 210.156 115.136C209.766 114.843 206.836 115.625 203.614 116.895ZM281.933 133.105C277.735 143.457 274.413 152.344 274.413 152.832C274.413 153.711 288.085 159.571 288.573 158.984C290.136 156.737 303.612 120.605 303.027 120.019C302.636 119.628 299.316 118.163 295.8 116.796L289.355 114.355L281.933 133.105ZM116.895 203.223C115.429 207.129 114.356 210.352 114.453 210.449C115.625 211.524 152.735 225.488 153.223 225.097C153.516 224.707 154.98 221.484 156.348 217.968L158.985 211.425L141.212 204.296C131.544 200.389 122.657 196.972 121.583 196.679C119.923 196.288 119.239 197.264 116.895 203.221V203.223ZM359.863 203.613C350.195 207.617 341.893 211.035 341.405 211.231C340.331 211.621 345.604 225.587 346.875 225.587C349.219 225.587 384.766 210.548 384.766 209.571C384.766 207.032 379.98 196.777 378.711 196.583C378.027 196.485 369.531 199.708 359.863 203.613ZM85.9375 250V257.812H179.687V242.187H85.9375V249.999V250ZM320.312 250V257.812H414.061V242.187H320.312V249.999V250ZM122.069 286.328C118.065 287.891 114.648 289.356 114.452 289.453C113.964 290.039 119.628 303.711 120.409 303.711C120.897 303.711 124.414 302.344 128.418 300.683L135.547 297.753L132.715 290.82C131.152 286.913 129.785 283.691 129.589 283.593C129.492 283.496 126.073 284.668 122.069 286.328ZM369.238 285.059C367.382 288.379 364.355 297.168 364.745 297.852C365.527 299.219 379.102 303.907 379.784 303.125C380.859 301.856 384.764 291.992 384.764 290.528C384.764 289.844 381.444 287.989 377.44 286.329C370.701 283.595 370.019 283.496 369.238 285.059ZM242.188 367.187V414.061H257.814V320.312H242.188V367.187ZM198.927 371.288C197.462 375.195 196.095 378.808 195.998 379.296C195.704 380.371 209.279 385.741 210.157 384.96C211.036 384.081 215.821 371.972 215.821 370.703C215.821 369.824 212.208 368.065 203.127 364.745C202.052 364.355 200.978 366.015 198.927 371.288ZM290.528 366.893C287.305 368.163 284.376 369.628 283.888 370.019C283.498 370.409 284.572 374.12 286.232 378.221L289.26 385.643L295.803 383.201C299.319 381.835 302.542 380.467 303.03 379.979C303.811 379.197 298.05 364.159 296.975 364.353C296.682 364.353 293.752 365.525 290.53 366.892L290.528 366.893Z" />
      </g>
    </svg>
  )
}
