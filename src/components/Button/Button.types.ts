export interface ButtonProps {
    label: string,
    backgroundColor: string,
    size: 'sm' | 'md' | 'lg',
    handleClick: () => void,
}