import { useRouter } from 'next/router';
function BlogDetails() {
  const router = useRouter();
  return (
    <div className="blog__details">
      <article>
        <h4></h4>
        <div className="img__container"></div>
        <div className="description">
          <div className="author__container">
            <div className="author__img"></div>
            <div className="author__info">
              <h5></h5>
              <span></span>
            </div>
          </div>
          <h5></h5>
        </div>
        <article>
          <h5></h5>
          <p></p>
        </article>
      </article>
      <div className="conclution">
        <h4>Conclusion:-</h4>
        <p>
          Learn by breaking things into parts and enjoying that you are doing
          that is the effective way to get going with programming. Because
          without understanding it you cant go long way. So, have fun
        </p>
        <h5>I am Abdul malik.</h5>
        <span> Front-end-developer & UI/UX designer</span>
        <p>I am there to make developer life easier.</p>
      </div>
    </div>
  );
}

export default BlogDetails;
