import { ISources } from '../../interface/IApi';
import './sources.css';

class Sources {
    draw(data: Array<ISources>) {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const sourcesEl = document.querySelector('.sources') as HTMLElement;

        data.forEach((item: ISources) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as ParentNode;

            const itemEl = sourceClone.querySelector('.source__item-name') as HTMLElement;
            const letter: string = item.name.charAt(0);
            let currLetter = '';
            itemEl.textContent = item.name;

            if (letter !== currLetter) {
                itemEl.id = letter;
                currLetter = letter;
                //sourcesEl.scrollBy(window.innerWidth / 2, 0);
            }

            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        sourcesEl.append(fragment);
    }
}

export default Sources;
