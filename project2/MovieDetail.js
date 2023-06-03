import React, { Component } from 'react';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: "분노의 질주 : 라이드 오어 다이",
          genre: "범죄, 액션, 스릴러, 느와르, 어드벤처",
          info: "주요정보에 대해서 알 수 있는 테스트입니다.",
          cast: "감독 및 출연진 : 빈 디젤, 존 시나, 미셸 로드리게즈, 타이리스 깁슨...",
          synopsis: `아무리 빨리 달려도 과거를 앞지를 순 없다

          돔(빈 디젤)과 그의 패밀리 앞에 나타난 운명의 적 단테(제이슨 모모아).
          과거의 그림자는 돔의 모든 것을 파괴하기 위해 달려온다.
          단테에 의해 산산히 흩어진 패밀리들은 모두 목숨을 걸고 맞서야 하는 함정에 빠지고 마는데...
          
          달리거나 죽거나, 그들의 마지막 질주가 시작된다!`,
          duration: "141분",
          rating: `7.97 ★★★★☆`,
        //   image: poster1,
        },
        {
          id: 2,
          title: "범죄도시 3",
          genere: "액션, 범죄, 스릴러, 느와르, 블랙 코미디, 형사",
          info: `주요정보에 대해서 알 수 있는 테스트입니다.`,
          cast: `마동석, 이준혁, 아오키 무네타카 외... `,
          synopsis: `대체불가 괴물형사 마석도, 서울 광수대로 발탁!

          베트남 납치 살해범 검거 후 7년 뒤,
          ‘마석도’(마동석)는 새로운 팀원들과 함께 살인사건을 조사한다.
          사건 조사 중, ‘마석도’는 신종 마약 사건이 연루되었음을 알게 되고 수사를 확대한다.
          한편, 마약 사건의 배후인 '주성철'(이준혁)은 계속해서 판을 키워가고
          약을 유통하던 일본 조직과 '리키'(아오키 무네타카)까지 한국에 들어오며
          사건의 규모는 점점 더 커져가는데...
          
          나쁜 놈들 잡는 데 이유 없고 제한 없다
          커진 판도 시원하게 싹 쓸어버린다!`,
          duration: `105분`,
          rating: "평점 : 8.49 ★★★★☆",
        //   image: poster2,
        },
      ],
    };
  }

  render() {
    const { movies } = this.state;
    const selectedMovieId = 1;
  
    return (
      <div className="container">
        {movies.map((movie) => {
          if (movie.id === selectedMovieId) {
            return (
              <div key={movie.id} className="movie-container">
                <img src={movie.image} alt={movie.title} style={{ width: '200px', height: '300px' }} />
                <h2>{movie.title}</h2>
                <p><strong>장르 : </strong>{movie.genre}</p>
                <p>{movie.synopsis.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}</p>
                <p><strong>상영 시간 : </strong>{movie.duration}</p>
                <p><strong>평점 : </strong>{movie.rating}</p>
                <p><strong>출연진 : </strong> {movie.cast}</p>
                <button style={{width: '50px', height: '50px'}}>다음 영화</button>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}



export default MovieDetail;