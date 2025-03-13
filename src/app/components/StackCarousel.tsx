'use client'

import { LogoCarousel } from '@/components/ui/logo-carousel'
import { SVGProps } from 'react'

function ReactLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.23174 23 20.46348' {...props}>
      <title>React Logo</title>
      <circle cx='0' cy='0' r='2.05' fill='#61dafb' />
      <g stroke='#61dafb' strokeWidth='1' fill='none'>
        <ellipse rx='11' ry='4.2' />
        <ellipse rx='11' ry='4.2' transform='rotate(60)' />
        <ellipse rx='11' ry='4.2' transform='rotate(120)' />
      </g>
    </svg>
  )
}

function TypescriptLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill='none' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect fill='#3178c6' height='512' rx='50' width='512' />
      <rect fill='#3178c6' height='512' rx='50' width='512' />
      <path
        clipRule='evenodd'
        d='m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z'
        fill='#fff'
        fillRule='evenodd'
      />
    </svg>
  )
}

function TailwindLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 54 33' {...props}>
      <g clipPath='url(#prefix__clip0)'>
        <path
          fill='#38bdf8'
          fillRule='evenodd'
          d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path fill='#fff' d='M0 0h54v32.4H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

function ViteLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 410 404' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z'
        fill='url(#paint0_linear)'
      />
      <path
        d='M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z'
        fill='url(#paint1_linear)'
      />
      <defs>
        <linearGradient id='paint0_linear' x1='6.00017' y1='32.9999' x2='235' y2='344' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#41D1FF' />
          <stop offset='1' stopColor='#BD34FE' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='194.651'
          y1='8.81818'
          x2='236.076'
          y2='292.989'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFEA83' />
          <stop offset='0.0833333' stopColor='#FFDD35' />
          <stop offset='1' stopColor='#FFA800' />
        </linearGradient>
      </defs>
    </svg>
  )
}

function NextLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      {...props}
    >
      <g transform='translate(.722 .64) scale(6.375)'>
        <circle cx='40' cy='40' r='40' />
        <path
          d='M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z'
          fill='url(#prefix___Linear1)'
          fillRule='nonzero'
        />
        <path fill='url(#prefix___Linear2)' d='M51.111 24h5.333v32h-5.333z' />
      </g>
      <defs>
        <linearGradient
          id='prefix___Linear1'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='rotate(51.103 -29.93 76.555) scale(25.1269)'
        >
          <stop offset='0' stopColor='#fff' />
          <stop offset='1' stopColor='#fff' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='prefix___Linear2'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='rotate(90.218 14.934 38.787) scale(23.50017)'
        >
          <stop offset='0' stopColor='#fff' />
          <stop offset='1' stopColor='#fff' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

function PayloadCmsLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <title>Payload CMS</title>
      <path d='M11.068 0 22.08 6.625v12.573L13.787 24V11.427L2.769 4.808 11.068 0ZM1.92 18.302l8.31-4.812v9.812l-8.31-5Z' />
    </svg>
  )
}

export default function StackCarousel() {
  const stack = [
    {
      name: 'React',
      id: 1,
      img: ReactLogo
    },
    {
      name: 'TypeScript',
      id: 2,
      img: TypescriptLogo
    },
    {
      name: 'Tailwind',
      id: 3,
      img: TailwindLogo
    },
    {
      name: 'Vite',
      id: 4,
      img: ViteLogo
    },
    {
      name: 'Next',
      id: 5,
      img: NextLogo
    },
    {
      name: 'Payload CMS',
      id: 6,
      img: PayloadCmsLogo
    }
  ]

  return <LogoCarousel columnCount={4} logos={stack} />
}
