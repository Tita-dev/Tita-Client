import * as React from "react";

function ConThreeImgTwo(props) {
  return (
    <svg width="50vh" height="25vh" viewBox="0 0 388 135" fill="none" {...props}>
      <g filter="url(#prefix__filter4_d)">
        <rect
          x={52.636}
          y={51.33}
          width={321.156}
          height={68.671}
          rx={15}
          fill="url(#prefix__pattern4)"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#prefix__filter4_d)">
        <path
          d="M75.097 24.039c3.873 7.505 4.989 16.29 3.226 24.55-2.536 11.88-9.6 22.109-25.774 31.745C37.77 89.138 14.077 70.894 9.78 51.04 5.483 31.188 17.612 11.715 36.87 7.547c15.863-3.433 30.006.564 38.227 16.492z"
          fill="#F3E7B9"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter4_d"
          x={46.636}
          y={46.33}
          width={341.156}
          height={88.671}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={4} dy={5} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="prefix__filter4_d"
          x={0.915}
          y={6.408}
          width={78.221}
          height={84.2}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-4} dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <pattern
          id="prefix__pattern4"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image4"
            transform="matrix(.00278 0 0 .013 0 0)"
          />
        </pattern>
        <image
          id="prefix__image4"
          width={360}
          height={77}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

const MemoConThreeImgTwo = React.memo(ConThreeImgTwo);
export default MemoConThreeImgTwo;
