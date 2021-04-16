import { Container, Grid } from '@material-ui/core'
import styles from '../../styles/Dataroom.module.css'
import Header from './Header'
import Actions from './Actions';


export default function Index() {
    return (
        <div className={styles.container}>
            <Container
                container
                direction='row'
                spacing={4}
                justify='center'
                
            >
                <Grid
                    item
                    xs={12}
                >
                    <Header />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Actions />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Grid
                        container
                        justify='center'
                        spacing={4}

                    >
                        <Grid
                            item
                            xs={11}
                            alignContent='flex-start'
                            style={{padding: 0, paddingTop: '4%'}}
                        >
                            <Grid
                                container
                                direction='row'
                            >
                                <Grid
                                    item
                                    xs={4}
                                    className={styles.arborContainer}
                                >

                                </Grid>
                                <Grid
                                    item
                                    xs={8}
                                    className={styles.arborContainer}
                                >
                                    
                                </Grid>  
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}