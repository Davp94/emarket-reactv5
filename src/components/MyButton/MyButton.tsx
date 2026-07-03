import styles from './MyButton.module.css';

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'primaryContainer' | 'secondaryContainer' | 'outline';
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
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        className
    ].filter(Boolean).join(' '); //classname = "button primary sm"
    //view
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}