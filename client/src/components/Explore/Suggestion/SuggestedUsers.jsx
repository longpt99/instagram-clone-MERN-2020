import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

SuggestedUsers.propTypes = {};

function SuggestedUsers(props) {
  const { users } = props;
  console.log(users);
  return (
    <div className={styles.wrapper}>
      {users.map((user, index) => (
        <div className={styles.content} key={index}>
          <div className={styles.content_group}>
            <Link to={`/${user.nickname}`}>
              <div className={styles.content_img}>
                <img src={user.profilePictureUrl} alt="avatar"></img>
              </div>
            </Link>
            <div className={styles.content_info}>
              <Link to={`/${user.nickname}`}>
                <span className={styles.content_info_nickname}>
                  {user.nickname}
                </span>
              </Link>
              <span>{user.name}</span>
            </div>
          </div>
          <div>
            <Button
              color="outline-primary"
              onClick={() => props.handleClickFollowButton(user._id)}
            >
              Theo dõi
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuggestedUsers;
