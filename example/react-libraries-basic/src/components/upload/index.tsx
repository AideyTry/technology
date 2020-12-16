import React, {useEffect, ChangeEvent} from 'react'
import Axios from 'axios'

const Upload = () => {
    useEffect(() => {
        Axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(resp => {
            console.log('resp=', resp)
        })
    }, [])
    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        console.log('files===', files)
        if(files){
            const uploadedFile = files[0]
            const formData = new FormData()
            console.log('formData===', formData)
            formData.append(uploadedFile.name, uploadedFile)
            Axios.post('http://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(resp => {
                console.log('data=============', resp)
            })
        }
    }
    return <>
        <input type="file" name="myFile" onChange={handleFileChange}/>
    </>
}

export default Upload