interface Link {
  readonly id: number,
  readonly to: string,
  readonly text: string
}
const links: ReadonlyArray<Link> = [
  { id: 0, to: 'rgb', text: 'RGB' },
  { id: 1, to: 'hex', text: 'HEX' },
  { id: 2, to: '#', text: 'new color spaces soon' },
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

const style = `
background-color: rgb(${randR}, ${randG}, ${randB});
color: ${isColorBright ? '#000000' : '#FFFFFF'}
`.replace(/\n/, '')
