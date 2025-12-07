document.addEventListener('DOMContentLoaded', function() {
    const albumAdatok = {
        raji: {
            cim: "Raji Programok",
            kepek: Array.from({length: 7}, (_, i) => ({
                src: `img/raji/raji_${i + 1}.jpeg`,
                caption: `Raji Program - Kép ${i + 1}`
            }))
        },
        kirandulas: {
            cim: "Kirándulások",
            kepek: Array.from({length: 14}, (_, i) => ({
                src: `img/kirandulas/kirandulas_${i + 1}.jpeg`,
                caption: `Kirándulás - Kép ${i + 1}`
            }))
        },
        tabor: {
            cim: "Tábori Élet",
            kepek: Array.from({length: 9}, (_, i) => ({
                src: `img/tabor/tabor_${i + 1}.jpeg`,
                caption: `Tábor - Kép ${i + 1}`
            }))
        }
    };

    const mappaValaszto = document.getElementById('mappaValaszto');
    const galeriaNezet = document.getElementById('galeriaNezet');
    const kiskepKontener = document.getElementById('kiskepKontener');
    const visszaGomb = document.getElementById('visszaMappakhoz');
    const galeriaCim = document.getElementById('galeriaCim');

    const lightbox = document.getElementById('lightbox');
    const nagyKep = document.getElementById('nagyKep');
    const lightboxBezaras = document.getElementById('lightboxBezaras');
    const elozoGomb = document.getElementById('lightboxElőző');
    const kovetkezoGomb = document.getElementById('lightboxKövetkező');
    const lightboxCimke = document.getElementById('lightboxCimke');

    const mappaKartyák = document.querySelectorAll('.mappa-kartya');

    let aktualisAlbum = [];
    let aktualisIndex = 0;


    /**
     * Váltás a Mappa Nézet és a Galéria Nézet között
     */
    function nezetValtas(galeriaMegjelenik) {
        if (galeriaMegjelenik) {
            mappaValaszto.classList.add('rejtett');
            galeriaNezet.classList.remove('rejtett');
        } else {
            galeriaNezet.classList.add('rejtett');
            mappaValaszto.classList.remove('rejtett');
        }
    }

    /**
     * Galéria feltöltése
     * @param {string} albumNev - a kiválasztott album neve
     */
    function albumMegnyitas(albumNev) {
        const adatok = albumAdatok[albumNev];
        if (!adatok) return;

        aktualisAlbum = adatok.kepek;
        galeriaCim.textContent = adatok.cim;
        
        let htmlContent = '';
        
        adatok.kepek.forEach((kep, index) => {
            htmlContent += `<img src="${kep.src}" alt="${kep.caption}" data-index="${index}" class="kiskep">`;
        });

        kiskepKontener.innerHTML = htmlContent;
        nezetValtas(true);

        kiskepKontener.querySelectorAll('.kiskep').forEach(kiskep => {
            kiskep.addEventListener('click', kiskepKattintasKezelo);
        });
    }

    function lightboxMegnyitas(index) {
        if (index < 0 || index >= aktualisAlbum.length) {
            if (index < 0) index = aktualisAlbum.length - 1;
            else index = 0;
        }

        aktualisIndex = index;
        const kep = aktualisAlbum[aktualisIndex];
        
        nagyKep.src = kep.src;
        lightboxCimke.textContent = kep.caption;
        lightbox.classList.remove('rejtett');
    }

    // --- ESEMÉNYKEZELŐK ---

    mappaKartyák.forEach(kartya => {
        kartya.addEventListener('click', function() {
            const album = kartya.getAttribute('data-album');
            albumMegnyitas(album);
        });
    });


    visszaGomb.addEventListener('click', function() {
        nezetValtas(false);
    });


    function kiskepKattintasKezelo(event) {
        const index = parseInt(event.target.getAttribute('data-index'));
        lightboxMegnyitas(index);
    }
    
    lightboxBezaras.addEventListener('click', function() {
        lightbox.classList.add('rejtett');
    });

    elozoGomb.addEventListener('click', function() {
        lightboxMegnyitas(aktualisIndex - 1);
    });

    kovetkezoGomb.addEventListener('click', function() {
        lightboxMegnyitas(aktualisIndex + 1);
    });

    document.addEventListener('keydown', function(event) {
        if (!lightbox.classList.contains('rejtett')) {
            if (event.key === 'ArrowRight' || event.key === ' ') { 
                lightboxMegnyitas(aktualisIndex + 1);
                event.preventDefault();
            } 
            
            else if (event.key === 'ArrowLeft') {
                lightboxMegnyitas(aktualisIndex - 1);
                event.preventDefault();
            } 
            
            else if (event.key === 'Escape') {
                lightbox.classList.add('rejtett');
            }
        }
    });
});

