import { StylesConfig } from "react-select"

export const REACT_SELECT_DESKTOP_STYLES: StylesConfig = {
    placeholder(base) {
        return ({ ...base, color: "#d1d5db" })
    },
    singleValue(base) {
        return ({ ...base, color: "white" })
    },
    control(base) {
        return ({
            ...base,
            color: "white",
            boxShadow: 'none',
            border: "1px solid #d1d5db",
            '&:hover': {
                border: '1px solid white'
            },
            background: "#1E1E1E",
            borderRadius: "20px",
            paddingLeft: "1.8rem",
            paddingBlock: "0.1rem",
            outline: 'none',
        })
    },
    menu(base) {
        return ({
            ...base,
            background: "#1E1E1E",

            color: "white",
            borderRadius: "12px"
        })
    },
    option(base) {
        return ({
            ...base,
            background: "black",
            // color: "#d1d5db",
            color: "#d1d5db",
            ":hover": {
                color: "white",
            },
            cursor: "pointer"
        })
    },
}

export const REACT_SELECT_MOBILE_STYLES: StylesConfig = {
    placeholder(base) {
        return ({
            ...base,
            fontSize: "1.8rem",
            color: "#d1d5db"
        })
    },
    singleValue(base) {
        return ({ ...base, color: "white" })
    },
    control(base) {
        return ({
            ...base,
            color: "white",
            boxShadow: 'none',
            border: "1px solid #d1d5db",
            '&:hover': {
                border: '1px solid white'
            },
            background: "#1E1E1E",
            borderRadius: "50px",
            paddingLeft: "1.8rem",
            paddingBlock: "1.5rem",
            outline: 'none',
        })
    },
    menu(base) {
        return ({
            ...base,
            background: "#1E1E1E",

            color: "white",
            borderRadius: "12px"
        })
    },
    option(base) {
        return ({
            ...base,
            background: "black",
            // color: "#d1d5db",
            color: "#d1d5db",
            ":hover": {
                color: "white",
            },
            cursor: "pointer"
        })
    },
}
