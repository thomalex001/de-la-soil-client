import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
darkgreen: '#224319',
mediumgreen: '#b6cec2',
lightgreen: '#cae0ce',
verylightgreen: '#dae7de',
greyblue: '#6e95c3',
darkblue:'#0e456a',
lightgrey: '#676767',
  }
}

export default function Theme({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}