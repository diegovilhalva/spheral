import { cva } from "class-variance-authority"
import { HTMLAttributes } from "react";


export type ButtonProps  = {
     variant: 'primary' | 'secondary' | 'tertiary' ;
     block?:boolean
    } & HTMLAttributes<HTMLButtonElement>

const classes = cva('text-xs  tracking-widest uppercase font-bold h-10 px-6 rounded-lg', {
    variants: {
        block:{
            true:"w-full"
        },
        variant: {
            primary: "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]",
            secondary: "",
            tertiary: "bg-gray-800 text-gray-200"
        },
    },

    defaultVariants: {
        variant: "primary",
        block:false
    },
});


export const Button = (props:ButtonProps) => {
    const {className = '',children,...otherProps} = props
    return (
        <button className={classes({...otherProps,className})}>
            {children}
        </button>
    )
}

