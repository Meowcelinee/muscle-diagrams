import dorsalKey from './dorsal.js';
import lateralKey from './lateral.js';
import heartKey from './heart.js';

export const getKeys = () => {
    const title = document.title.split(' ')[0].toLowerCase();

    if (title.includes('dorsal')) return dorsalKey;

    if (title.includes('lateral')) return lateralKey;

    return heartKey;
};
