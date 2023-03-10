import { Box } from "@mui/material"
import SearchBar from "./SearchBar"

function Grid() {
    const [dataSource, title, cols,isLoading,onRowClick] = props
    return <>
        <div>
            <Box>
                <h2>{title}</h2>
            </Box>
            <SearchBar  />
            {dataSource && Array.isArray(dataSource) && (<table>
                <thead>
                    <tr>
                        {cols && Array.isArray(cols) &&
                            cols.length > 0 ?
                            cols.map((x, i) => <th key={i}>
                                {x.displayName}</th>)
                                :null}
                    </tr>
                </thead>
                <tbody>
                  {dataSource && Array.isArray(dataSource)&& dataSource.length>0?
                  dataSource.map((x,i)=>(
                    <tr key={i}>
                        {cols.map((e,index)=>(
                            <td key={ind}>
                                {e.displayField? e.displayField(x):x[e.key]}
                            </td>
                        ))}
                    </tr>
                  ))
                :null}
                </tbody>
            </table>
            )}
        </div>
    </>
}
export default Grid