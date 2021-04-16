import { Grid} from '@material-ui/core'
import styles from '../../styles/Dataroom.module.css'
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import PersonIcon from '@material-ui/icons/Person';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';

export default function Actions() {
    return (
            <Grid
                container
                justify='center'
                spacing={4}
            >
                <Grid
                    item
                    xs={11}
                    alignContent='flex-start'
                    className={styles.actionsContainer}
                >
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={4}
                            alignItems='center'
                            style={{display: 'flex'}}
                        >
                            <MenuOpenIcon />
                            <div className={styles.actionsButton}>
                                <AddCircleIcon />
                                <FolderSpecialIcon style={{color: '#2D9CDB'}}/>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={8}
                            className={styles.moreActions}
                        >
                            <div className={styles.search}>
                                <SearchIcon style={{color: 'rgba(57, 62, 70, 0.5);'}} />
                                <input type='text' className={styles.searchInput} placeholder="Rechercher" />
                            </div>
                            <DeleteIcon />
                            <VerticalAlignBottomIcon />
                            <div className={styles.peopleNumber}>
                                <PersonIcon /> {" 5"}
                            </div>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
    )
}