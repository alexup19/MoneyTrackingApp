import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Ellipse,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

import {verticalScale, scale} from 'utils/scaling';

export const MoneyControlIllustration = (props: SvgProps) => (
  <Svg
    width={scale(252)}
    height={verticalScale(258)}
    fill="none"
    viewBox="0 0 252 258"
    {...props}>
    <Path
      fill="url(#a)"
      d="M56.377 153.875c-4.322 13.444-33.228 37.316-51.136 50.581-2.391 1.771-2.147 5.45.48 6.846L44.675 232l34.663 19.516c6.47 3.642 14.655 1.607 19.124-4.322 14.439-19.154 41.305-48.715 73.985-67.452 39.795-22.816-25.425-66.546-63.009-85.56 13.265 1.327 21.224 12.602 31.173 13.265 9.949.664 15.255-5.305 13.265-17.244-1.99-11.939-37.806-38.469-55.713-32.5C72.958 66.99 53.723 91.53 51.07 102.143c-2.653 10.612 11.276 33.162 5.306 51.733Z"
    />
    <Path
      fill="#EEE5FF"
      d="M242.793 171.055c-33.14 11.626-59.011 40.302-66.42 49.382C152.478 131.259 85.867 87.674 55.549 77.03c15.753-10.401 48.322-34.92 71.578-58.319 23.218 50.771 101.375 134.887 115.666 152.344Z"
    />
    <Path
      fill="url(#b)"
      fillOpacity={0.24}
      d="M243.701 171.055c-33.139 11.626-59.01 40.302-66.419 49.382C153.387 131.259 86.776 87.674 56.458 77.03c15.753-10.401 48.322-34.92 71.578-58.319 23.217 50.771 101.375 134.887 115.665 152.344Z"
      style={{
        mixBlendMode: 'multiply',
      }}
    />
    <Path
      fill="url(#c)"
      fillOpacity={0.08}
      d="M242.793 171.055c-33.14 11.626-59.011 40.302-66.42 49.382C152.478 131.259 85.867 87.674 55.549 77.03c15.753-10.401 48.322-34.92 71.578-58.319 23.218 50.771 101.375 134.887 115.666 152.344Z"
      style={{
        mixBlendMode: 'multiply',
      }}
    />
    <Path
      fill="#D3BDFF"
      d="M209.588 177.752c-35.02 2.653-67.431 23.656-76.937 30.51 0-92.325-53.06-151.664-79.59-169.793 17.907-5.97 55.713-21.224 84.232-37.805 9.286 55.05 63.01 156.527 72.295 177.088Z"
    />
    <Ellipse
      cx={138.35}
      cy={103.371}
      fill="#7F3DFF"
      rx={13.935}
      ry={30.51}
      transform="rotate(-26.98 138.35 103.371)"
    />
    <Path
      fill="url(#d)"
      fillOpacity={0.64}
      d="M209.588 177.752c-35.02 2.653-67.431 23.656-76.937 30.51 0-92.325-53.06-151.664-79.59-169.793 17.907-5.97 55.713-21.224 84.232-37.805 9.286 55.05 63.01 156.527 72.295 177.088Z"
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <Path
      fill="url(#e)"
      fillOpacity={0.64}
      d="M209.588 177.752c-35.02 2.653-67.431 23.656-76.937 30.51 0-92.325-53.06-151.664-79.59-169.793 17.907-5.97 55.713-21.224 84.232-37.805 9.286 55.05 63.01 156.527 72.295 177.088Z"
      style={{
        mixBlendMode: 'soft-light',
      }}
    />
    <Path
      fill="#FEE3C8"
      d="M154.658 47.006c-10.517.482-22.814 12.753-30.05 21.798-1.187 1.483-1.78 2.225-2.349 3.362-.434.869-.892 2.237-1.068 3.192-.23 1.25-.202 2.245-.144 4.233.445 15.407 4.873 49.679 44.961 64.61 2.108.785 3.161 1.178 4.709 1.331 1.165.116 2.958-.016 4.094-.3 1.508-.377 2.572-.961 4.698-2.131 10.017-5.508 28.03-16.605 27.489-24.922-.747-11.503-36.638-71.892-52.34-71.173Z"
    />
    <Path
      fill="url(#f)"
      fillOpacity={0.64}
      d="M154.658 47.006c-10.517.482-22.814 12.753-30.05 21.798-1.188 1.484-1.781 2.226-2.35 3.364-.434.868-.892 2.237-1.068 3.193-.23 1.25-.201 2.243-.144 4.23.44 15.124 4.778 48.318 43.649 64.675 2.204.927 3.306 1.39 4.924 1.599 1.225.157 3.095.059 4.297-.225 1.588-.376 2.721-1 4.989-2.247 10.345-5.69 28.63-16.952 28.093-25.214-.747-11.503-36.638-71.892-52.34-71.173Z"
      style={{
        mixBlendMode: 'multiply',
      }}
    />
    <G
      filter="url(#g)"
      style={{
        mixBlendMode: 'overlay',
      }}>
      <Path
        fill="url(#h)"
        fillOpacity={0.4}
        d="M154.658 47.006c-10.517.482-22.814 12.753-30.05 21.798-1.163 1.454-1.745 2.18-2.319 3.338-.431.87-.898 2.293-1.066 3.25-.224 1.272-.185 2.25-.106 4.205.711 17.656 5.988 48.766 43.56 64.644 2.215.936 3.323 1.404 4.945 1.614 1.229.16 3.098.063 4.304-.222 1.591-.376 2.729-1.002 5.005-2.254 10.351-5.695 28.604-16.945 28.067-25.2-.747-11.503-36.638-71.892-52.34-71.173Z"
      />
    </G>
    <Path
      stroke="#FFCF99"
      strokeLinecap="round"
      strokeWidth={2}
      d="M198.01 104c-7.923 9.018-27.015 27.844-40 31M184.01 86c-8.517 9.018-29.041 27.844-43 31M170.01 65c-8.121 9.018-27.69 27.844-41 31"
    />
    <G filter="url(#i)">
      <Path
        fill="#FEE3C8"
        d="M52.376 154.035c-4.775 14.857-30.9 39.026-47.703 50.965l50.356-23.772 28.19-21.634c15.884-12.19 18.764-35.001 6.407-50.756-2.09-2.664-1.154-6.579 1.914-8.011l13.897-6.485c13.265 1.326 21.224 12.602 31.173 13.265 9.948.663 15.254-5.306 13.265-17.245-1.99-11.938-37.806-38.468-55.714-32.499-25.203 9.285-44.438 33.826-47.09 44.438-2.654 10.612 11.275 33.163 5.305 51.734Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={170.456}
        x2={99.488}
        y1={88.876}
        y2={175.762}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F9CC9F" />
        <Stop offset={1} stopColor="#FEE3C8" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={64.173}
        x2={241.673}
        y1={41}
        y2={211}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#6F20FF" stopOpacity={0} />
        <Stop offset={0} stopColor="#6F20FF" stopOpacity={0} />
        <Stop offset={0.385} stopColor="#5B18D3" stopOpacity={0.64} />
        <Stop offset={0.656} stopColor="#421396" stopOpacity={0.64} />
        <Stop offset={1} stopColor="#6E20FF" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={72.294}
        x2={230.812}
        y1={64.999}
        y2={187.701}
        gradientUnits="userSpaceOnUse">
        <Stop stopOpacity={0.66} />
        <Stop offset={0.651} stopOpacity={0.67} />
        <Stop offset={1} stopOpacity={0.04} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={66.673}
        x2={209.673}
        y1={29}
        y2={174}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#5600FF" />
        <Stop offset={1} stopColor="#5600FF" stopOpacity={0.64} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={86.223}
        x2={171.119}
        y1={104.794}
        y2={98.162}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={0.349} stopColor="#E3E3E3" stopOpacity={0.64} />
        <Stop offset={0.583} stopColor="#636363" stopOpacity={0.32} />
        <Stop offset={0.979} stopColor="#fff" stopOpacity={0.32} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={191.691}
        x2={137.167}
        y1={81.195}
        y2={128.83}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F9DB9F" />
        <Stop offset={0.531} stopColor="#FEE3C8" />
        <Stop offset={1} stopColor="#F9DB9F" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={191.296}
        x2={136.672}
        y1={69.293}
        y2={125.358}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.964} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
