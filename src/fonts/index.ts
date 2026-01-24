import localFont from 'next/font/local'

export const roboto = localFont({
  src: [
    {
      path: './roboto/woff2/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './roboto/woff2/Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const robotoCondensed = localFont({
  src: [
    {
      path: './roboto-condensed/woff2/RobotoCondensed-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './roboto-condensed/woff2/RobotoCondensed-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})
