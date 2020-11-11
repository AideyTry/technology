import React from 'react'
import { userInfo } from '../../api/user'

interface ILoaderState {
    data: any,
    isLoading: boolean
}
interface ILoaderProps {
    data: any
}

const withLoader = <T extends ILoaderState>(WrappedComponent: React.ComponentType<T>, url: string) => {
    return class LoaderComponent extends React.Component<Partial<ILoaderProps>, ILoaderState> {
        constructor(props: any) {
            super(props)
            this.state = {
                data: null,
                isLoading: false
            }
        }
        componentDidMount(){
            this.setState({
                isLoading: true
            })
            userInfo(url).then(res => {
                console.log('res===', res)
                this.setState({
                    isLoading: false,
                    data: res.data.data
                })
            })
        }

        render() {
            const { data, isLoading } = this.state
            return (
                <>
                    {
                        (isLoading || !data) ? <p>data is loading</p> : <WrappedComponent {...this.props as T} data={data}></WrappedComponent>
                    }
                </>
            )
        }
    }
}

export default withLoader