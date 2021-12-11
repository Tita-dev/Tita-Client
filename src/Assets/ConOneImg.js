import * as React from "react";
function ConOneImg(props) {
  return (
    <svg width={600} height={573} viewBox="0 0 600 573" fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M559 283c7.45 181-19 242.5-246.5 252C194 539.948 67 418.862 67 283S177.138 37 313 37s238.673 68 246 246z"
          fill="#F3E7B9"
        />
      </g>
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M188.936 438.848c1.498 36.676-23.582 49.113-49.569 51.063C115.584 491.695 90 466.378 90 438.848S112.148 389 139.468 389c27.32 0 47.995 13.779 49.468 49.848z"
          fill="#A7CBEA"
        />
      </g>
      <path
        transform="rotate(8.723 73.4 0)"
        fill="url(#prefix__pattern0)"
        d="M73.4 0h623.719v483.979H73.4z"
      />
      <path
        transform="rotate(8.723 73.4 0)"
        fill="url(#prefix__pattern0)"
        d="M73.4 0h623.719v483.979H73.4z"
      />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0"
            transform="matrix(.00024 0 0 .00024 0 0)"
          />
        </pattern>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0"
            transform="matrix(.00024 0 0 .00024 0 0)"
          />
        </pattern>
        <filter
          id="prefix__filter0_d"
          x={67}
          y={37}
          width={501.066}
          height={506.147}
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
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="prefix__filter1_d"
          x={90}
          y={389}
          width={107}
          height={109}
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
        <image
          id="prefix__image0"
          width={4096}
          height={3184}
        />
      </defs>
    </svg>
  );
}
const MemoConOneImg = React.memo(ConOneImg);
export default MemoConOneImg;