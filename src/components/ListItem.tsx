import React from 'react';
import type { User } from "../types/user";

const ListItem = (props: User) => {
    const { id, name, age } = props;
    return (
        <p>
            {id}:{name}({age})
        </p>
    );
};

export default ListItem