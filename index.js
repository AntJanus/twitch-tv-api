import { h, render, Component } from 'preact';
import { fetchUser, fetchUserStream } from './app/api';

const users = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas'];

class App extends Component {
  constructor() {
    super();

    this.state.users = {};
  }

  componentDidMount() {
    users.forEach(userName => {
      return fetchUser(userName)
        .then(user => {
          userName = user.name;
          this.setState(prevState => {
            return Object.assign({}, prevState, {
              users: Object.assign({}, prevState.users, {
                [user.name]: user,
              }),
            });
          });

          return fetchUserStream(userName);
        })
        .then(userStream => {
          this.setState(prevState => {
            const prevUser = prevState.users[userName] || {};

            return Object.assign({}, prevState, {
              users: Object.assign({}, prevState.users, {
                [userName]: Object.assign({}, prevUser, userStream),
              }),
            });
          });
        })
		})
    ;
  }

  render(props, state) {
    const userArray = Object.keys(state.users).map(userKey => {
      return state.users[userKey];
    });

    const userElements = userArray.map(user => {
      return (
        <li key={user.id}>{user.display_name} {user.stream &&  '- ' + user.stream.game}</li>
      );
    });

    return (
      <ul>{userElements}</ul>
    )
  }
}

render(<App />, document.body);
