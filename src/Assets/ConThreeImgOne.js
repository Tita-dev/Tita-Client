import * as React from "react";

function ConThreeImgOne(props) {
  return (
    <svg width="50vh" height="50vh" viewBox="0 0 443 259" fill="none" {...props}>
      <g filter="url(#prefix__filter3_d)">
        <path
          fill="url(#prefix__pattern3)"
          shapeRendering="crispEdges"
          d="M34.075 6H429v199.21H34.075z"
        />
      </g>
      <g filter="url(#prefix__filter3_d)">
        <path
          d="M83.824 204.18c1.269 33.315-19.98 44.612-41.997 46.383C21.677 252.183 0 229.187 0 204.18c0-25.006 18.765-45.278 41.912-45.278s40.663 12.516 41.912 45.278z"
          fill="#A7CBEA"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter3_d"
          x={28.075}
          y={0}
          width={414.925}
          height={219.21}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="prefix__filter3_d"
          x={0}
          y={158.902}
          width={91.878}
          height={99.741}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0.547896 0 0 0 0 0.660524 0 0 0 0 0.758333 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <pattern
          id="prefix__pattern3"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image3"
            transform="matrix(.00317 0 0 .00629 -.001 0)"
          />
        </pattern>
        <image
          id="prefix__image3"
          width={316}
          height={159}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAACfCAYAAABk+mXyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABefSURBVHgB7Z0/jBxJW8Z7TxeA+KRbIyQkCLzmJBIQu0YECIJbJ196dkIAEvZlHIltQYIIzpZIke0IsvNBzp0JL/FapEhr58Ctv+AkEtZOyNBQv/Y+871bruruGY8/b00/P6lvdnr6T83u9eP3rar3qZ1uTRaLxWF6OUjbZ2evu2ebMcZskldpOznbXqTtaGdn56hbg51VDk4ih6DdTtudzuJmjPlwnKTtKG33k/idTD1pkuCdCd1X3RuhM8aYi8TjbqLwjQpeEjsiunudIzpjzMXlpHsjeo+HDhoUvCR2DzpHdcaYdniYRO9u7cOi4J2lsN+m7bAzxpi2eJ62a0n4XuUf1ATvuHsz8mqMMS3CSO61fOdH+Y6zNNZiZ4xpmcMzLTvHuQgvHXArvXzdGWPMdnA3RXoP9WYpeEns9tLL07TtdcYYsx3Qj3dF/XkxpWWe3V5njDHbg+YQ9/QR3ll090NnjDHbySWiPEV4X3XGGLO99POJFeER3e11xhiznbxKEd6lj85cT/Y6Y4zZXnbRuo87V1OYLeDVq1f9Bnt7e50xBQ7ow9vvzCSeP3/eXQR4sE9OTvpND/kY165d665cudI9evSoe5988cUXXUod+vttgqOjo/56bHzfGvxt+H5speN0jfv373dmthwieHudmcSdOx/WR4GHHyG5dOnS8uHWzwjNkCD88MMPKwlkCUSF++jetOWbb77p3gV9p3Wux7mPHz/uN34WT548We6/KP9ImQvBPgMWpwszic8++2zxobh169Yi/cH6bXd3d3F4eNhvBwcHy/0plVscHx8Xz798+XJ/zL179xbr8O233y7vk2+0I29n3Ffj4cOHxevFNj59+nS5P4n2ovY7qW26VunaZnac0odnn7sLjqIVePDgwVuRJpHbjRs3+miGKIloLoli9VoxGiqRxKr76qvzM5Xu3n3juJMEtm8D1+c67OeVVDE/ZwjanMSn//n69evdzZs3l5EZ+9M/Ln07hvj888+X/XVcT78jfj/6/lzHmDN2u4VZpAducXo6HuhOifC4DpHHJlEUN3Rd7tudRTHpwX/rc0V4U7b8PkNRFr879vMKUyO8r7/+ehmVRjiP/Um0Ru8didEi0WhO5wjPJD7uTB8pEBmlh6saGQH9TEPQP8Z1Vol0ppDErH8luqpBu5OodS9fviz25Y1Fdfm1IvF6+WeKsFbtGySag/w7EdXR1lXaC0nwlj8TbXKdob+lmScWvESKSvrXmujxwPMAkh7xykOeT32Q2N2+fbtP0TYJQouQfffdd/31S9BGjoH9/Z8PvDMqy3nroO/CxmCFridB55669qpTQSSQueAh2vHziNrA34sUWMeRVtMW2sB7pfYp0vMUFXOehVlCmkX6qPRW7/d+/dLi+h/9zuLWT/9gcfh7v7XY/ZVf6lO3mGJxHMe/D2Jax33jwARt5XNSw66QIk7p2K9tMTUmxezC4Eg+WKLfxdSUVqlrnmLmqW787l2WlpLG6nt3Z6lsfrwHLUzEEV6AyEERQT+P7H9+1j348592h/t/9taxj7//9+7aH/5+d+vL230kREf+WCf7umgQgVQtDmAQicZIiGiJqCZCu9ZNsWOky3U++eSTftpITHFpWxKplSOpONgQUZRaSkeJvjlPnxFdcj7vaYMiawZt+Pvx2aLXOmPeYMHL4AHmYdn/1f/rHv7tl9XjUrSXhPDT7tpfPeofuFqquSkYuUSQSSlJ2UitETvuTZvph1RqHuFztrH+xwjCgcCV2sDG/bk3ArtuP5lSWUQLsRLquyv1V+ZdCbSR4/nesR0cg+jxmf4R0u8mpvtmfljwMvqZ+CmyGxI7kVLd7unff9ld/Yu/6R+k9xXhLe+XHmQJET8TDTEFY1ODJIq2xgYgSmI0NOm5BH1wiCf3YkoN/2AwkCHBm/KdaAcbEe+zZ8+Kx7zrxGizXVjwAjx8PDxP/+5Pl/tIXXd/8std6sNb7nv+Hz92L/7rx+5mivIQva//+k+WI4MXFdLBMWi/UspIqUxMtauxhlXz6qZARIaoMeBAlBcHVti/SoqM2CnNH4PrbnpQybSDBS/AQ3fwmz/pRUzc/Yd/7Q4+/Y1zgnf/n7/vTv77tBc8uP7Hv9s9+pd/O5dCbQKNOJZ4/fp1/6oR5BwEJUZiq6S0OaSHJSGM92Ejyl0l0tMEYaXpiBGR3rolfJoUXYKUtvYdzHyw4AVevHjRpVHYc/uO//FuH+FFHvzl52/tQ/RIyTYpeJpeMUQcxIjQjlJUR3QzNJ8P8n4u/iEoOZGUojDNr5sKQlTqe1wH9WcaU2NWgoeADD2QPNiHv/1r3f1/+r5b+dr/+WN38r8/G3TjYGBhTGwiCMq6YqD5bDmaoDxE3oe3Sps/JESXtd+/ImIzbxzhBd4l0jj4dPOL+SJ4cQRzE9QiwpxNRV2/SGJ9rjElZiV46muaI5sWzhoq1h+LIqeC6EvEalNgGPGdahIw17+/ecPOwjMzjTEz4aPOGGNmggXPGDMbLHjGmNlgwTPGzAYLnjFmNljwGoe5Zyo/W3WVLs5dddlGjl/VKMCYi4IFrxFUZC+0LCNuIBItfqY8TqjONt9UScHn0Rod8nVdtYyioFbVgmdaxZUWjUDkFifNUic7ZqFEmVV+HlHg0KpmJTGzwJltwYLXEERjKguLzh9EbDFyi2AWEIVxSllZjOhkMhpBSIkmtVyjMa1gwWsI6lsxIIDoCiKx21QkJit1XVuL5wjKuLw4jmkRC15DEE2VhIYojlrZMSupqUThLEWNiK1tmEyLWPAaopbSbhIENY/oHM2ZbcGC1wisRpZHW+9DiBjQGALRtQCaVrHgNYJWH4t27qSe9KdpgfBV14KoQYTHdUqjwNivE2Va9EyLWPAaYsjRF5iCEiMw1pHNDT+nClVpnQywc7BpGQteQyBWQ6uP5YMWiF8+sXgqU6zgjWkNC54pwmTlks27LdRNy1jwzFuUUmGxs7PTGdMqtnifOfQLegDCzAULnjFmNtgtxRgzGyx4xpjZYMEzxswGC54xZjZY8LYE6myHqjDyY2UFv6plO+dN8dSLULUR3ZqntG/qdzFmFTxK2yAIDpZQ0XwT0cKePf45cyFTPS7nY+Ap3zvey+6pJn6auhLPFbwviSATl2/evNmLF9fFwgoQvydPnhTvo/rd/LsA51DLO8SY+YGZN5543CAq7h/zpIs2TwgOAjRmC0/Ely8ERISGkNTm63FtojIckCO149mP4QEgloiwjE2H4JjacRJ8Y4aw4G0xMQrLPe5q5KKF+F29enV0cjKiNdUUlLI1rbOB4HHtWMamKJOokesSzRqzCSx4ZhAEb4qQIVJ5WjsWhWpVNe5B5Jmvj/Hs2bPJgse1vL6GGcOC1xhKN1mOcUyIonsK59H/xb58JbMhiMDohxtC6SkuzJgLcB/1Fw7B0pNEdhxHBEofXzxHfX5Aql2ymxcSPPoLaY8t6E0JC15j8OAjVtg+3b59e/BYoidEQ+moTD018DAGxyEkY+IR17hA8GjXUApMuxAmBExpN+JH6oyz89RIjfYpPc7TYmNKWPAaQmkjAwhERIjfmOghROuYA3AvRIg+vaHz44irIjAtEq7BiNxhhQiTKEyRICDMCGFN7Erfk+NJd8ciUGOEBa8REBDSUdm4I0RKWcdET+cPpYQRRAzR4rpjURPRVRQp9cXFlDafUxenliBapOdK1TWCW5pewnfIV1RTP2CtPcZELHgNwENNuke0JANOHmzSwRs3bnT7+/vVKIypGjGlHYqGuA9Ch/ggqFNSRK7JRorM+aVpL/jrseUQQSJWtEnTTdQGIrd8xJh7RHHTGh/ap+kzFjxTZWGaIIlbcf/p6Wn/mh70xdQ/Z0ofFynV7X++fPnyuWsnkVlec+zcSBLiRRLIxVS4B+2l3at8NsQ655h54QivEWoDB5uOZsYqGYZQilkjj0IVGZI663uorEyRozGbxII3QxDPTQslC/6QUg5NcI4jsLySkiNupN2xPbRvaLEiY9bFtbRbhO3ajRnGgmeMmQ22hzLGzAYLnjFmNljwjDGzwYJnjJkNFrwtgXKwWIUwhVXs3WNZ1y/CFr5EtKYvMfT9Yxka29QyO7NdeB5eI1CGVXrY5YZCAX/uP1cTAOa8UZpG6VatLI2C/+hyrMnAlI6VzuNe+NexjzKxOK+OdjPBOJaqcTy1wEMuyrnLMqKe28vH47lePukAYVMJm763xJv3/P6mWmWZ9rHgNUKsNwW5mQwJhor2FRlJDLlO6SHnuBj5KIobm6RMxEeNL4KGsPDz8fHx6Hm0vbYGRe6wIrj+Klbu/I74TqX2YLGFSLr+dj5Y8BohFyge5NwJWBGdBE2RkCogxqoXJKLxHgjBmP0SwoGgSHwREURwbP2MdahVYdTWtEDsamakXCt+X7P9WPAahGgNkdn0Cl1RJImwKAWTiJGullCqGCNNBJLUc0zwEKOpa22IGLnm1yohGy1cZfh+lMC9fv26vw4pMp87upsPFrzGkFdddDIWRCwlkcFvTulq/nAjTIhZTHMlHghr3k8HCIYorSXBOZwrv75SyRv3QlBrIJql7xdB+NiHfx5CFi3hY1v4h0FrZ2BDD/RBltbRMNuNBa8BECCESYtZIxSrrNmg8xjYmOIOrGiO13VXDENIJL5cJw6gMGIr4RlrB8JEGxArfg9RBBVZ5qKsffnIcJ7axsXB13WGNm1hwWsErexVEzqinFK0onUpEEkiw3wEFQHMr8k5pHpEUHF9CkWQMZIiUsv7wYgo2V9b3LskLLX1adVW2hQjS907d0EGrsE9poiq8DSVeWDBawBNnyDiiSuR5eQOxervklAiipwf++ZytBA3xyAw9H0NDXZoER3dh3vSvzjUf1cSbU1pqbksc01FeYLjc7GLFu9qz9icQa9wNh8seA2hQYpSXxVRVnywEQfEighOIoJoEOXVRmxJeZlSos8QDBlyDkF7EFKiMI6fshYG15RdfSTuox1RjIgCNReR76ppMKJk8c59astS0lbSWhsGzQcLXoOUorM8neU9whMdjNlH5FaLeIgAEZkoDqS2mrw71B4NDExdRAcxHYoCS98xrnGh0d0o3LW5e/QBlu6lkVozHyx4jVGzUc/7oBCMml17LZ1VJUJp/xScGpqLjgWvIRAehK3Wj0eE9r4gNW5xCgerpZFq12p5PTI7L+x4bN47mgO4irhofp/nyZlNYsEzxswG20MZY2aDBc8YMxsseMaY2WDBM8bMBgteg1A5kM/Fm1IR8S5Ec1DKz1apPaVdqxy/7ndh6smQBbwxHqVtEObhUVYVnU9kgBn/nFPqSGFKdQQCxLVkSyVXEsSJErac2L7cLh5RKlVu6JzSdxGykpfRQJzqUvq9GBPxxONG4EGXeCEyvJcg1CycEBbqYwXnsy8/PlZX5K7BCMqYU3JetjW2yI+qReJ181rgEtFKXiYFU6zkjREWvEbgAZdPXW66WYvQELYobogk0VjJfEBEF2XEElEZgvvmJWUU+U8h97bLQXyj4OZW8tTTvi8rebOdWPAagahGDiRyCslT2jEkRAjflLpXuQQjPERlpUhS6WdeRYFxQUTrYwyJbU6MAGtW8oieBc9MxYLXIPnqYlMgEkI0EAfZQ42VeuEkgkAhdOrDqzG2vkbe35bXBCOsudlBPP6kYiU/ReiNERa8xtBABGKUR1ElNOLJ8RI5iQ39YbUOfhXbT7V4j/2L/MwrBqJqY7RQr61nEQVuSt1taY0OY4aw4DWGbNe1xsWQIJFGIlwcHzv31fFPpEdUla+RIadkojv6/OQ0XLsX58bVxxAr7sV6FCXU75dPPYkro+UGoiUr+ZqxpzE1LHgNobRUTsCIEeJSe+hlslmKgjQYkEdJ0SmZe0gIayntlFHcGqw0VkKGo7FvLreSV+Tq/juzCha8RlC0prSUDQfgq1ev9vtLXnhT0r1c7Eh1EZGaeWgNIjzaVBIgRLPUFgSs1BdZ65fLreSjfb0xU7DgNQLpYZySATzstdFW0sOa6WUJxAQByteE2AS1CJAUmWiydL/SeheykkeY8xFbY6ZgwWuEWiSjhz6PikgX13FAfhexq9nP67qla8dlIKfifjuzLha8LWVoycN1YFrJ0FQYlZvFwYsIEWo+iZn5e0PLTuaLEBnzrriW1mwNEmRPVTE1LHjGmNlgeyhjzGyw4BljZoMFzxgzGyx4xpjZYMHbEqirZVrI+4ZJv6tMaDbmIuF5eI3AfDTcR4A5cdHJmCoJ3jMXLq+8YF7ckIUSc92iKUDt2GjPjnGBS7pMi1jwGkGiRME8wqe1H6ixHTLVpKyLYxDJEvmcNQwK8oVwiBzjmhTGtIoFrxEUuRGxUTbGe4QollmptCsv41ql7hRDggjih0GBxc5sA+7Dawj1nUn8SC2j4NGPhyBucqlCrjXFDt6YFnCE1wgIj0w5gUgOAYzW6vSrleyZ6P8ruY8AqXIe1UUQVS97aLYFC14jyBCTaAuxo+geoRpLNcdGbofqThFU7uUIz2wLFrxGiJ5y9NWNOYlwzCqpbS5qGhCZIqrGtIIFryHoo3vx4sXyfVwTAlGK/neaPhKpLcQNUfDUF4ioevqJ2SYseFsCIgUSrrgehZBfXW0aC4KoQQ8iO4ud2TYseA1BZFZbOWwT67MSJTJfj1XM7ClnthELnjmHHYbNNuN5eMaY2WDH4y3B9ubGjGPBM8bMBqe0xpjZYMEzxswGC54xZjZY8Iwxs8GCtyUwShtLzabAZGUMP2vX08hvhCqM2jnGXHQseA2Ci0kuRrzPLaAoN+PYfNO5CN7Dhw/PnYOg4cSC6eeVK1f6n2MVB5/n59SQCHOdS5cuLV9v3LhRrQzJz9E2ZlVvzBQseA0y1eTz5cuX3bNnz85tnFuK3ABBQYzwv8Nn7/T0tDckQPSmwLk4rMT3tJNSNa7FNdkoX0NQS9ZV7OdY3GF41Xn7+/v9Z5s0NzUzZGGagz9bEoRz+5IoLKb8OTmGY4Fr7O3tLT/j/cHBwVvn7O7uLg4PD/uN4+M5+f117fx9zp07dxa3bt06t4/7c68a169fX6QodmHMujjCM0uo0iDKixGg3mMVhQFpzUGFaA13FnnnaV2NUkTG9Ui3idoi2NXXfPxkbcV6Hsasi80DGkNigC/emBMxgwuyjZoCgqN0E3FjdTT66/hZLi21fjTuhSgKxA4bKlLcuPYGgkY/Im3PxVPnkApzvM7hnnwPUm1bVpl3gdKy0/TqAsxGUP8dwhHXs0AU6OhfhEpBjkVEohCBojD548XrAIIko1EEMDcHRdyiA7PuXVvKkXM4BgHVimtDLsqK8iTufAcE13XC5h15RYRH/uL/kxogLtyDUOVRVYlVlmgUCBIDHqDBjkjuyceoKpGX7kM78wGJuHRk/hnnRoGL54gYqUoAjVmREwSP/8v2OnOh0cI9pJcIC47EGj0dE738OrU5dlPPR7DiPXkfXZQ5JhfJIXt5BC+ew/UQtZjSxnMteGZNXpIC3VmYCw0jnYxepj6sc/uPj4/7EVNGN0ujtIyCsk+bRlgZ7UwC9dYorTg9Pe0/K21JaM+dkyKv4jVyuN+U49TuOBpba6cxK3JPEZ65wBDRMZctH6QgAkqitxxdzSHqqq1fAbUlHImmGDioRVFxP6mml3E0jXD08c7OzlFSPvfjXXBqovK+OvI1YjpEaTFwYy4oJ2idpqVQHPlVZ0z3cxFl5LUGYogIL+wfa9rgiP/s8J/0Py3/h592pmmIuLxotjFFrqQI76SvtEg/kNLaAqNxLHbGFHmM2PHDjvacRXl0xrgvzxizLZyk7ZoEb1lLexblrWaoZowxF5v7Ejs4Zx6QPsDozKmtMWYbeJQ07XHcsVM6KqW3FEoedsYY0ybPk9hdzXfW7KFudJ6QbIxpk6O0FV1ri4JHf96ZOjq9Nca0BGnstbMxibcYNABNJ91JL190b0Y6jDHmooLA3T3TrCo73QRSn95eermXtpudMcZcLMhE79WiusgkwRNB+D7rbClljPlwqFji4RShEysJXiSJ32H3ZiSXhQn2zjZPWjbGbJpXZxsDqZgmMgJ71K3B/wM1ygUcfiVCaAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}

const MemoConThreeImgOne = React.memo(ConThreeImgOne);
export default MemoConThreeImgOne;
