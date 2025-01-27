import {ReactNode} from "react";
import BoardWidget from "@/widget/board";
import styles from './styles.module.scss'
import {useGameContext} from "@/shared/store";
import TaskDescription from "@/widget/task";
import {useCellUseCase} from "@/entities/cell";


const MainPage = (): ReactNode => {
    const {winner, currentPlayer, step} = useGameContext();
    const {handleRestart, draw} = useCellUseCase();


    return (
        <main className={styles.page}>
            <h1 className="text-4xl">Количество ходов: {step}</h1>
            {!!winner && <h1 className="text-4xl">Игрок {winner} победил!</h1>}
            {!!draw && <h1 className="text-4xl">{draw} </h1>}
            {!winner && !draw && <h1 className="text-4xl">Следующий ход: {currentPlayer}</h1>}

            <BoardWidget/>
            <button className="bg-accent text-white font-bold py-2 px-4 rounded-full" onClick={handleRestart}>Новая
                игра
            </button>
            {/* Описание задания */}
            <TaskDescription/>
        </main>
    );
};

export default MainPage;