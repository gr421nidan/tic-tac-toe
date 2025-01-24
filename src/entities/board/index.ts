import {useGameContext} from "@/shared/store";
import {useEffect} from "react";
import {IWinner} from "@/shared/interfaces";

const useBoardUseCase = () => {
    const {board, setWinner, winner} = useGameContext()
    // TODO: Реализовать функцию расчета победителя
    const checkWinner = (): IWinner => {
        const combinations = [
            [0, 1, 2], // 1 строка
            [3, 4, 5], // 2строка
            [6, 7, 8], // 3 строка
            [0, 3, 6], // 1 столбец
            [1, 4, 7], // 2столбец
            [2, 5, 8], // 3 столбец
            [0, 4, 8], // Главная диагональ
            [2, 4, 6], // Обратная диагональ
        ];
        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            if (
                board[a].player &&
                board[a].player === board[b].player &&
                board[a].player === board[c].player
            ) {
                return board[a].player;
            }
        }

        return null;
    };

    useEffect(() => {
        setWinner(checkWinner())
        if (winner) {
            setWinner(winner);
        }
    }, [board]);
}

export {
    useBoardUseCase,
}