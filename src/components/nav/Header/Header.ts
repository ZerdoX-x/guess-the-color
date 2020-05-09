import { isActive, url } from '@sveltech/routify'
interface Link {
  readonly to: string,
  readonly text: string
}
const links: ReadonlyArray<Link> = [
  { to: '/rgb', text: 'RGB' },
  { to: '/hex', text: 'HEX' },
  { to: '/', text: 'new color spaces soon. maybe..' },
]

interface Color {
  r: number,
  g: number,
  b: number
}
const colors: Array<Color> = []
let r: number = 0
let g: number = 0
let b: number = 0

do {
  if (r + g === 255 * 2) // if r and g are both full
    [r, g, b] = [0, 0, b + 51]
  else if (r === 255) // if r value is full
    [r, g] = [0, g + 51]
  else
    r += 51
  colors.push({r, g, b})
} while (colors.length < 216)


const randColorIdx: number = Math.floor(Math.random() * colors.length)
const { r: randR, b: randB, g: randG }: Color = colors[randColorIdx]

const luma: number = 0.2126 * randR + 0.7152 * randG + 0.0722 * randB
let isColorBright: boolean = luma > 120

const vars = `
--bgc:rgb(${randR}, ${randG}, ${randB});
--c:${isColorBright ? '#000000' : '#FFFFFF'}
`.replace(/[\n\r]/g, '')
