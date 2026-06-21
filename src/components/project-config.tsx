export interface ProjectProps {
    img: string;
    label: string;
    desc: string;
}

export interface ProjectConfigProps {
     item: ProjectProps[];
}


export const ProjectConfig: ProjectConfigProps = {
    item: [
        { img: '/src/assets/45.avif', label: 'Govermance for Tomorrow', desc: 'Creating new policies within the fashion industry'},
        { img: '/src/assets/45.avif', label: 'Govermance for Tomorrow', desc: 'Creating new policies within the fashion industry'},
        { img: '/src/assets/45.avif', label: 'Govermance for Tomorrow', desc: 'Creating new policies within the fashion industry'},
        { img: '/src/assets/45.avif', label: 'Govermance for Tomorrow', desc: 'Creating new policies within the fashion industry'},
        { img: '/src/assets/45.avif', label: 'Govermance for Tomorrow', desc: 'Creating new policies within the fashion industry'},
        { img: '/src/assets/45.avif', label: 'Govermance for Tomorrow', desc: 'Creating new policies within the fashion industry'},
    ]
}