import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Button } from 'antd';

UserProfile.propTypes = {
  
};

function UserProfile({ setIsLoggedIn }) {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

  return (
    <Card actions={[
      <div key={"twit"}>Twit<br />0</div>,
      <div key={"followings"}>Followings<br />0</div>,
      <div key={"followers"}>Followers<br />0</div>
    ]}>

      <Card.Meta
        avatar={<Avatar>RJ</Avatar>}
        title="rednjzz"
      />
      <Button onClick={onLogOut}>Logout</Button>
    </Card>
  );
}

export default UserProfile;