interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export const MyButton : React.FC<MyButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    //logic
    //TODO complete when add styles
    const classes = [
        className
    ];
    //view
    return (
        <button className={className} {...props}>
            {children}
        </button>
    )
}