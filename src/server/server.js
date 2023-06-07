import express from 'express'
import ReactDOM from 'react-dom/server'
import { App } from '../App';
import { indexTemplate } from './indexTemplate'
import axios from 'axios';

const app = express();
app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())))
  // axios.post(
  //   'https://www.reddit.com/api/v1/access_token',
  //   `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000`,
  //   {
  //     auth: { username: process.env.CLIENT_ID, password: 'AOiJ8vVs6GiiCC5HO2XuDvwfI4QG8g' },
  //     headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  //   }
  // )

  // console.log(req.query.code);
})

app.get('/auth', (request, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${request.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: 'AOiJ8vVs6GiiCC5HO2XuDvwfI4QG8g' },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
  ).then((data) => {
    res.send(
      indexTemplate(ReactDOM.renderToString(App()), data['access_token']),
    ); //dsdjlbn 'undefined' в консоли window.__token__ = '${token}'
  }).catch(console.log);
});



app.listen(3000, () => {
  console.log("server started on port http://localhost:3000")
})