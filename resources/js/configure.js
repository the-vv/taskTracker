updateNamesStorage = (key, value) => {
}

document.addEventListener('alpine:init', () => {
    Alpine.data('configuration', () => ({
        inputFields: [],
        nameValue: '',
        addInputField() {
            if (!this.nameValue) {
                return;
            }
            if (this.inputFields.includes(this.nameValue)) {
                UIkit.notification('<span class="uk-text-normal">Input field already exists</span>', { 
                    status: 'danger',
                    pos: 'bottom-center',
                    timeout: 3000
                 });
                return;
            }
            this.inputFields.push(this.nameValue);
            this.nameValue = '';
        },
        removeInputField(index) {
            this.inputFields.splice(index, 1);
        },
        sortHandler(name, position) {
            const currentIndex = this.inputFields.indexOf(name);
            const newIndex = currentIndex + position;
            if (newIndex >= 0 && newIndex < this.inputFields.length) {
                const removedElement = this.inputFields.splice(currentIndex, 1)[0];
                this.inputFields.splice(newIndex, 0, removedElement);
            }
        }
    }))
})