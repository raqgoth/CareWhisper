import { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetWhisper } from '../store/actions/WhisperActions'

const mapStateToProps = (detailState) => {
    return {
        detailState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWhisperDetails: (id) => dispatch(getWhisper(id))
    }
}
const WhisperDetails = (props) => {
    console.log('whisper details check',props)
    useEffect(() => {
        props.fetchWhisperDetails(props.match.params.id)
    }, [])
    
    return (
        <div>
            <h1>details</h1>
            <h2>title: {props.detailState.detailState.details.title}</h2>
            <p>content: {props.detailState.detailState.details.content}
            </p>
            <p>grateful: {props.detailState.detailState.details.grateful}
            </p>
        </div>
    )
}
  export default connect(mapStateToProps, mapDispatchToProps(WhisperDetails))
