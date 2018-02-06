import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionGrade from 'material-ui/svg-icons/action/grade';


const openGrpnPage = (url) => {
  window.location = url
}

export default ({ event }) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={event.title} />}
    >
      <img src={event.image} alt={event.title} />
    </CardMedia>
    <CardTitle subtitle={event.description} />
    <CardActions>
      <FlatButton label="Read More" onClick={() => openGrpnPage(event.url)} />
      <div className="icon">
        {
          event.score ? <ActionGrade /> : <ActionHome />
        }
      </div>
    </CardActions>
    <style jsx global>{`
      img {
        width: 100%
      }
      .icon {
        float: right
      }
    `}</style>
  </Card>
)

