import React from "react";
import { Skeleton } from "antd";
import styled from "styled-components";
import { Button } from "../styled/basics";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/cartCountSlice";
import { useSelector, useDispatch } from "react-redux";

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
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <ProfileWrapper>
      <p>{count}</p>
      <Button onClick={() => dispatch(increment())}> + </Button>
      <Button onClick={() => dispatch(decrement())}> - </Button>
      <Button onClick={() => dispatch(incrementByAmount(100))}>+100</Button>
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
