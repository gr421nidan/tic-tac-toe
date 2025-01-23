import {useGameContext} from "@/shared/store";
import {useEffect} from "react";
import {IWinner} from "@/shared/interfaces";

const useBoardUseCase = () => {
	const {board, setWinner} = useGameContext()

	// TODO: Реализовать функцию расчета победителя
	const checkWinner = (): IWinner => {
		return null;
	};

	useEffect(() => {
		setWinner(checkWinner())
	}, [board]);
}

export {
	useBoardUseCase,
}