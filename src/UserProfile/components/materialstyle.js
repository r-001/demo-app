import { makeStyles,} from '@material-ui/core/styles';


const drawerWidth = 240;
const materialstyle=()=>{
    return  makeStyles(theme => ({
        root: {
          display: 'flex',
        },
        appBar: {
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        hide: {
          display: 'none',
        },
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
        },
        drawerHeader: {
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px',
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: -drawerWidth,
          disableUnderline:true
      
        },
        contentShift: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
        toolbarButtons: {
          marginLeft: 'auto',
          padding:'20px'
        },
        input: {
          display: 'none',
        },
      }));

}

export default  materialstyle;