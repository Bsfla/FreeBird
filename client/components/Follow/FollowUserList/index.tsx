import { followUser } from "@apis/user";
import { FollowUserType } from "@lib/types";
import React from "react";
import FollowCard from "../FollowCard";
import {Wrrapper} from  './style';

interface Props {
    followUsers: FollowUserType[]
}

const FollowUserList = ({followUsers}: Props) => {
    return (
        <Wrrapper>
            {followUsers.map((followUser) => (
                <FollowCard followUser={followUser} key={followUser.id} />
            )

            )}
        </Wrrapper>
    )
}

export default FollowUserList;