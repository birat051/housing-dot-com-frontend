/** @type {import('tailwindcss').Config} */

const colors = {
    Primary: '#7123D6',
    Secondary: '#FCDD00',
};

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    variants: {
        scale: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    theme: {
        extend: {
            borderRadius: {
                DEFAULT: '0.25rem',
                md: '0.375rem',
                lg: '0.5rem',
                full: '9999px',
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            spacing: {
                0.5: '0.125rem',
                1: '0.25rem',
                2: '0.5rem',
                3: '0.75rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
                11: '2.75rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
            },
        },
        screens: {
            xxs: '360px',
            xs: '748px',
            sm: '1024px',
            md: '1280px',
            lg: '1440px',
            xl: '1920px',
        },
    },
    colors: {
        ...colors,
    },
    plugins: [],
    prefix: 'housing-',
    fontWeight: {
        'inter-0.5': '300',
        'inter-0': '400',
        'inter-1': '500',
        'inter-2': '600',
        'inter-3': '700',
        'inter-4': '800',
    },
    fontFamily: {
        inter: 'Inter',
    },
};
