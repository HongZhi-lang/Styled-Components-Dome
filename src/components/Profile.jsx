import React from "react";
import { Skeleton } from "antd";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  width: 1000px;
  padding: 50px;
  margin: 100px auto 0;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.93);
`;

const SkeletonWrapper = styled(Skeleton)`
  margin-bottom: 20px;
`;

function Profile() {
  console.log(this);
  return (
    <ProfileWrapper>
      <SkeletonWrapper
        loading
        avatar={{ size: 100 }}
        title={{ width: 200 }}
        paragraph={{ rows: 5 }}
      />
      <SkeletonWrapper paragraph={{ rows: 10 }} />
    </ProfileWrapper>
  );
}

export default Profile;
