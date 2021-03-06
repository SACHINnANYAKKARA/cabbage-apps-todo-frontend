import { Button, Grid, Typography, ButtonGroup } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

import * as React from "react";

import TodoHome from '../TodoHome/TodoHome';
import TodoTable from '../TodoTable/TodoTable';
import SortController from '../SortController/SortController';

function TodoAdd() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddTodo = () => {
		setOpen(true);
	};

	return (
		<Grid container className={classes.root}>
			<TodoHome open={open} onClose={handleClose} />
			<Grid item xs={6}>
				<Typography variant="h4" gutterBottom>
					Todo List 
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<div className={classes.buttonContainer}>
					<Button
						className={classes.button}
						variant="contained"
						color="secondary"
						onClick={handleAddTodo}
					>
						Add Todo
					</Button>
				</div>
			</Grid>
			<Grid item xs={12}>
				<TodoTable />
			</Grid>
			<Grid item xs={12}>
			   <SortController />
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: 20,
	},

	buttonContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},

	button: {
		marginBottom: 15,
	},
}));

export default TodoAdd;