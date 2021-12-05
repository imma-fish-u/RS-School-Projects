export class Alphabet {
    // eslint-disable-next-line prettier/prettier
    private ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];

    createAlphabet() {
        const labelWrapper = document.getElementById('pagination') as HTMLElement;

        for (let i = 0; i < this.ALPHABET.length; i++) {
            const label = document.createElement('a');
            label.className = 'source__slider-bullet';
            label.href = `#${this.ALPHABET[i]}`;
            label.innerText = `${this.ALPHABET[i]}`;
            labelWrapper.append(label);
        }
    }
}

export default Alphabet;
