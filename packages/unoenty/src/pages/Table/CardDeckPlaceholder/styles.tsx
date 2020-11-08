import { makeStyles } from "@material-ui/core"

import cardConfig from "@/config/card"

import colors from "@/styles/colors"

type UseStylesProps = {
	isCurrentRoundPlayer: boolean
}

const useStyles = makeStyles((theme) => ({
	cardContent: {
		position: "relative",
		height: 120,
		pointerEvents: "none",
		transition: theme.transitions.create("all", {
			duration: theme.transitions.duration.standard,
		}),
		[theme.breakpoints.down("sm")]: {
			height: 50,
		},
	},
	cardContainer: {
		position: "absolute",
		top: 90,
		left: 50,
		transform: "rotate(60deg)",
		transition: theme.transitions.create("all", {
			duration: theme.transitions.duration.standard,
		}),
		opacity: (props: UseStylesProps) => `${props.isCurrentRoundPlayer ? 1 : 0.5}`,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	card: {
		width: 40,
		height: 40 * cardConfig.cardProportion,
		position: "absolute",
		pointerEvents: "none",
		backgroundSize: "cover",
		backgroundColor: (props: UseStylesProps) => `${props.isCurrentRoundPlayer ? colors.palette.yellow1 : colors.palette.red1}`,
		borderRadius: theme.spacing(1),
		border: `${theme.spacing(0.5)}px solid ${colors.palette.blue1}`,
		transition: theme.transitions.create("all", {
			duration: theme.transitions.duration.standard,
		}),
		[theme.breakpoints.down("sm")]: {
			width: 25,
			height: 25 * cardConfig.cardProportion,
		},
	},
	cardCounterText: {
		position: "absolute",
		top: theme.spacing(0.5),
		left: theme.spacing(0.5),
		fontWeight: "bold",
		padding: theme.spacing(0.5),
		backgroundColor: (props: UseStylesProps) => `${props.isCurrentRoundPlayer ? colors.palette.yellow1 : colors.grayScale[12]}`,
		border: `${theme.spacing(0.5)}px solid ${colors.palette.blue1}`,
		borderRadius: theme.spacing(1),
		color: colors.grayScale[1],
	},
	cardCounterContainer: {
		width: 25,
		height: "100%",
		opacity: (props: UseStylesProps) => `${props.isCurrentRoundPlayer ? 1 : 0.5}`,
	},
	cardCounterContent: {
		position: "relative",
		width: 20,
		height: 30,
		backgroundColor: (props: UseStylesProps) => `${props.isCurrentRoundPlayer ? colors.palette.yellow1 : colors.grayScale[12]}`,
		borderRadius: theme.spacing(0.5),
	},
	container: {
		position: "relative",
		width: 100,
		height: 125,
		[theme.breakpoints.down("sm")]: {
			width: "auto !important",
			height: "auto !important",
			// eslint-disable-next-line
			flexDirection: "column !important" as any,
		},
	},
	avatarContainer: {
		width: 50,
		opacity: (props: UseStylesProps) => `${props.isCurrentRoundPlayer ? 1 : 0.5}`,
	},
	playerName: {
		fontWeight: "bold",
		color: (props: UseStylesProps) => `${props.isCurrentRoundPlayer ? colors.palette.yellow1 : colors.grayScale[12]}`,
		marginBottom: theme.spacing(1),
	},
	remainingCardsContainer: {
		zIndex: 1,
		"&::before": {
			content: "close-quote",
			position: "absolute",
			width: "100%",
			height: "100%",
			backgroundColor: colors.grayScale[6],
			zIndex: -1,
			bottom: 0,
			left: 0,
		},
	},
	remainingCardsText: {
		fontWeight: "bold",
		color: colors.palette.black1,
		transform: "rotate(-90deg)",
		height: 50,
		width: 55,
		textAlign: "center",
	},
	playerStateMessageContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		width: 160,
		height: 160,
		zIndex: 50,
		borderRadius: "100%",
		[theme.breakpoints.down("sm")]: {
			width: 90,
			height: 90,
		},
	},
	playerStateMessageText: {
		color: colors.grayScale[15],
		textShadow: `1px  1px 0 ${colors.grayScale[1]}, 1px -1px 0 ${colors.grayScale[1]}, -1px  1px 0 ${colors.grayScale[1]}, -1px -1px 0 ${colors.grayScale[1]}`,
		fontWeight: "bold",
		backgroundColor: colors.palette.yellow1,
		padding: theme.spacing(1, 3),
		boxShadow: `0 0 50px ${colors.grayScale[1]}`,
		transform: "rotate(-15deg)",
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(1, 1.5),
		},
	},
}))

export default useStyles
