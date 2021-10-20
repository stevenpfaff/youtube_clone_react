import React from 'react';

const RelatedVideos = (props) => {

    function videoLinks() {
        return props.relatedVideos.map((video) => {
            return (
                
                    <li><a href={`http://www.youtube.com/watch?v=${video.videoId}`}>{video.videoTitle}</a></li>
                    );
        });
    }
        return (
            <div>
                <h1> Related Videos :</h1>
                {videoLinks()}
            </div>
        );
}

export default RelatedVideos;