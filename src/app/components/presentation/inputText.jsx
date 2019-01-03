import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {convertVideo} from '../../graphql/quries/videoQueries';
import errorHandling from '../../api/errorHandling'

export default class InputLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "video",
            link: ""
        };
    }

    handleSubmit = (e) => {
        
        convertVideo(this.state.link)
        .then((value) => {
          // success
          console.log(value);
          //error
        }, (graphQLErrors, networkError) => {
          if (graphQLErrors) {
            errorHandling.graphiqlError(graphQLErrors);
          }
          if (networkError) {
            errorHandling.networkError(networkError)
          }
  
        })

        this.setState({
            link: ''
        })
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({
            link: e.target.value
        })
    }

    linkTypeChange = (type, e) => {
            this.setState({
                type: type
            })
    }

    formMessage = (type) => {
        const msg =
            this.state.type === 'video' ?
                <p>Enter <b>video</b> link</p> :
                <p>Enter <b>playlist</b> code</p>;
        return msg;
    }

    render() {
        return (
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                {this.formMessage()}

                <TextField
                    id="standard-name"
                    fullWidth
                    onChange={this.handleChange}
                    value = {this.state.link}
                />


                <Button disabled>
                    {this.state.type}
                </Button>

                {this.state.type !== 'video' &&
                    <Button color="primary"
                        id="video"
                        onClick={(e) => this.linkTypeChange('video',e)}
                    >
                        Video
                    </Button>
                }

                {this.state.type !== 'playlist' &&
                    <Button color="secondary"
                        id="playlist"
                        onClick={(e) => this.linkTypeChange('playlist',e)}
                    >
                        Playlist
                    </Button>
                }
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Convert
               </Button>
            </form>

        )
    }
}