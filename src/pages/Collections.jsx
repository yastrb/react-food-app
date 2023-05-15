import React from 'react';
import image1 from '../img/sushi.jpg';
import image2 from '../img/salmon.jpg';
import image3 from '../img/muffin.jpg';
import image4 from '../img/breakfast.jpg'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const collection = [
  {
    image: image1,
    title: "Sushi Combos for your Next Party"
  },
  {
    image: image2,
    title: "Everything Bagel"
  },
  {
    image: image3,
    title: "Cook Like a Chef"
  },
  {
    image: image4,
    title: "Exquisite Dinner Recipe Ideas"
  },
]

const Collections = () => {
  return (

    <div>
      <section>
        <h3>Hand-Picked Collections</h3>
        <div className="wrapper">
          <Grid container spacing={3} columns={{ sm: 2, md: 6 }}>
            {collection.map((item) => {
              return <Grid item md={6} >

                <Card key={item.id}>
                  <CardMedia
                  component="img"
                    // sx={{ height: 140 }}
                    height= '140'
                    md={{width: 200}}
                    image={item.image}
                  />
                  <CardContent>
                    <h5>{item.title}</h5>
                  </CardContent>
                  <CardActions>
                    <Button size="small">156 Recipes</Button>
                  </CardActions>
                </Card>
              </Grid>
            })}
          </Grid>
        </div>
      </section>
    </div>
  )
}

export default Collections