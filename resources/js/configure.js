updateNamesStorage = (key, value) => {
}

document.addEventListener('alpine:init', () => {
    Alpine.data('configuration', () => ({
        async init() {
            // const names = await Neutralino.storage.getData('config').catch((e) => {
            //     console.warn(e);
            // })
            // if (names) {
            //     this.inputFields = names;
            // } else {
            //     this.inputFields = [];
            //     Neutralino.storage.getKeys()
            // }
        },
        inputFields: [],
        nameValue: '',
        async addInputField() {
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