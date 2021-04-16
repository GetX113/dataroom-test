import { Grid } from "@material-ui/core";
import Header from '../component/Header/Header'
import Menu from '../component/Header/Menu'
import Dataroom from '../component/Dataroom/Index'

export default function Home() {
  return (
    <Grid 
      container
      direction='row'
      style={{background: '#EEEEEE'}}
    >
      <Grid 
        item
        xs={2}
      >
        <Menu />
      </Grid>
      <Grid
        item
        xs={10}
        direction='column'
      >
        <Grid 
          item 
          xs={12}
        >
          <Header />
        </Grid>
        <Grid
          container
          xs={12}
        >
          <Dataroom />
        </Grid>
      </Grid>
    </Grid>
  )
}
