import {useGameContext} from "@/shared/store";
import {ICell} from "@/shared/interfaces";
import {DEFAULT_VALUES} from "@/shared/store";

const useCellUseCase = () => {
    // Деструктуризируйте нужные вам элементы для работы
    const {board, currentPlayer, setCurrentPlayer, setBoard, setWinner, winner} = useGameContext()
    let draw: string | null = null;
    if (board.every((cell => cell.player !== null))&&!winner) {
        draw = "Ничья";
    }
    // TODO: Реализовать логику нажатия на ячейку в поле
    const handleCellClick = (cell: ICell): void => {
        if (draw) {
            console.log(`Игра закончена! Победителя нет! ${draw}!`)
            return;
        }
        if (winner || (winner && cell.player) ) {
            console.log(`Игра закончена! Победитель:${winner}`)
            return;
        }

        if (cell.player) {
            console.log('Эта ячейка уже занята!')
            return;
        }

        const updatedBoard = board.map(clickCell => {
            if (clickCell.id === cell.id) {
                return {
                    ...clickCell,
                    player: currentPlayer
                };
            } else {
                return clickCell;
            }
        });//обновляю кликнутую ячейку в массиве

        setBoard(updatedBoard);

        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    };

    //перезапуск игры
    const handleRestart = () => {
        setBoard(DEFAULT_VALUES.board);
        setWinner(DEFAULT_VALUES.winner);
        setCurrentPlayer(DEFAULT_VALUES.currentPlayer);
    };

    return {
        handleCellClick,
        handleRestart,
        draw,
    }
}

export {
    useCellUseCase,
}