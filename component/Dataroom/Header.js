import { Button, Container, Grid } from '@material-ui/core'
import styles from '../../styles/Dataroom.module.css'
import HistoryIcon from '@material-ui/icons/History';

export default function Header() {
    return (
            <Grid
                container
                direction='row'
                spacing={4}
                justify='center'
            >
                <Grid
                    item
                    xs={11}
                    alignContent='flex-start'
                    style={{paddingLeft: 0}}
                >
                    <Button variant='outlined' className={styles.button}>
                        Module Dataroom
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={11}
                    alignContent='flex-start'
                    className={styles.header}
                >
                    <Grid 
                        container
                        >
                        <Grid
                            item
                            xs={11}
                            className={styles.titleHeader}
                        >
                            DATAROOM
                        </Grid>
                        <Grid
                            item
                            xs={1}
                            style={{textAlign: 'end'}}
                        >
                            <HistoryIcon className={styles.historyIcon} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={11}
                >
                    <Grid
                        container
                        direction='row'
                        alignContent='flex-end'
                        style={{justifyContent: 'flex-end'}}
                    >
                        <Grid
                            item
                            xs={4}
                            md={3}
                            sm={3}
                            alignContent='flex-end'
                            className={styles.lastUp}
                        >
                            Dernière mise à jour :
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            md={3}
                            sm={3}
                            alignContent='flex-end'
                            className={styles.lastUpdate}
                        >
                            {"20/08/2020 à 8h57 par Victor M."}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}