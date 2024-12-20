import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"


const SectionBorder = (props:HTMLAttributes<HTMLDivElement>) => {
  const {className,...otherProps} = props
  return (
    <div className={twMerge('border-l border-r border-[var(--color-border)]',className)} {...otherProps} />
  )
}

export default SectionBorder