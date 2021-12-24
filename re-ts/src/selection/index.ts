
namespace selections {


    class Selection<T> {

        private _selection = new Set<T>()

        constructor(private _multiple = false, initialSelected?: T[]) {
            if (initialSelected && initialSelected.length) {
                if (_multiple) {
                    initialSelected.forEach(val => this.markSelected(val))
                } else {
                    this.markSelected(initialSelected[0])
                }
            }
        }

        get selected() {
            return this._selection
        }

        isSeleceted(val: T): boolean {
            return this._selection.has(val)
        }

        isEmpty(): boolean {
            return this._selection.size === 0
        }

        toggle(v: T) {
            this.isSeleceted(v) ? this.deselect(v) : this.select(v)
        }

        select(...vals: T[]) {
            vals.forEach(val => this.markSelected(val))
        }

        deselect(...vals: T[]) {
            vals.forEach(val => this.unMarkSelected(val))
        }

        private markSelected(value: T) {
            if (!this.isSeleceted(value)) {
                if (!this._multiple) {
                    this.unMarkAll()
                }
                this._selection.add(value)
            }
        }

        private unMarkSelected(v: T) {
            if (this.isSeleceted(v)) {
                this._selection.delete(v)
            }
        }

        private unMarkAll() {
            this._selection.clear()
        }
    }


    const user = [
        { name: 'maomao', age: 12, id: 1 },
        { name: 'lisi', age: 15, id: 2 },
        { name: 'xiayu', age: 22, id: 3 },
        { name: 'tom', age: 32, id: 4 },
    ]

    const selections = new Selection(true)

    selections.select(user[0])
    selections.select(user[1])
    selections.toggle(user[1])
    selections.toggle(user[1])
    console.log(selections.selected);

}

