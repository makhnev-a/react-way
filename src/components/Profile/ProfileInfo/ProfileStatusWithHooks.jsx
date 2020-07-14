import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
       setStatus(props.status);
    }, [props.status]);

    const onStatusChange = (e) => setStatus(e.currentTarget.value);
    const activateEditMode = () => setEditMode(true);

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    return (
        <>
            {!editMode &&
            <div>
                <span
                    onDoubleClick={activateEditMode}
                >{props.status || '------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true}
                    onBlur={deActivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                />
            </div>
            }
        </>
    );
}

export default ProfileStatusWithHooks;