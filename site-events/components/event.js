import LazyLoad from 'react-lazyload'
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const openGrpnPage = (url) => {
  window.location = url;
};

export default ({ event }) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={event.title} />}
    >
      <LazyLoad height={200} once>
        <img src={event.image} alt={event.title} />
      </LazyLoad>
    </CardMedia>
    <CardTitle subtitle={event.description} />
    <CardActions>
      <FlatButton label="Read More" onClick={() => openGrpnPage(event.url)} />
    </CardActions>
    <style jsx global>{`
      img {
        width: 100%;
      }
    `}</style>
  </Card>
)

