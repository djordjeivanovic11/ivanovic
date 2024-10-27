import { IconType } from 'react-icons';


export interface NavbarItemProps {
    href: string;
    text?: string;
    icon?: IconType;
    onClick?: () => void;
    className?: string;
  }

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}
