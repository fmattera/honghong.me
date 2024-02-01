import React from 'react'
import TextareaAutosize, {
  type TextareaAutosizeProps
} from 'react-textarea-autosize'

import cn from '@/utils/cn'

type TextareaProps = TextareaAutosizeProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <TextareaAutosize
        className={cn(
          'flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...rest}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }