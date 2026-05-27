const heroContainer = document.querySelector('.heroSec')

export const hero = () => {
    if(!heroContainer){
        return;
    }

    const heroTemplate = () => {
        return `
             <div class="hero hero__img__overlay">
        <div class="hero__titel">At lege er at leve</div>
        <div class="hero__text">Her hos os har vi et stort udvalg af legetøj i høj kvalitet</div>
    </div>
            
        `
    }

    heroContainer.insertAdjacentHTML('beforeend', heroTemplate())
}