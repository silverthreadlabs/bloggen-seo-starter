

const Code = ({children}) => {
    return (
        <code className='bg-canvas-bg-active border-canvas-line text-canvas-text-contrast rounded-md border px-2 py-1 font-mono text-sm'>
            {children}
        </code>
    )
}

export default Code