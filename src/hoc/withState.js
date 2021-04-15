import React from 'react'
import {AppStore} from "../AppStore"

export function withState(Component){
    class Wrap extends React.Component{
        render(){
            return(
                <AppStore.Consumer>
                    {(state) => (
                        <Component
                            {...this.props}
                            {...state}
                        />
                    )

                    }
                </AppStore.Consumer>
            )
        }
    }
    return Wrap
} 