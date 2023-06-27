import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/Profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/Profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/Profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/ARTICLES">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
