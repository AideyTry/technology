import { useState, useEffect } from 'react'
import { userInfo } from '../../api/user'

const useURLLoader = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        userInfo(url).then(res => {
            console.log('res===', res)
            setData(res.data.data)
            setLoading(false)
        })
    }, deps)
    return [data, loading]
}

export default useURLLoader