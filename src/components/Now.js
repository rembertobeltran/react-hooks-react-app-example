import React from "react";
import { format } from "date-fns";

function Now() {
    return (
        <div className="now">
            <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
        </div>
    )
}
export default Now;