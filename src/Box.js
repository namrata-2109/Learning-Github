import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

 function Box({title, cases, total}) {
    return(
        <Card>
            <CardContent>
                <Typography>{title}</Typography>
                <h2>{cases}</h2>
                <Typography>{total}</Typography>
            </CardContent>

        </Card>

    )
}
export default Box
