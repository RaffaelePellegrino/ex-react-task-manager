import { memo } from "react";
const taskRow = memo(({task}) =>{
    return(
        <tr>
            <td>{task.title}</td>
            <td>{task.status}</td>
            <td>{task.createdAt}</td>
        </tr>
    )
})

export default taskRow;