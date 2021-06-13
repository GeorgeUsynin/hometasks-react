import React, {useState} from "react";
import {ignatApi} from "./RequestsAPI";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";

export const Request = () => {

    const [checkbox, setCheckbox] = useState(false)

    const [error, setError] = useState<string | null>(null)

    const [goodResponse, setGoodResponse] = useState<string | null>(null)

    const onclickhandler = () => {
        ignatApi.testApi(checkbox)
            .then(res => {
                setGoodResponse(res.data.errorText)
            })
            .catch(error => {
                let errorResponse = error.response ? error.response.data.errorText : error.message
                setError(errorResponse)
            })
    }

    return (
        <div>
            <hr/>

            <div>
                <p>{`1) If you want to see a bad response => uncheck a checkbox please and click "Send request!"`}</p>
                <p>{`2) If you want to see a good response => check a checkbox please and click "Send request!"`}</p>
                <input
                    style={{
                        width: '30px',
                        height: '30px',
                        marginLeft: '50px'
                    }}
                    checked={checkbox}
                    type={'checkbox'}
                    onChange={(e) => setCheckbox(e.currentTarget.checked)}
                />
            </div>
            <SuperButton onClick={onclickhandler}>
                Send request!
            </SuperButton>

            <p>{error && `Error: ${error}`}</p>
            <p>{goodResponse && `Good response: ${goodResponse}`}</p>
            <SuperButton onClick={() => {
                setError(null)
                setGoodResponse(null)
            }
            }>
                Clear responses
            </SuperButton>
            <hr/>
        </div>
    )
}