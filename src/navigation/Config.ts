export interface BaseLink {
    id: string;
    label: string;
    href: string;
}

export interface NavConfigProps{
    nav: BaseLink[];
}

export const NavConfig: NavConfigProps = {
    nav: [
        { id: 'projects', label: 'Projects', href: '/projects' },
        { id: 'studio', label: 'Studio', href: '/studio' },
        { id: 'about', label: 'About', href: '/about' }
    ]
};
