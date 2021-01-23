import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,
    },
}));

function TopBar() {
    return(
        <AppBar className={classes.root} color="default">
            <Toolbar>
                <box>
                    <MenuIcon />
                    <img src="" />
                </box>
                <box></box>
                <box></box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;