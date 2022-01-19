export type color =
  | 'white'
  | 'light'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'povo'

const colorsBg = {
  white: 'bg-white text-black hover:bg-gray-50',
  light: 'bg-gray-300 text-white hover:bg-gray-400',
  success: 'bg-green-500 text-white hover:bg-green-600',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
  info: 'bg-blue-500 text-white hover:bg-blue-600',
  povo: 'bg-povo text-gray-600 hover:bg-yellow-100'
}

export const getButtonColor = (color: color) => {
  const base = [colorsBg[color]]
  return base
}
