class TicTacToe {
    constructor() {
        let matrix = Array.from({
            length: 3
        }, () => new Array(3).fill(null))

        this.matrix = matrix
        this.curSymbol = 'x'
        this.anotherSymbol = 'o'
    }

    getCurrentPlayerSymbol() {
        return this.curSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.curSymbol
            const tempSymbol = this.curSymbol
            this.curSymbol = this.anotherSymbol
            this.anotherSymbol = tempSymbol
        }
    }

    isFinished() {
        return Boolean(this.getWinner() || this.isDraw())
    }

    getWinner() {

        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i].find(x => x != this.matrix[i][0]) === undefined) {
                const first = this.matrix[i][0]
                if (first != null)  return first
            }
        }

        for (let i = 0; i < this.matrix[0].length; i++) {
            const first = this.matrix[0][i]
            if (first === null) continue
            let isWin = false
            for (let j = 1; j < this.matrix.length; j++) {
                if (this.matrix[j][i] == first) {
                    isWin = true
                } else {
                    isWin = false
                    break
                }
            }

            if (isWin) return this.matrix[0][i]
        }

        let isWin = false
        for (let i = 1; i < this.matrix.length; i++) {
            if (this.matrix[i][i] != this.matrix[i - 1][i - 1]) {
                isWin = false
                break
            } else {
                isWin = true
            }
        }
        if (isWin) return this.matrix[0][0]

        isWin = false
        const first = this.matrix[0][this.matrix.length - 1]
        for (let i = 1; i < this.matrix.length; i++) {
            const cur = this.matrix[i][this.matrix.length - 1 - i]

            if (cur != first) {
                isWin = false
                break
            } else {
                isWin = true
            }
        }
        return isWin ? first : null
    }

    noMoreTurns() {
        for (let row of this.matrix) {
            if (row.includes(null)) return false
        }
        return true
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
