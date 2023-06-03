import React, { Component } from 'react';

class MovieInfo extends Component {
    render() {
        return (
        <div>
            <h2>영화 정보</h2>
            <ul>
                <li><strong>제목:</strong> </li>
                <li><strong>장르:</strong></li>
                <li><strong>감독:</strong> </li>
                <li><strong>출연:</strong> </li>
                <li><strong>개봉일:</strong> </li>
                <li><strong>평점:</strong> </li>
            </ul>
        </div>
        );
    }
}

export default MovieInfo;