import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const style = makeStyles((theme) => ({
    card : {
        marginBottom : theme.spacing(1)
    }
}));

const Post = () => {
  const classes = style();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image="https://app.khedmatazma.com/app/webroot/img/magazines/full/1041.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            عکس نمونه
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          اشتراک گذاری
        </Button>
        <Button size="small" color="primary">
          بیشتر
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
