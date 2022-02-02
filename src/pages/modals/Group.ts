import { State } from "./State";

export interface Group {
    id: number;
    name: string;
    is_private: boolean;
    is_academic: boolean;
    description: string;
    introductory_message: null | string;
    group_image_url: null | string;
    join_code: string;
    created_at: Date;
    updated_at: Date;
    chatCount: number;
    groupMemberStatus: null;
    invitedMembers: State[];
    participants: State[];
    advocatePage: null;
}