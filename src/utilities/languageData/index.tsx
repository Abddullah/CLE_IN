import { t } from 'i18next';

export const languageData = [

    {
        locale: 'en',
        translation: {
            slide1Para: `Navigate effortlessly through our intuitive interface to discover a wide range of products. With detailed descriptions, high-quality images, and user reviews, finding exactly what you need has never been easier.`,
        }
    },
    {
        locale: 'cz',
        translation: {
            slide1Para: `Procházejte bez námahy naším intuitivním rozhraním a objevujte širokou škálu produktů. Díky podrobným popisům, vysoce kvalitním obrázkům a uživatelským recenzím nebylo nikdy snazší najít přesně to, co potřebujete.`,
        }
    },

];

export type languageProps = {
    id: string;
    name: string;
    code: string;
};

export const appLanguages: languageProps[] = [
    {
        id: '0',
        name: 'English',
        code: 'en'
    },
    {
        id: '1',
        name: 'Czech',
        code: 'cz'
    },
];
