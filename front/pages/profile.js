import React from 'react';
import Head from 'next/head'
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

Profile.propTypes = {};

function Profile() {
  const followerList = [{ nickname: 'zerocho'}, {nickname:'babo'}, {nickname: "rednjzz2"}];
  const followingList = [{nickname: 'zerocho'}, {nickname:'babo'}, {nickname: "rednjzz3"}];

  return (
    <>
      <Head>
        <title> Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="Follower List"  data={followerList} />
        <FollowList header="Following List" data={followingList} />
      </AppLayout>
    </>
  );
}

export default Profile;