const Home = () => {
    return (
        <>
        <>
          <h1 class="title">TP 06 MAKISHI - LASORSA</h1>
          <section class="carousel" aria-label="Gallery">
            <ol class="carousel__viewport">
              <li id="carousel__slide1" tabindex="0" class="carousel__slide">
                <div>
                  <img src="https://picsum.photos/550/400" />
                </div>
                <div class="carousel__snapper">
                  <a href="#carousel__slide6" class="carousel__prev">
                    Go to last slide
                  </a>
                  <a href="#carousel__slide2" class="carousel__next">
                    Go to next slide
                  </a>
                </div>
              </li>
  
              <li id="carousel__slide2" tabindex="0" class="carousel__slide">
                <div>
                  <img src="https://picsum.photos/550/400?grayscale" />
                </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide1" class="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide3" class="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li id="carousel__slide3" tabindex="0" class="carousel__slide">
                <div>
                  <img src="https://picsum.photos/550/400/?blur"/>
                </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide2" class="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide4" class="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li id="carousel__slide4" tabindex="0" class="carousel__slide">
                <div>
                  <img src="https://picsum.photos/550/400?grayscale&blur=2"/>
                </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide3" class="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide5" class="carousel__next">
                  Go to first slide
                </a>
              </li>
              <li id="carousel__slide5" tabindex="0" class="carousel__slide">
                <div>
                  <img src="https://picsum.photos/550/399?grayscale"/>
                </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide4" class="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide6" class="carousel__next">
                  Go to first slide
                </a>
              </li>
              <li id="carousel__slide6" tabindex="0" class="carousel__slide">
                <div>
                  <img src="https://picsum.photos/550/398" />
                </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide5" class="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide1" class="carousel__next">
                  Go to first slide
                </a>
              </li>
            </ol>
            <aside class="carousel__navigation">
              <ol class="carousel__navigation-list">
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide1" class="carousel__navigation-button">
                    Go to slide 1
                  </a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide2" class="carousel__navigation-button">
                    Go to slide 2
                  </a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide3" class="carousel__navigation-button">
                    Go to slide 3
                  </a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide4" class="carousel__navigation-button">
                    Go to slide 4
                  </a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide5" class="carousel__navigation-button">
                    Go to slide 5
                  </a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide6" class="carousel__navigation-button">
                    Go to slide 6
                  </a>
                </li>
              </ol>
            </aside>
          </section>
        </>
      </>
);
};

export default Home;