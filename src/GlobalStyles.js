import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
    --primary: #284b63;
    --secondary: #d9d9d9;
    --sand: #ffffff;
    --checked: #353535;
    }

    * {
        box-sizing: border-box;
    }

    body {
        height: 100%;
        margin: 0;
        background: var(--sand);
        color:var(--checked);
        font-family:sans-serif;
    }
`
